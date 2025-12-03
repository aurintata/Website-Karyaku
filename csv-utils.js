// CSV Database Utility Functions
// This file handles saving data to CSV files

function saveToCSV(filename, data, headers) {
    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('karyaku_csv_data') || '{}');
    if (!existingData[filename]) {
        existingData[filename] = [];
    }
    
    // Add new data
    if (Array.isArray(data)) {
        existingData[filename] = existingData[filename].concat(data);
    } else {
        existingData[filename].push(data);
    }
    
    // Save back to localStorage
    localStorage.setItem('karyaku_csv_data', JSON.stringify(existingData));
    
    // Convert all data to CSV format
    let csvContent = '';
    
    // Add headers if provided
    if (headers && headers.length > 0) {
        csvContent += headers.join(',') + '\n';
    }
    
    // Add all data rows (including existing ones)
    existingData[filename].forEach(row => {
        if (Array.isArray(row)) {
            // Escape commas and quotes in CSV
            const escapedRow = row.map(cell => {
                if (cell === null || cell === undefined) return '';
                const str = String(cell);
                if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                    return '"' + str.replace(/"/g, '""') + '"';
                }
                return str;
            });
            csvContent += escapedRow.join(',') + '\n';
        }
    });
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

function saveUploadToCSV(uploadData) {
    const headers = ['timestamp', 'creator_id', 'creator_name', 'title', 'price', 'description', 'filename'];
    const row = [
        new Date().toISOString(),
        uploadData.creator_id || '',
        uploadData.creator_name || '',
        uploadData.title || '',
        uploadData.price || '',
        uploadData.description || '',
        uploadData.filename || ''
    ];
    
    saveToCSV('uploads.csv', row, headers);
}

function saveCheckoutToCSV(checkoutData) {
    const headers = ['timestamp', 'user_id', 'username', 'product_id', 'product_name', 'price', 'creator_id', 'creator_name'];
    const row = [
        new Date().toISOString(),
        checkoutData.user_id || '',
        checkoutData.username || '',
        checkoutData.product_id || '',
        checkoutData.product_name || '',
        checkoutData.price || '',
        checkoutData.creator_id || '',
        checkoutData.creator_name || ''
    ];
    
    saveToCSV('checkouts.csv', row, headers);
}

function saveRegistrationToCSV(registrationData) {
    const headers = ['timestamp', 'name', 'email', 'creator_id', 'registration_date'];
    const row = [
        new Date().toISOString(),
        registrationData.name || '',
        registrationData.email || '',
        registrationData.creator_id || '',
        new Date().toLocaleDateString('id-ID')
    ];
    
    saveToCSV('registrations.csv', row, headers);
}

function saveLoginToCSV(loginData) {
    const headers = ['timestamp', 'email', 'creator_id', 'username', 'login_status', 'login_date'];
    const row = [
        new Date().toISOString(),
        loginData.email || '',
        loginData.creator_id || '',
        loginData.username || '',
        loginData.status || 'success',
        new Date().toLocaleDateString('id-ID')
    ];
    
    saveToCSV('logins.csv', row, headers);
}

// Function to export all CSV data at once (optional utility)
function exportAllCSVData() {
    const csvData = JSON.parse(localStorage.getItem('karyaku_csv_data') || '{}');
    const files = ['registrations.csv', 'logins.csv', 'uploads.csv', 'checkouts.csv'];
    
    files.forEach(filename => {
        if (csvData[filename] && csvData[filename].length > 0) {
            // Get headers based on filename
            let headers = [];
            if (filename === 'registrations.csv') {
                headers = ['timestamp', 'name', 'email', 'creator_id', 'registration_date'];
            } else if (filename === 'logins.csv') {
                headers = ['timestamp', 'email', 'creator_id', 'username', 'login_status', 'login_date'];
            } else if (filename === 'uploads.csv') {
                headers = ['timestamp', 'creator_id', 'creator_name', 'title', 'price', 'description', 'filename'];
            } else if (filename === 'checkouts.csv') {
                headers = ['timestamp', 'user_id', 'username', 'product_id', 'product_name', 'price', 'creator_id', 'creator_name'];
            }
            
            // Convert to CSV and download
            let csvContent = headers.join(',') + '\n';
            csvData[filename].forEach(row => {
                if (Array.isArray(row)) {
                    const escapedRow = row.map(cell => {
                        if (cell === null || cell === undefined) return '';
                        const str = String(cell);
                        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                            return '"' + str.replace(/"/g, '""') + '"';
                        }
                        return str;
                    });
                    csvContent += escapedRow.join(',') + '\n';
                }
            });
            
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(url), 100);
        }
    });
}

