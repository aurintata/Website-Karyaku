// Database Utility Functions using sql.js (SQLite in the browser)
// This file handles all database operations

const DEFAULT_CREATORS = [
    {
        creator_id: 'aysar',
        name: 'Muhammad Aysar Rayyya',
        email: 'aysar@karyaku.test',
        password: 'karyaku123',
        bio: 'Ilustrator futuristik dan konseptor kota cyberpunk.',
        description: 'Portofolio penuh eksplorasi dunia futuristik dan petualangan digital.',
        image: 'https://tse4.mm.bing.net/th/id/OIP.Q_M-c9LkzOXOJF5XrOO8EgHaEO?pid=Api&P=0&h=180'
    },
    {
        creator_id: 'shafa',
        name: 'Shafa Lifia',
        email: 'shafa@karyaku.test',
        password: 'karyaku123',
        bio: 'Ilustrator karakter dan penjelajah fantasi.',
        description: 'Menggabungkan teknologi dan fantasi dalam setiap karya.',
        image: 'https://tse1.mm.bing.net/th/id/OIP.zMUNwk9sUu-QzrJW9wVAhwHaFn?pid=Api&P=0&h=180'
    },
    {
        creator_id: 'rafifferre',
        name: 'Rafifferre Narendra',
        email: 'rafifferre@karyaku.test',
        password: 'karyaku123',
        bio: 'Digital artist bertema cyberpunk dan sci-fi.',
        description: 'Fokus pada warna neon dan suasana kota masa depan.',
        image: 'https://tse4.mm.bing.net/th/id/OIP.3ehusjzsp4pipVLFFEaZbgHaHa?pid=Api&P=0&h=180'
    },
    {
        creator_id: 'creativemind',
        name: 'CreativeMind',
        email: 'creative@karyaku.test',
        password: 'karyaku123',
        bio: 'Studio seni abstrak independen.',
        description: 'Eksperimen visual abstrak bernuansa retro-modern.',
        image: 'https://tse3.mm.bing.net/th/id/OIP.nIA7p4ZGKlDMgB1lfkFjHwHaJQ?pid=Api&P=0&h=180'
    },
    {
        creator_id: 'artflow',
        name: 'ArtFlow Studio',
        email: 'artflow@karyaku.test',
        password: 'karyaku123',
        bio: 'Kolektif seniman konseptual.',
        description: 'Menghasilkan lanskap fantasi dengan atmosfer magis.',
        image: 'https://tse1.mm.bing.net/th/id/OIP.SYdakG1lzGqvXTnfGKo8KwHaFj?pid=Api&P=0&h=180'
    },
    {
        creator_id: 'audrick',
        name: 'Muhammad Audrick',
        email: 'audrick@karyaku.test',
        password: 'karyaku123',
        bio: 'Konseptor kota futuristik.',
        description: 'Menghadirkan cityscape penuh detail arsitektur canggih.',
        image: 'https://tse4.mm.bing.net/th/id/OIP.3jeyUch2pP-GJ4dE6dt8kAHaEK?pid=Api&P=0&h=180'
    },
    {
        creator_id: 'tafta',
        name: 'Tafta Aurinnisa',
        email: 'tafta@karyaku.test',
        password: 'karyaku123',
        bio: 'Perancang visual bernuansa minimalis.',
        description: 'Menciptakan karya abstrak lembut untuk interior modern.',
        image: 'https://tse4.mm.bing.net/th/id/OIP.EJSVNFXnfjV3g9uhr9kYHgHaDt?pid=Api&P=0&h=180'
    },
    {
        creator_id: 'naufal',
        name: 'Naufal Satria',
        email: 'naufal@karyaku.test',
        password: 'karyaku123',
        bio: 'Ilustrator potret minimalis.',
        description: 'Memadukan garis tegas dengan ekspresi emosional.',
        image: 'https://tse2.mm.bing.net/th/id/OIP.5Z5LA3dGH5VmvBRpOZLzgwHaFj?pid=Api&P=0&h=180'
    }
];

const DEFAULT_PRODUCTS = [
    {
        product_id: 'aysar_berkelana',
        creator_id: 'aysar',
        title: 'Berkelana',
        price: 'Rp 250.000',
        description: 'Ilustrasi petualangan futuristik yang menginspirasi kebebasan menjelajah.',
        image_url: 'https://instructor-academy.onlinecoursehost.com/content/images/2023/05/58_Top-10-Successful-Graphic-Design-Course-Creators.jpg',
        filename: 'berkelana.jpg',
        specs: 'Format: PNG, JPEG, Dimensi: 5000x4000px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'shafa_tech',
        creator_id: 'shafa',
        title: 'Tech Innovation',
        price: 'Rp 180.041',
        description: 'Konsep art minimalis bertema teknologi, menunjukkan integrasi manusia dan mesin.',
        image_url: 'https://tse1.mm.bing.net/th/id/OIP.k_DhPlgpaSDciS5H9SoEZgHaE8?pid=Api&P=0&h=180',
        filename: 'tech-innovation.jpg',
        specs: 'Format: JPEG, Dimensi: 3000x2000px, Lisensi: Komersial Terbatas'
    },
    {
        product_id: 'rafifferre_cyber',
        creator_id: 'rafifferre',
        title: 'Cyberpunk City',
        price: 'Rp 320.054',
        description: 'Pemandangan kota cyberpunk penuh neon dengan detail arsitektur kompleks.',
        image_url: 'https://tse4.mm.bing.net/th/id/OIP.3ehusjzsp4pipVLFFEaZbgHaHa?pid=Api&P=0&h=180',
        filename: 'cyberpunk-city.png',
        specs: 'Format: PNG, PDF, Dimensi: 6000x6000px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'aysar_ruins',
        creator_id: 'aysar',
        title: 'Ancient Ruins',
        price: 'Rp 160.066',
        description: 'Lukisan digital reruntuhan kuno dengan atmosfer misterius dan pencahayaan dramatis.',
        image_url: 'https://tse4.mm.bing.net/th/id/OIP.Q_M-c9LkzOXOJF5XrOO8EgHaEO?pid=Api&P=0&h=180',
        filename: 'ancient-ruins.png',
        specs: 'Format: PNG, Dimensi: 4500x3000px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'shafa_fantasy',
        creator_id: 'shafa',
        title: 'Fantasy Portrait',
        price: 'Rp 200.036',
        description: 'Potret fantasi dengan detail halus dan fokus pada ekspresi wajah.',
        image_url: 'https://tse1.mm.bing.net/th/id/OIP.zMUNwk9sUu-QzrJW9wVAhwHaFn?pid=Api&P=0&h=180',
        filename: 'fantasy-portrait.jpg',
        specs: 'Format: JPEG, Dimensi: 3500x3500px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'rafifferre_eye',
        creator_id: 'rafifferre',
        title: 'Deep Eye',
        price: 'Rp 195.054',
        description: 'Ilustrasi mata manusia dengan refleksi lanskap kosmik di dalamnya.',
        image_url: 'https://tse3.mm.bing.net/th/id/OIP.d3bi3-ETF7sYyxtFVgYfQwHaEO?pid=Api&P=0&h=180',
        filename: 'deep-eye.png',
        specs: 'Format: PNG, Dimensi: 3000x2000px, Lisensi: Komersial Terbatas'
    },
    {
        product_id: 'creative_waves',
        creator_id: 'creativemind',
        title: 'Abstract Waves',
        price: 'Rp 100.000',
        description: 'Seni abstrak berbentuk gelombang dengan komposisi warna cerah dan dinamis.',
        image_url: 'https://tse3.mm.bing.net/th/id/OIP.nIA7p4ZGKlDMgB1lfkFjHwHaJQ?pid=Api&P=0&h=180',
        filename: 'abstract-waves.jpg',
        specs: 'Format: JPEG, Dimensi: 2000x3000px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'artflow_forest',
        creator_id: 'artflow',
        title: 'Enchanted Forest',
        price: 'Rp 275.000',
        description: 'Pemandangan hutan fantasi yang memikat dengan cahaya ajaib dan detail flora.',
        image_url: 'https://tse1.mm.bing.net/th/id/OIP.SYdakG1lzGqvXTnfGKo8KwHaFj?pid=Api&P=0&h=180',
        filename: 'enchanted-forest.png',
        specs: 'Format: PNG, Dimensi: 5000x5000px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'shafa_oceanic',
        creator_id: 'shafa',
        title: 'Oceanic Dream',
        price: 'Rp 350.000',
        description: 'Ilustrasi bawah laut dengan sentuhan fantasi dan makhluk bercahaya.',
        image_url: 'https://tse1.mm.bing.net/th/id/OIP.yHB6xbazdF1YlaoxH0kpuAHaJ4?pid=Api&P=0&h=180',
        filename: 'oceanic-dream.png',
        specs: 'Format: PNG, Dimensi: 4500x5500px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'audrick_cityscape',
        creator_id: 'audrick',
        title: 'Future Cityscape',
        price: 'Rp 280.000',
        description: 'Pemandangan kota futuristik dengan lampu neon detail, cocok untuk kolektor cyberpunk.',
        image_url: 'https://tse4.mm.bing.net/th/id/OIP.3jeyUch2pP-GJ4dE6dt8kAHaEK?pid=Api&P=0&h=180',
        filename: 'future-cityscape.jpg',
        specs: 'Format: JPEG, Dimensi: 4000x2500px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'tafta_abstract',
        creator_id: 'tafta',
        title: 'Soft Abstract',
        price: 'Rp 150.070',
        description: 'Karya seni abstrak dengan palet warna lembut dan menenangkan.',
        image_url: 'https://tse4.mm.bing.net/th/id/OIP.EJSVNFXnfjV3g9uhr9kYHgHaDt?pid=Api&P=0&h=180',
        filename: 'soft-abstract.jpg',
        specs: 'Format: JPEG, Dimensi: 2500x1500px, Lisensi: Komersial Terbatas'
    },
    {
        product_id: 'naufal_portrait',
        creator_id: 'naufal',
        title: 'Minimal Portrait',
        price: 'Rp 200.045',
        description: 'Potret minimalis dengan garis tegas, menonjolkan ekspresi subjek.',
        image_url: 'https://tse2.mm.bing.net/th/id/OIP.5Z5LA3dGH5VmvBRpOZLzgwHaFj?pid=Api&P=0&h=180',
        filename: 'minimal-portrait.png',
        specs: 'Format: PNG, Dimensi: 3000x3000px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'aysar_lofi',
        creator_id: 'aysar',
        title: 'Lofi Scenery',
        price: 'Rp 220.066',
        description: 'Pemandangan Lofi malam di Paris, cocok untuk menemani saat bersantai.',
        image_url: 'https://worldofprintables.com/wp-content/uploads/2023/06/Paris-Night-Scene-Lofi-Background-1536x861.jpg',
        filename: 'lofi-scenery.jpg',
        specs: 'Format: JPEG, Dimensi: 4000x2000px, Lisensi: Penggunaan Pribadi'
    },
    {
        product_id: 'rafifferre_sea',
        creator_id: 'rafifferre',
        title: 'Deep Sea Creatures',
        price: 'Rp 300.054',
        description: 'Ilustrasi makhluk laut dalam yang misterius dan penuh warna.',
        image_url: 'https://tse3.mm.bing.net/th/id/OIP.X5ZtzpM8JaThYiDmvA4EPwHaFV?pid=Api&P=0&h=180',
        filename: 'deep-sea-creatures.png',
        specs: 'Format: PNG, Dimensi: 4000x3000px, Lisensi: Penggunaan Pribadi'
    }
];

let db = null;
let dbInitialized = false;
let initPromise = null;

if (typeof window !== 'undefined') {
    window.KARYAKU_DEFAULT_CREATORS = DEFAULT_CREATORS;
    window.KARYAKU_DEFAULT_PRODUCTS = DEFAULT_PRODUCTS;
}

// Initialize the database
async function initDatabase() {
    if (dbInitialized && db) {
        return db;
    }
    
    // If initialization is in progress, wait for it
    if (initPromise) {
        return initPromise;
    }

    initPromise = (async () => {
        try {
            // Check if initSqlJs is available
            if (typeof initSqlJs === 'undefined') {
                throw new Error('sql.js not loaded');
            }
            
            // Load sql.js library
            const SQL = await initSqlJs({
                locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
            });

            // Try to load existing database from localStorage
            const savedDb = localStorage.getItem('karyaku_db');
            
            if (savedDb) {
                try {
                    const uint8Array = new Uint8Array(JSON.parse(savedDb));
                    db = new SQL.Database(uint8Array);
                } catch (e) {
                    console.warn('Failed to load saved database, creating new one:', e);
                    db = new SQL.Database();
                    createTables();
                    saveDatabase();
                }
            } else {
                // Create new database
                db = new SQL.Database();
                
                // Create tables
                createTables();
                
                // Save initial database
                saveDatabase();
            }
            
            await seedDatabaseWithDefaults();

            dbInitialized = true;
            return db;
        } catch (error) {
            console.error('Error initializing database:', error);
            dbInitialized = false;
            initPromise = null;
            // Fallback to localStorage if sql.js fails
            return null;
        }
    })();
    
    return initPromise;
}

// Create all necessary tables
function createTables() {
    if (!db) return;

    // Users table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            password TEXT NOT NULL,
            creator_id TEXT UNIQUE NOT NULL,
            bio TEXT,
            description TEXT,
            image TEXT,
            registered_at TEXT NOT NULL
        )
    `);

    // Products table
    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id TEXT UNIQUE NOT NULL,
            creator_id TEXT NOT NULL,
            title TEXT NOT NULL,
            price TEXT NOT NULL,
            description TEXT,
            image_url TEXT,
            filename TEXT,
            specs TEXT,
            created_at TEXT NOT NULL,
            FOREIGN KEY (creator_id) REFERENCES users(creator_id)
        )
    `);

    // Logins table (for tracking login history)
    db.run(`
        CREATE TABLE IF NOT EXISTS logins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            creator_id TEXT,
            username TEXT,
            status TEXT NOT NULL,
            login_date TEXT NOT NULL,
            timestamp TEXT NOT NULL
        )
    `);

    // Checkouts table
    db.run(`
        CREATE TABLE IF NOT EXISTS checkouts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            username TEXT NOT NULL,
            product_id TEXT NOT NULL,
            product_name TEXT NOT NULL,
            price TEXT NOT NULL,
            creator_id TEXT,
            creator_name TEXT,
            timestamp TEXT NOT NULL
        )
    `);
}

function getTableCount(tableName) {
    if (!db) return 0;
    try {
        const result = db.exec(`SELECT COUNT(*) as count FROM ${tableName}`);
        if (result.length === 0 || result[0].values.length === 0) {
            return 0;
        }
        return Number(result[0].values[0][0]) || 0;
    } catch (error) {
        console.error(`Error counting table ${tableName}:`, error);
        return 0;
    }
}

async function seedDatabaseWithDefaults() {
    if (!db) return;

    try {
        const userStmt = db.prepare(`
            INSERT OR IGNORE INTO users (email, name, password, creator_id, bio, description, image, registered_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);
        const now = new Date().toISOString();
        DEFAULT_CREATORS.forEach(creator => {
            userStmt.bind([
                creator.email,
                creator.name,
                creator.password,
                creator.creator_id,
                creator.bio || '',
                creator.description || '',
                creator.image || '',
                now
            ]);
            userStmt.step();
            userStmt.reset();
        });
        userStmt.free();

        const productStmt = db.prepare(`
            INSERT OR IGNORE INTO products (product_id, creator_id, title, price, description, image_url, filename, specs, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        DEFAULT_PRODUCTS.forEach(product => {
            productStmt.bind([
                product.product_id,
                product.creator_id,
                product.title,
                product.price,
                product.description || '',
                product.image_url || '',
                product.filename || '',
                product.specs || '',
                new Date().toISOString()
            ]);
            productStmt.step();
            productStmt.reset();
        });
        productStmt.free();

        saveDatabase();
    } catch (error) {
        console.error('Error seeding database with defaults:', error);
    }
}

// Save database to localStorage
function saveDatabase() {
    if (!db) return false;
    
    try {
        const data = db.export();
        const buffer = Array.from(data);
        const jsonData = JSON.stringify(buffer);
        
        // Check if data is too large for localStorage (usually 5-10MB limit)
        if (jsonData.length > 5 * 1024 * 1024) {
            console.warn('Database is getting large, consider cleanup');
        }
        
        localStorage.setItem('karyaku_db', jsonData);
        return true;
    } catch (error) {
        console.error('Error saving database:', error);
        // If quota exceeded, try to clear some space or warn user
        if (error.name === 'QuotaExceededError') {
            console.error('LocalStorage quota exceeded. Database cannot be saved.');
        }
        return false;
    }
}

// User operations
async function registerUser(name, email, password, creatorId, bio = '', description = '', image = '') {
    await initDatabase();
    if (!db) {
        // Fallback to localStorage
        return registerUserLocalStorage(name, email, password, creatorId, bio, description, image);
    }

    try {
        // Check if email already exists (using prepared statement)
        const emailStmt = db.prepare('SELECT email FROM users WHERE email = ?');
        emailStmt.bind([email]);
        if (emailStmt.step()) {
            emailStmt.free();
            return { success: false, message: 'Email sudah terdaftar. Silakan gunakan email lain atau login.' };
        }
        emailStmt.free();

        // Check if creator_id already exists (using prepared statement)
        const creatorStmt = db.prepare('SELECT creator_id FROM users WHERE creator_id = ?');
        creatorStmt.bind([creatorId.toLowerCase().trim()]);
        if (creatorStmt.step()) {
            creatorStmt.free();
            return { success: false, message: 'ID Kreator sudah digunakan. Silakan gunakan ID lain.' };
        }
        creatorStmt.free();

        // Insert new user
        const registeredAt = new Date().toISOString();
        db.run(`
            INSERT INTO users (email, name, password, creator_id, bio, description, image, registered_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [email, name, password, creatorId.toLowerCase().trim(), bio, description, image, registeredAt]);

        saveDatabase();

        // Get the created user (using prepared statement)
        const getUserStmt = db.prepare('SELECT * FROM users WHERE email = ?');
        getUserStmt.bind([email]);
        const userRow = getUserStmt.step() ? getUserStmt.get() : null;
        getUserStmt.free();
        
        if (!userRow) {
            return { success: false, message: 'Gagal mengambil data user setelah pendaftaran.' };
        }
        
        const user = {
            email: userRow[1],
            name: userRow[2],
            password: userRow[3],
            creator_id: userRow[4],
            bio: userRow[5] || '',
            description: userRow[6] || '',
            image: userRow[7] || '',
            registered_at: userRow[8]
        };

        return { success: true, user: user };
    } catch (error) {
        console.error('Error registering user:', error);
        return { success: false, message: 'Terjadi kesalahan saat mendaftar. Silakan coba lagi.' };
    }
}

async function loginUser(email, password) {
    await initDatabase();
    if (!db) {
        return loginUserLocalStorage(email, password);
    }

    try {
        // Use prepared statement to prevent SQL injection
        const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
        stmt.bind([email]);
        const userRow = stmt.step() ? stmt.get() : null;
        stmt.free();
        
        if (!userRow) {
            // Log failed login
            logLogin(email, '', '', 'failed');
            return { success: false, message: 'Email tidak terdaftar. Silakan daftar terlebih dahulu.' };
        }

        const user = {
            email: userRow[1],
            name: userRow[2],
            password: userRow[3],
            creator_id: userRow[4],
            bio: userRow[5] || '',
            description: userRow[6] || '',
            image: userRow[7] || '',
            registered_at: userRow[8]
        };

        if (user.password !== password) {
            logLogin(email, user.name, user.creator_id, 'failed');
            return { success: false, message: 'Password salah. Silakan coba lagi.' };
        }

        // Log successful login
        logLogin(email, user.name, user.creator_id, 'success');
        return { success: true, user: user };
    } catch (error) {
        console.error('Error logging in:', error);
        return { success: false, message: 'Terjadi kesalahan saat login. Silakan coba lagi.' };
    }
}

async function updateUserProfileImage(creatorId, imageData) {
    await initDatabase();
    const normalizedCreatorId = (creatorId || '').trim();
    if (!normalizedCreatorId) {
        return { success: false, message: 'ID kreator tidak valid.' };
    }
    if (!imageData) {
        return { success: false, message: 'Gambar tidak valid.' };
    }

    if (!db) {
        return updateUserProfileImageLocalStorage(normalizedCreatorId, imageData);
    }

    try {
        const stmt = db.prepare('SELECT image FROM users WHERE creator_id = ?');
        stmt.bind([normalizedCreatorId]);
        if (!stmt.step()) {
            stmt.free();
            return { success: false, message: 'Kreator tidak ditemukan.' };
        }
        const previousImage = stmt.get()[0] || '';
        stmt.free();

        db.run(`UPDATE users SET image = ? WHERE creator_id = ?`, [imageData, normalizedCreatorId]);
        const saved = saveDatabase();
        if (saved === false) {
            db.run(`UPDATE users SET image = ? WHERE creator_id = ?`, [previousImage || '', normalizedCreatorId]);
            return { success: false, message: 'Database penuh. Gunakan gambar dengan ukuran lebih kecil, lalu coba lagi.' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error updating profile image:', error);
        return { success: false, message: 'Terjadi kesalahan saat memperbarui foto profil.' };
    }
}

async function getAllUsers() {
    await initDatabase();
    if (!db) {
        return getAllUsersLocalStorage();
    }

    try {
        const result = db.exec('SELECT * FROM users ORDER BY registered_at DESC');
        if (result.length === 0 || result[0].values.length === 0) {
            return [];
        }

        return result[0].values.map(row => ({
            email: row[1],
            name: row[2],
            password: row[3],
            creator_id: row[4],
            bio: row[5] || '',
            description: row[6] || '',
            image: row[7] || '',
            registered_at: row[8]
        }));
    } catch (error) {
        console.error('Error getting users:', error);
        return [];
    }
}

async function getUserByCreatorId(creatorId) {
    await initDatabase();
    if (!db) {
        return getUserByCreatorIdLocalStorage(creatorId);
    }

    try {
        // Use prepared statement to prevent SQL injection
        const stmt = db.prepare('SELECT * FROM users WHERE creator_id = ?');
        stmt.bind([creatorId]);
        const row = stmt.step() ? stmt.get() : null;
        stmt.free();
        
        if (!row) {
            return null;
        }

        return {
            email: row[1],
            name: row[2],
            password: row[3],
            creator_id: row[4],
            bio: row[5] || '',
            description: row[6] || '',
            image: row[7] || '',
            registered_at: row[8]
        };
    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
}

// Product operations
async function addProduct(productId, creatorId, title, price, description, imageUrl, filename, specs = '') {
    await initDatabase();
    if (!db) {
        return addProductLocalStorage(productId, creatorId, title, price, description, imageUrl, filename, specs);
    }

    try {
        const createdAt = new Date().toISOString();
        db.run(`
            INSERT INTO products (product_id, creator_id, title, price, description, image_url, filename, specs, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [productId, creatorId, title, price, description, imageUrl, filename, specs, createdAt]);

        const saved = saveDatabase();
        if (saved === false) {
            // Rollback the inserted product if database persistence failed
            try {
                db.run(`DELETE FROM products WHERE product_id = ?`, [productId]);
            } catch (rollbackError) {
                console.error('Error rolling back product insert:', rollbackError);
            }
            return { success: false, message: 'Penyimpanan database gagal (kemungkinan ukuran file gambar terlalu besar). Gunakan gambar dengan ukuran lebih kecil lalu coba lagi.' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error adding product:', error);
        return { success: false, message: 'Terjadi kesalahan saat menambahkan produk.' };
    }
}

async function getProductsByCreatorId(creatorId) {
    await initDatabase();
    if (!db) {
        return getProductsByCreatorIdLocalStorage(creatorId);
    }

    try {
        // Use prepared statement to prevent SQL injection
        const stmt = db.prepare('SELECT * FROM products WHERE creator_id = ? ORDER BY created_at DESC');
        stmt.bind([creatorId]);
        const products = [];
        
        while (stmt.step()) {
            const row = stmt.get();
            products.push({
                id: row[1],
                product_id: row[1],
                creator_id: row[2],
                title: row[3],
                price: row[4],
                description: row[5] || '',
                image_url: row[6] || '',
                filename: row[7] || '',
                specs: row[8] || '',
                created_at: row[9]
            });
        }
        
        stmt.free();
        return products;
    } catch (error) {
        console.error('Error getting products:', error);
        return [];
    }
}

async function getAllProducts() {
    await initDatabase();
    if (!db) {
        return getAllProductsLocalStorage();
    }

    try {
        const result = db.exec('SELECT * FROM products ORDER BY created_at DESC');
        if (result.length === 0 || result[0].values.length === 0) {
            return [];
        }

        return result[0].values.map(row => ({
            id: row[1],
            product_id: row[1],
            creator_id: row[2],
            title: row[3],
            price: row[4],
            description: row[5] || '',
            image_url: row[6] || '',
            filename: row[7] || '',
            specs: row[8] || '',
            created_at: row[9]
        }));
    } catch (error) {
        console.error('Error getting all products:', error);
        return [];
    }
}

async function getProductById(productId) {
    await initDatabase();
    if (!db) {
        return getProductByIdLocalStorage(productId);
    }

    try {
        // Use prepared statement to prevent SQL injection
        const stmt = db.prepare('SELECT * FROM products WHERE product_id = ?');
        stmt.bind([productId]);
        const row = stmt.step() ? stmt.get() : null;
        stmt.free();
        
        if (!row) {
            return null;
        }

        return {
            id: row[1],
            product_id: row[1],
            creator_id: row[2],
            title: row[3],
            price: row[4],
            description: row[5] || '',
            image_url: row[6] || '',
            filename: row[7] || '',
            specs: row[8] || '',
            created_at: row[9]
        };
    } catch (error) {
        console.error('Error getting product:', error);
        return null;
    }
}

// Login logging
async function logLogin(email, username, creatorId, status) {
    await initDatabase();
    if (!db) return;

    try {
        const timestamp = new Date().toISOString();
        const loginDate = new Date().toLocaleDateString('id-ID');
        db.run(`
            INSERT INTO logins (email, creator_id, username, status, login_date, timestamp)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [email, creatorId || '', username || '', status, loginDate, timestamp]);
        saveDatabase();
    } catch (error) {
        console.error('Error logging login:', error);
    }
}

// Checkout operations
async function addCheckout(userId, username, productId, productName, price, creatorId, creatorName) {
    await initDatabase();
    if (!db) return { success: false };

    try {
        const timestamp = new Date().toISOString();
        db.run(`
            INSERT INTO checkouts (user_id, username, product_id, product_name, price, creator_id, creator_name, timestamp)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [userId, username, productId, productName, price, creatorId || '', creatorName || '', timestamp]);
        saveDatabase();
        return { success: true };
    } catch (error) {
        console.error('Error adding checkout:', error);
        return { success: false };
    }
}

async function getRecentLogins(limit = 10) {
    await initDatabase();
    if (!db) return [];

    const sanitizedLimit = Math.max(1, Math.min(100, Number(limit) || 10));
    let stmt = null;

    try {
        stmt = db.prepare(`
            SELECT email, creator_id, username, status, login_date, timestamp
            FROM logins
            ORDER BY datetime(timestamp) DESC
            LIMIT ?
        `);
        stmt.bind([sanitizedLimit]);

        const logins = [];
        while (stmt.step()) {
            const row = stmt.get();
            logins.push({
                email: row[0] || '',
                creator_id: row[1] || '',
                username: row[2] || '',
                status: row[3] || '',
                login_date: row[4] || '',
                timestamp: row[5] || ''
            });
        }

        stmt.free();
        return logins;
    } catch (error) {
        if (stmt) {
            try {
                stmt.free();
            } catch (_) {
                // ignore cleanup failure
            }
        }
        console.error('Error getting recent logins:', error);
        return [];
    }
}

async function getRecentCheckouts(limit = 10) {
    await initDatabase();
    if (!db) return [];

    const sanitizedLimit = Math.max(1, Math.min(100, Number(limit) || 10));
    let stmt = null;

    try {
        stmt = db.prepare(`
            SELECT user_id, username, product_id, product_name, price, creator_id, creator_name, timestamp
            FROM checkouts
            ORDER BY datetime(timestamp) DESC
            LIMIT ?
        `);
        stmt.bind([sanitizedLimit]);

        const checkouts = [];
        while (stmt.step()) {
            const row = stmt.get();
            checkouts.push({
                user_id: row[0] || '',
                username: row[1] || '',
                product_id: row[2] || '',
                product_name: row[3] || '',
                price: row[4] || '',
                creator_id: row[5] || '',
                creator_name: row[6] || '',
                timestamp: row[7] || ''
            });
        }

        stmt.free();
        return checkouts;
    } catch (error) {
        if (stmt) {
            try {
                stmt.free();
            } catch (_) {
                // ignore cleanup failure
            }
        }
        console.error('Error getting recent checkouts:', error);
        return [];
    }
}


// LocalStorage fallback functions (for compatibility)
function registerUserLocalStorage(name, email, password, creatorId, bio, description, image) {
    const users = getUserDatabase();
    
    if (users[email]) {
        return { success: false, message: 'Email sudah terdaftar. Silakan gunakan email lain atau login.' };
    }
    
    for (const userEmail in users) {
        if (users[userEmail].creator_id === creatorId) {
            return { success: false, message: 'ID Kreator sudah digunakan. Silakan gunakan ID lain.' };
        }
    }
    
    users[email] = {
        name: name,
        email: email,
        password: password,
        creator_id: creatorId.toLowerCase().trim(),
        bio: bio || '',
        description: description || '',
        image: image || '',
        registered_at: new Date().toISOString()
    };
    
    saveUserDatabase(users);
    return { success: true, user: users[email] };
}

function loginUserLocalStorage(email, password) {
    const users = getUserDatabase();
    const user = users[email];
    
    if (!user) {
        return { success: false, message: 'Email tidak terdaftar. Silakan daftar terlebih dahulu.' };
    }
    
    if (user.password !== password) {
        return { success: false, message: 'Password salah. Silakan coba lagi.' };
    }
    
    return { success: true, user: user };
}

function getUserDatabase() {
    const usersJson = localStorage.getItem('karyaku_users');
    return usersJson ? JSON.parse(usersJson) : {};
}

function saveUserDatabase(users) {
    try {
        localStorage.setItem('karyaku_users', JSON.stringify(users));
        return true;
    } catch (error) {
        console.error('Error saving user database:', error);
        return false;
    }
}

function getAllUsersLocalStorage() {
    const users = getUserDatabase();
    return Object.values(users);
}

function getUserByCreatorIdLocalStorage(creatorId) {
    const users = getUserDatabase();
    for (const email in users) {
        if (users[email].creator_id === creatorId) {
            return users[email];
        }
    }
    return null;
}

function updateUserProfileImageLocalStorage(creatorId, imageData) {
    if (!creatorId) {
        return { success: false, message: 'ID kreator tidak valid.' };
    }
    const users = getUserDatabase();
    let found = false;
    for (const email in users) {
        if (users[email].creator_id === creatorId) {
            users[email].image = imageData;
            found = true;
            break;
        }
    }
    if (!found) {
        return { success: false, message: 'Kreator tidak ditemukan.' };
    }
    const saved = saveUserDatabase(users);
    if (!saved) {
        return { success: false, message: 'Penyimpanan gagal. Gunakan gambar yang lebih kecil lalu coba lagi.' };
    }
    return { success: true };
}

function addProductLocalStorage(productId, creatorId, title, price, description, imageUrl, filename, specs) {
    const products = getProductsDatabase();
    products[productId] = {
        product_id: productId,
        creator_id: creatorId,
        title: title,
        price: price,
        description: description,
        image_url: imageUrl,
        filename: filename,
        specs: specs,
        created_at: new Date().toISOString()
    };
    const saved = saveProductsDatabase(products);
    if (!saved) {
        delete products[productId];
        return { success: false, message: 'Penyimpanan localStorage gagal. Gunakan gambar yang lebih kecil lalu coba lagi.' };
    }
    return { success: true };
}

function getProductsDatabase() {
    const productsJson = localStorage.getItem('karyaku_products');
    return productsJson ? JSON.parse(productsJson) : {};
}

function saveProductsDatabase(products) {
    try {
        localStorage.setItem('karyaku_products', JSON.stringify(products));
        return true;
    } catch (error) {
        console.error('Error saving products database:', error);
        return false;
    }
}

function getProductsByCreatorIdLocalStorage(creatorId) {
    const products = getProductsDatabase();
    return Object.values(products).filter(p => p.creator_id === creatorId);
}

function getAllProductsLocalStorage() {
    const products = getProductsDatabase();
    return Object.values(products);
}

function getProductByIdLocalStorage(productId) {
    const products = getProductsDatabase();
    return products[productId] || null;
}

