/**
 * Compress and resize images to reduce file size for localStorage storage
 */

export const compressImage = (file, maxWidth = 1200, maxHeight = 800, quality = 0.8) => {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            // Calculate new dimensions while maintaining aspect ratio
            let { width, height } = img;

            if (width > height) {
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = (width * maxHeight) / height;
                    height = maxHeight;
                }
            }

            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            // Draw and compress
            ctx.drawImage(img, 0, 0, width, height);

            // Convert to compressed data URL
            const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);

            resolve({
                dataUrl: compressedDataUrl,
                originalSize: file.size,
                compressedSize: compressedDataUrl.length,
                dimensions: { width, height }
            });
        };

        img.onerror = () => {
            reject(new Error('Failed to load image'));
        };

        img.src = URL.createObjectURL(file);
    });
};

export const getImageFileSize = (dataUrl) => {
    // Rough calculation of data URL size in bytes
    return Math.round((dataUrl.length * 3) / 4);
};

export const checkStorageQuota = () => {
    try {
        // Test localStorage capacity
        const testKey = 'quota_test';
        const testData = 'x'.repeat(1024 * 1024); // 1MB test

        localStorage.setItem(testKey, testData);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
};

export const estimateStorageUsage = () => {
    try {
        let totalSize = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalSize += localStorage[key].length;
            }
        }
        return totalSize;
    } catch (e) {
        return 0;
    }
};

export const clearOldData = () => {
    try {
        // Remove old test data or temporary data
        const keysToRemove = [];
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                if (key.startsWith('temp_') || key.startsWith('quota_test')) {
                    keysToRemove.push(key);
                }
            }
        }

        keysToRemove.forEach(key => localStorage.removeItem(key));
        return true;
    } catch (e) {
        return false;
    }
};
