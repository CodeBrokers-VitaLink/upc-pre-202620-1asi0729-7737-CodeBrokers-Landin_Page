
        document.querySelectorAll('.nav-item, #header-cta-btn').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarContainer.classList.contains('nav-open')) {
                    navbarContainer.classList.remove('nav-open');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
                    if (icon) icon.textContent = 'menu';
                }
            });
        });


        document.addEventListener('click', (e) => {
            if (navbarContainer.classList.contains('nav-open') && !navbarContainer.contains(e.target)) {
                navbarContainer.classList.remove('nav-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'menu';
            }
        });
    }
});
