<?php
// MySQL Database Connection
// Place this file on your server to connect to your MySQL database

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Database configuration
$host = 'auth-db1373.hstgr.io';
$dbname = 'u976524705_amazon';
$username = 'u976524705_amazon';
$password = 'z$T8zb|>GXA7';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get the action from the request
    $action = $_GET['action'] ?? $_POST['action'] ?? '';

    switch ($action) {
        case 'get_news':
            getNews($pdo);
            break;
        case 'add_news':
            addNews($pdo);
            break;
        case 'update_news':
            updateNews($pdo);
            break;
        case 'delete_news':
            deleteNews($pdo);
            break;
        case 'get_partners':
            getPartners($pdo);
            break;
        case 'add_partner':
            addPartner($pdo);
            break;
        case 'delete_partner':
            deletePartner($pdo);
            break;
        case 'get_gallery':
            getGallery($pdo);
            break;
        case 'add_gallery_image':
            addGalleryImage($pdo);
            break;
        case 'delete_gallery_image':
            deleteGalleryImage($pdo);
            break;
        case 'test_connection':
            testConnection($pdo);
            break;
        case 'admin_login':
            adminLogin($pdo);
            break;
        case 'verify_admin_token':
            verifyAdminToken($pdo);
            break;
        case 'get_jobs':
            getJobs($pdo);
            break;
        case 'add_job':
            addJob($pdo);
            break;
        case 'update_job':
            updateJob($pdo);
            break;
        case 'delete_job':
            deleteJob($pdo);
            break;
        default:
            echo json_encode(['error' => 'Invalid action']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
}

function testConnection($pdo)
{
    echo json_encode([
        'success' => true,
        'message' => 'MySQL connection successful',
        'config' => [
            'host' => 'auth-db1373.hstgr.io',
            'database' => 'u976524705_amazon',
            'user' => 'u976524705_amazon'
        ]
    ]);
}

function getNews($pdo)
{
    try {
        // Create news table if it doesn't exist
        $pdo->exec("CREATE TABLE IF NOT EXISTS news (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            excerpt TEXT,
            content TEXT,
            image LONGTEXT,
            date DATE,
            author VARCHAR(100),
            category VARCHAR(50),
            tags JSON,
            published BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )");

        // Alter existing table to change image field to LONGTEXT if it exists
        try {
            $pdo->exec("ALTER TABLE news MODIFY COLUMN image LONGTEXT");
        } catch (PDOException $e) {
            // Column might not exist yet, ignore error
        }

        $stmt = $pdo->query("SELECT * FROM news ORDER BY date DESC");
        $news = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // If no news, insert sample data
        if (empty($news)) {
            insertSampleNews($pdo);
            $stmt = $pdo->query("SELECT * FROM news ORDER BY date DESC");
            $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($news);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function insertSampleNews($pdo)
{
    $sampleNews = [
        [
            'title' => 'Amazon Mineworks Achieves Record-Breaking Coal Production in Q4 2023',
            'excerpt' => 'Amazon Mineworks has successfully achieved unprecedented coal production levels in the fourth quarter of 2023, marking a significant milestone in our operational excellence and sustainable mining practices.',
            'content' => 'Our state-of-the-art mining operations have reached new heights as Amazon Mineworks reports record-breaking coal production in Q4 2023. This achievement represents a 23% increase compared to the previous quarter and demonstrates our commitment to operational excellence.',
            'image' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'date' => '2024-01-15',
            'author' => 'Production Team',
            'category' => 'Production',
            'tags' => json_encode(['coal', 'mining', 'production', 'record', 'achievement']),
            'published' => 1
        ],
        [
            'title' => 'New Safety Protocol Implementation Reduces Workplace Incidents by 40%',
            'excerpt' => 'Amazon Mineworks has successfully implemented a comprehensive new safety protocol system that has resulted in a remarkable 40% reduction in workplace incidents across all mining operations.',
            'content' => 'Safety remains our top priority at Amazon Mineworks, and we\'re proud to announce the successful implementation of our new comprehensive safety protocol system.',
            'image' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'date' => '2024-01-10',
            'author' => 'Safety Department',
            'category' => 'Safety',
            'tags' => json_encode(['safety', 'innovation', 'protocol', 'workplace', 'improvement']),
            'published' => 1
        ]
    ];

    $stmt = $pdo->prepare("INSERT INTO news (title, excerpt, content, image, date, author, category, tags, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    foreach ($sampleNews as $news) {
        $stmt->execute([
            $news['title'],
            $news['excerpt'],
            $news['content'],
            $news['image'],
            $news['date'],
            $news['author'],
            $news['category'],
            $news['tags'],
            $news['published']
        ]);
    }
}

function addNews($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);

    try {
        $stmt = $pdo->prepare("INSERT INTO news (title, excerpt, content, image, date, author, category, tags, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $input['title'],
            $input['excerpt'],
            $input['content'],
            $input['image'],
            $input['date'],
            $input['author'],
            $input['category'],
            json_encode($input['tags']),
            $input['published'] ? 1 : 0
        ]);

        $id = $pdo->lastInsertId();
        echo json_encode(['success' => true, 'id' => $id]);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function updateNews($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'];

    try {
        $stmt = $pdo->prepare("UPDATE news SET title=?, excerpt=?, content=?, image=?, date=?, author=?, category=?, tags=?, published=?, updated_at=CURRENT_TIMESTAMP WHERE id=?");
        $stmt->execute([
            $input['title'],
            $input['excerpt'],
            $input['content'],
            $input['image'],
            $input['date'],
            $input['author'],
            $input['category'],
            json_encode($input['tags']),
            $input['published'] ? 1 : 0,
            $id
        ]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function deleteNews($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'] ?? null;

    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID is required']);
        return;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM news WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

function getPartners($pdo)
{
    try {
        $pdo->exec("CREATE TABLE IF NOT EXISTS partners (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image LONGTEXT,
            alt VARCHAR(255),
            uploadedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");

        // Alter existing table to change image field to LONGTEXT if it exists
        try {
            $pdo->exec("ALTER TABLE partners MODIFY COLUMN image LONGTEXT");
        } catch (PDOException $e) {
            // Column might not exist yet, ignore error
        }

        $stmt = $pdo->query("SELECT * FROM partners ORDER BY uploadedAt DESC");
        $partners = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($partners);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function addPartner($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);

    try {
        $stmt = $pdo->prepare("INSERT INTO partners (image, alt) VALUES (?, ?)");
        $stmt->execute([$input['image'], $input['alt']]);

        $id = $pdo->lastInsertId();
        echo json_encode(['success' => true, 'id' => $id]);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function deletePartner($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'] ?? null;

    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID is required']);
        return;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM partners WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

function getGallery($pdo)
{
    try {
        $pdo->exec("CREATE TABLE IF NOT EXISTS gallery (
            id INT AUTO_INCREMENT PRIMARY KEY,
            src LONGTEXT,
            alt VARCHAR(255),
            uploadedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");

        // Alter existing table to change src field to LONGTEXT if it exists
        try {
            $pdo->exec("ALTER TABLE gallery MODIFY COLUMN src LONGTEXT");
        } catch (PDOException $e) {
            // Column might not exist yet, ignore error
        }

        $stmt = $pdo->query("SELECT * FROM gallery ORDER BY uploadedAt DESC");
        $gallery = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // If no gallery, insert sample data
        if (empty($gallery)) {
            insertSampleGallery($pdo);
            $stmt = $pdo->query("SELECT * FROM gallery ORDER BY uploadedAt DESC");
            $gallery = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($gallery);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function insertSampleGallery($pdo)
{
    // Sample base64 images (1x1 pixel PNGs)
    $sampleGallery = [
        ['src' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'alt' => 'Mining operations showcase 1'],
        ['src' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'alt' => 'Mining operations showcase 2'],
        ['src' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'alt' => 'Mining operations showcase 3']
    ];

    $stmt = $pdo->prepare("INSERT INTO gallery (src, alt) VALUES (?, ?)");

    foreach ($sampleGallery as $image) {
        $stmt->execute([$image['src'], $image['alt']]);
    }
}

function addGalleryImage($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);

    try {
        $stmt = $pdo->prepare("INSERT INTO gallery (src, alt) VALUES (?, ?)");
        $stmt->execute([$input['src'], $input['alt']]);

        $id = $pdo->lastInsertId();
        echo json_encode(['success' => true, 'id' => $id]);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function deleteGalleryImage($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'] ?? null;

    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID is required']);
        return;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM gallery WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

function adminLogin($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['username']) || !isset($input['password'])) {
        echo json_encode(['success' => false, 'message' => 'Username and password required']);
        return;
    }

    try {
        // Create admin users table if it doesn't exist
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS admin_users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'administrator',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        ");

        // Check if admin users exist, if not insert default ones
        $stmt = $pdo->query("SELECT COUNT(*) FROM admin_users");
        $count = $stmt->fetchColumn();

        if ($count == 0) {
            $defaultAdmins = [
                ['username' => 'admin', 'password' => 'z$T8zb|>GXA7', 'email' => 'admin@amazonmineworks.com', 'role' => 'administrator'],
                ['username' => 'admin@amazon', 'password' => ';@DI$>yv3Zc"bi1v', 'email' => 'admin@amazon.com', 'role' => 'administrator']
            ];

            $stmt = $pdo->prepare("INSERT INTO admin_users (username, password, email, role) VALUES (?, ?, ?, ?)");
            foreach ($defaultAdmins as $admin) {
                $stmt->execute([$admin['username'], $admin['password'], $admin['email'], $admin['role']]);
            }
        }

        // Verify credentials
        $stmt = $pdo->prepare("SELECT * FROM admin_users WHERE username = ? AND password = ?");
        $stmt->execute([$input['username'], $input['password']]);
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($admin) {
            // Generate a simple token (in production, use proper JWT)
            $token = base64_encode(json_encode([
                'id' => $admin['id'],
                'username' => $admin['username'],
                'email' => $admin['email'],
                'role' => $admin['role'],
                'timestamp' => time()
            ]));

            echo json_encode([
                'success' => true,
                'token' => $token,
                'user' => [
                    'id' => $admin['id'],
                    'username' => $admin['username'],
                    'email' => $admin['email'],
                    'role' => $admin['role']
                ]
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
}

function verifyAdminToken($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['token'])) {
        echo json_encode(['success' => false, 'message' => 'Token required']);
        return;
    }

    try {
        $tokenData = json_decode(base64_decode($input['token']), true);

        if (!$tokenData || !isset($tokenData['username'])) {
            echo json_encode(['success' => false, 'message' => 'Invalid token']);
            return;
        }

        // Verify user still exists
        $stmt = $pdo->prepare("SELECT * FROM admin_users WHERE username = ?");
        $stmt->execute([$tokenData['username']]);
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($admin) {
            echo json_encode([
                'success' => true,
                'user' => [
                    'id' => $admin['id'],
                    'username' => $admin['username'],
                    'email' => $admin['email'],
                    'role' => $admin['role']
                ]
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'User not found']);
        }
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Token verification failed: ' . $e->getMessage()]);
    }
}

function getJobs($pdo)
{
    try {
        // Create jobs table if it doesn't exist
        $pdo->exec("CREATE TABLE IF NOT EXISTS jobs (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            department VARCHAR(100),
            location VARCHAR(255),
            type VARCHAR(50),
            salary VARCHAR(100),
            description TEXT,
            pdfFile LONGTEXT,
            pdfPreview LONGTEXT,
            active BOOLEAN DEFAULT TRUE,
            postedDate DATE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )");

        // Alter existing table to change pdf fields to LONGTEXT if they exist
        try {
            $pdo->exec("ALTER TABLE jobs MODIFY COLUMN pdfFile LONGTEXT");
            $pdo->exec("ALTER TABLE jobs MODIFY COLUMN pdfPreview LONGTEXT");
        } catch (PDOException $e) {
            // Columns might not exist yet, ignore error
        }

        $stmt = $pdo->query("SELECT * FROM jobs ORDER BY postedDate DESC");
        $jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // If no jobs, insert sample data
        if (empty($jobs)) {
            insertSampleJobs($pdo);
            $stmt = $pdo->query("SELECT * FROM jobs ORDER BY postedDate DESC");
            $jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($jobs);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function addJob($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input || !isset($input['title']) || !isset($input['pdfFile'])) {
        echo json_encode(['success' => false, 'message' => 'Title and PDF file are required']);
        return;
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO jobs (title, department, location, type, salary, description, pdfFile, pdfPreview, active, postedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $input['title'],
            $input['department'] ?? '',
            $input['location'] ?? '',
            $input['type'] ?? 'Full-time',
            $input['salary'] ?? '',
            $input['description'] ?? '',
            $input['pdfFile'],
            $input['pdfPreview'] ?? '',
            $input['active'] ? 1 : 0,
            $input['postedDate'] ?? date('Y-m-d')
        ]);

        $jobId = $pdo->lastInsertId();
        $stmt = $pdo->prepare("SELECT * FROM jobs WHERE id = ?");
        $stmt->execute([$jobId]);
        $job = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode(['success' => true, 'job' => $job]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function updateJob($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'] ?? null;

    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID is required']);
        return;
    }

    try {
        $stmt = $pdo->prepare("UPDATE jobs SET title = ?, department = ?, location = ?, type = ?, salary = ?, description = ?, pdfFile = ?, pdfPreview = ?, active = ?, postedDate = ? WHERE id = ?");
        $stmt->execute([
            $input['title'],
            $input['department'] ?? '',
            $input['location'] ?? '',
            $input['type'] ?? 'Full-time',
            $input['salary'] ?? '',
            $input['description'] ?? '',
            $input['pdfFile'] ?? '',
            $input['pdfPreview'] ?? '',
            $input['active'] ? 1 : 0,
            $input['postedDate'] ?? date('Y-m-d'),
            $id
        ]);

        $stmt = $pdo->prepare("SELECT * FROM jobs WHERE id = ?");
        $stmt->execute([$id]);
        $job = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode(['success' => true, 'job' => $job]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function deleteJob($pdo)
{
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'] ?? null;

    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID is required']);
        return;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM jobs WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

function insertSampleJobs($pdo)
{
    $sampleJobs = [
        [
            'title' => 'Senior Mining Engineer',
            'department' => 'Engineering',
            'location' => 'Remote / On-site',
            'type' => 'Full-time',
            'salary' => '$80,000 - $120,000',
            'description' => 'Lead mining operations and oversee safety protocols for our expanding coal mining operations. We are seeking an experienced mining engineer to join our team and drive operational excellence.',
            'pdfFile' => 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoyNTAgNzAwIFRkCihTZW5pb3IgTWluaW5nIEVuZ2luZWVyKSBUagoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAwOSAwMDAwMCBuCjAwMDAwMDAwNTggMDAwMDAgbgowMDAwMDAwMTE1IDAwMDAwIG4KMDAwMDAwMDI2MCAwMDAwMCBuCjAwMDAwMDAzMjcgMDAwMDAgbgp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQxNQolJUVPRgo=',
            'pdfPreview' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'active' => 1,
            'postedDate' => '2024-01-15'
        ],
        [
            'title' => 'Environmental Compliance Specialist',
            'department' => 'Environmental',
            'location' => 'On-site',
            'type' => 'Full-time',
            'salary' => '$60,000 - $90,000',
            'description' => 'Ensure compliance with environmental regulations and develop sustainable mining practices. Join our environmental team to help us maintain the highest standards of environmental responsibility.',
            'pdfFile' => 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoyNTAgNzAwIFRkCihFbnZpcm9ubWVudGFsIENvbXBsaWFuY2UpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmCjAwMDAwMDAwMDkgMDAwMDAgbgowMDAwMDAwMDU4IDAwMDAwIG4KMDAwMDAwMDExNSAwMDAwMCBuCjAwMDAwMDAyNjAgMDAwMDAgbgowMDAwMDAwMzI3IDAwMDAwIG4KdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0MTUKJSlFT0YK',
            'pdfPreview' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'active' => 1,
            'postedDate' => '2024-01-10'
        ]
    ];

    foreach ($sampleJobs as $job) {
        $stmt = $pdo->prepare("INSERT INTO jobs (title, department, location, type, salary, description, pdfFile, pdfPreview, active, postedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $job['title'],
            $job['department'],
            $job['location'],
            $job['type'],
            $job['salary'],
            $job['description'],
            $job['pdfFile'],
            $job['pdfPreview'],
            $job['active'],
            $job['postedDate']
        ]);
    }
}
