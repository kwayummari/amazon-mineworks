// Real MySQL Database Service
// Connects to your MySQL database via PHP backend

const API_BASE_URL = 'https://www.amazonmineworks.co.tz/backend/database.php'; // Local PHP server URL

class RealMySQLService {
    constructor() {
        this.config = {
            host: 'auth-db1373.hstgr.io',
            database: 'u976524705_amazon',
            user: 'u976524705_amazon',
            password: 'z$T8zb|>GXA7'
        };
    }

    // Generic API call method
    async apiCall(action, method = 'GET', data = null) {
        try {
            const url = `${API_BASE_URL}?action=${action}`;
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            if (data && method !== 'GET') {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`API call failed for action ${action}:`, error);
            // Fallback to localStorage for development
            return this.fallbackToLocalStorage(action, data);
        }
    }

    // Fallback to localStorage when API is not available
    fallbackToLocalStorage(action, data) {
        console.log('Falling back to localStorage for development');
        const localData = JSON.parse(localStorage.getItem(action.replace('get_', '')) || '[]');
        return localData;
    }

    // Migrate localStorage data to MySQL
    async migrateLocalStorageToMySQL() {
        try {
            console.log('Starting migration from localStorage to MySQL...');

            // Get existing localStorage data
            const localNews = JSON.parse(localStorage.getItem('news') || '[]');
            const localPartners = JSON.parse(localStorage.getItem('partners') || '[]');
            const localGallery = JSON.parse(localStorage.getItem('gallery') || '[]');

            console.log('Found localStorage data:', {
                news: localNews.length,
                partners: localPartners.length,
                gallery: localGallery.length
            });

            // Migrate news data
            if (localNews.length > 0) {
                for (const article of localNews) {
                    try {
                        await this.addNews(article);
                        console.log('Migrated news article:', article.title);
                    } catch (error) {
                        console.error('Failed to migrate news article:', article.title, error);
                    }
                }
            }

            // Migrate partners data
            if (localPartners.length > 0) {
                for (const partner of localPartners) {
                    try {
                        await this.addPartner(partner);
                        console.log('Migrated partner:', partner.alt);
                    } catch (error) {
                        console.error('Failed to migrate partner:', partner.alt, error);
                    }
                }
            }

            // Migrate gallery data
            if (localGallery.length > 0) {
                for (const image of localGallery) {
                    try {
                        await this.addGalleryImage(image);
                        console.log('Migrated gallery image:', image.alt);
                    } catch (error) {
                        console.error('Failed to migrate gallery image:', image.alt, error);
                    }
                }
            }

            console.log('Migration completed successfully!');
            return { success: true, message: 'Data migrated successfully' };
        } catch (error) {
            console.error('Migration failed:', error);
            return { success: false, error: error.message };
        }
    }

    // Check if MySQL has data, if not, use localStorage data
    async getNewsWithFallback() {
        try {
            const mysqlNews = await this.getNews();
            if (mysqlNews && mysqlNews.length > 0) {
                return mysqlNews;
            }

            // If MySQL is empty, get from localStorage
            const localNews = JSON.parse(localStorage.getItem('news') || '[]');
            if (localNews.length > 0) {
                console.log('Using localStorage news data as MySQL is empty');
                return localNews;
            }

            return [];
        } catch (error) {
            console.error('Error getting news:', error);
            // Fallback to localStorage
            return JSON.parse(localStorage.getItem('news') || '[]');
        }
    }

    async getPartnersWithFallback() {
        try {
            const mysqlPartners = await this.getPartners();
            if (mysqlPartners && mysqlPartners.length > 0) {
                return mysqlPartners;
            }

            // If MySQL is empty, get from localStorage
            const localPartners = JSON.parse(localStorage.getItem('partners') || '[]');
            if (localPartners.length > 0) {
                console.log('Using localStorage partners data as MySQL is empty');
                return localPartners;
            }

            return [];
        } catch (error) {
            console.error('Error getting partners:', error);
            // Fallback to localStorage
            return JSON.parse(localStorage.getItem('partners') || '[]');
        }
    }

    async getGalleryWithFallback() {
        try {
            const mysqlGallery = await this.getGallery();
            if (mysqlGallery && mysqlGallery.length > 0) {
                return mysqlGallery;
            }

            // If MySQL is empty, get from localStorage
            const localGallery = JSON.parse(localStorage.getItem('gallery') || '[]');
            if (localGallery.length > 0) {
                console.log('Using localStorage gallery data as MySQL is empty');
                return localGallery;
            }

            return [];
        } catch (error) {
            console.error('Error getting gallery:', error);
            // Fallback to localStorage
            return JSON.parse(localStorage.getItem('gallery') || '[]');
        }
    }

    // Test database connection
    async testConnection() {
        return await this.apiCall('test_connection');
    }

    // News operations
    async getNews() {
        return await this.apiCall('get_news');
    }

    async getNewsById(id) {
        const allNews = await this.getNews();
        return allNews.find(article => article.id === parseInt(id)) || null;
    }

    async addNews(article) {
        return await this.apiCall('add_news', 'POST', article);
    }

    async updateNews(id, updates) {
        return await this.apiCall('update_news', 'PUT', { id, ...updates });
    }

    async deleteNews(id) {
        return await this.apiCall('delete_news', 'DELETE', { id });
    }

    // Partners operations
    async getPartners() {
        return await this.apiCall('get_partners');
    }

    async addPartner(partner) {
        return await this.apiCall('add_partner', 'POST', partner);
    }

    async updatePartner(id, updates) {
        return await this.apiCall('update_partner', 'PUT', { id, ...updates });
    }

    async deletePartner(id) {
        return await this.apiCall('delete_partner', 'DELETE', { id });
    }

    // Gallery operations
    async getGallery() {
        return await this.apiCall('get_gallery');
    }

    async addGalleryImage(image) {
        return await this.apiCall('add_gallery_image', 'POST', image);
    }

    async updateGalleryImage(id, updates) {
        return await this.apiCall('update_gallery_image', 'PUT', { id, ...updates });
    }

    async deleteGalleryImage(id) {
        return await this.apiCall('delete_gallery_image', 'DELETE', { id });
    }

    async saveGallery(gallery) {
        // For gallery reordering, we might need a different approach
        console.log('Gallery save not implemented in API yet');
        return { success: true };
    }

    // Health check
    async healthCheck() {
        const result = await this.testConnection();
        return {
            success: result.success || false,
            message: result.message || 'Connection failed',
            config: this.config
        };
    }

    // Admin Authentication with real database
    async authenticateAdmin(credentials) {
        try {
            const response = await fetch(`${API_BASE_URL}?action=admin_login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            const result = await response.json();

            if (result.success) {
                // Store the real token and user data
                localStorage.setItem('adminToken', result.token);
                localStorage.setItem('adminUser', JSON.stringify(result.user));
                return { success: true, token: result.token, user: result.user };
            } else {
                return { success: false, message: result.message || 'Login failed' };
            }
        } catch (error) {
            console.error('Authentication error:', error);
            return { success: false, message: 'Network error during authentication' };
        }
    }

    // Verify admin token
    async verifyAdminToken(token) {
        try {
            const response = await fetch(`${API_BASE_URL}?action=verify_admin_token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token })
            });

            const result = await response.json();

            if (result.success) {
                // Update stored user data
                localStorage.setItem('adminUser', JSON.stringify(result.user));
                return { success: true, user: result.user };
            } else {
                // Token is invalid, clear stored data
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUser');
                return { success: false, message: result.message || 'Token verification failed' };
            }
        } catch (error) {
            console.error('Token verification error:', error);
            return { success: false, message: 'Network error during token verification' };
        }
    }

    // Jobs methods
    async getJobs() {
        try {
            const response = await fetch(`${API_BASE_URL}?action=get_jobs`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error('Error fetching jobs:', error);
            throw error;
        }
    }

    async addJob(jobData) {
        try {
            const response = await fetch(`${API_BASE_URL}?action=add_job`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error adding job:', error);
            throw error;
        }
    }

    async updateJob(id, jobData) {
        try {
            const response = await fetch(`${API_BASE_URL}?action=update_job`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, ...jobData }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error updating job:', error);
            throw error;
        }
    }

    async deleteJob(id) {
        try {
            const response = await fetch(`${API_BASE_URL}?action=delete_job`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error deleting job:', error);
            throw error;
        }
    }

    async getJobsWithFallback() {
        try {
            const mysqlJobs = await this.getJobs();
            if (mysqlJobs && mysqlJobs.length > 0) {
                return mysqlJobs;
            }

            // If MySQL is empty, get from localStorage
            const localJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
            if (localJobs.length > 0) {
                console.log('Using localStorage jobs data as MySQL is empty');
                return localJobs;
            }

            // Return default jobs if both are empty
            return [
                {
                    id: 1,
                    title: "Senior Mining Engineer",
                    department: "Engineering",
                    location: "Remote / On-site",
                    type: "Full-time",
                    salary: "$80,000 - $120,000",
                    description: "Lead mining operations and oversee safety protocols for our expanding coal mining operations.",
                    pdfPreview: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
                    pdfUrl: "#",
                    postedDate: "2024-01-15",
                    active: true,
                },
                {
                    id: 2,
                    title: "Environmental Compliance Specialist",
                    department: "Environmental",
                    location: "On-site",
                    type: "Full-time",
                    salary: "$60,000 - $90,000",
                    description: "Ensure compliance with environmental regulations and develop sustainable mining practices.",
                    pdfPreview: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
                    pdfUrl: "#",
                    postedDate: "2024-01-10",
                    active: true,
                },
            ];
        } catch (error) {
            console.error('Error in getJobsWithFallback:', error);
            // Return default jobs on error
            return [
                {
                    id: 1,
                    title: "Senior Mining Engineer",
                    department: "Engineering",
                    location: "Remote / On-site",
                    type: "Full-time",
                    salary: "$80,000 - $120,000",
                    description: "Lead mining operations and oversee safety protocols for our expanding coal mining operations.",
                    pdfPreview: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
                    pdfUrl: "#",
                    postedDate: "2024-01-15",
                    active: true,
                },
                {
                    id: 2,
                    title: "Environmental Compliance Specialist",
                    department: "Environmental",
                    location: "On-site",
                    type: "Full-time",
                    salary: "$60,000 - $90,000",
                    description: "Ensure compliance with environmental regulations and develop sustainable mining practices.",
                    pdfPreview: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
                    pdfUrl: "#",
                    postedDate: "2024-01-10",
                    active: true,
                },
            ];
        }
    }
}

// Create singleton instance
const realMySQLService = new RealMySQLService();

export default realMySQLService;
