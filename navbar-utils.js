// Navbar utility to update authentication state across all pages

function updateNavbar() {
    const isLoggedIn = localStorage.getItem('karyaku_is_logged_in') === 'true';
    const navbar = document.getElementById('navbarNav');
    
    if (!navbar) return;
    
    // Find all nav items
    const navItems = navbar.querySelectorAll('.nav-item');
    
    // Remove existing auth buttons
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && (link.href.includes('auth.html') || link.textContent.includes('Masuk') || link.textContent.includes('Daftar') || link.textContent.includes('Keluar'))) {
            item.remove();
        }
    });
    
    // Hide/show Kreator link based on authentication
    const kreatorLinks = navbar.querySelectorAll('a[href*="creator-profile.html"]');
    kreatorLinks.forEach(link => {
        const navItem = link.closest('.nav-item');
        if (navItem) {
            if (!isLoggedIn) {
                navItem.style.display = 'none';
            } else {
                navItem.style.display = '';
            }
        }
    });
    
    // Add appropriate auth buttons
    const navList = navbar.querySelector('ul');
    if (navList) {
        if (isLoggedIn) {
            // Add Sign Out button
            const signOutItem = document.createElement('li');
            signOutItem.className = 'nav-item';
            signOutItem.innerHTML = '<button class="btn btn-outline-light" id="signOutBtn">Keluar</button>';
            navList.appendChild(signOutItem);
            
            // Add sign out handler
            document.getElementById('signOutBtn').addEventListener('click', function() {
                localStorage.removeItem('karyaku_is_logged_in');
                localStorage.removeItem('karyaku_username');
                localStorage.removeItem('karyaku_creator_id');
                localStorage.removeItem('karyaku_user_email');
                window.location.href = 'home.html';
            });
        } else {
            // Add Sign In/Sign Up buttons
            const signInItem = document.createElement('li');
            signInItem.className = 'nav-item';
            signInItem.innerHTML = '<a class="btn btn-outline-light me-2" href="auth.html">Masuk</a>';
            navList.appendChild(signInItem);
            
            const signUpItem = document.createElement('li');
            signUpItem.className = 'nav-item';
            signUpItem.innerHTML = '<a class="btn btn-warning" href="auth.html?mode=daftar">Daftar</a>';
            navList.appendChild(signUpItem);
        }
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavbar);
} else {
    updateNavbar();
}

