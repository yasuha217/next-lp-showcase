/**
 * NEXT ACCESS LP - Design Swap Version
 * - FAQ accordion (sec_19 only)
 * - SP fixed bar show/hide
 */

document.addEventListener('DOMContentLoaded', function () {
    // ========================================
    // FAQ Accordion (sec_19)
    // ========================================
    const faqItems = document.querySelectorAll('.c-faq__item');
    faqItems.forEach(function (item) {
        const question = item.querySelector('.c-faq__q');
        if (question) {
            question.addEventListener('click', function () {
                // Toggle current item
                item.classList.toggle('is-open');
            });
        }
    });

    // ========================================
    // SP Fixed Bar show/hide
    // FV通過後に表示、FV内では非表示
    // ========================================
    const fixedBar = document.getElementById('fixed-bar');
    const fv = document.getElementById('fv');

    if (fixedBar && fv) {
        const fvHeight = fv.offsetHeight;

        // IntersectionObserver for better performance
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // FV is visible - hide fixed bar
                    fixedBar.classList.add('is-hide');
                } else {
                    // FV is not visible - show fixed bar
                    fixedBar.classList.remove('is-hide');
                }
            });
        }, {
            threshold: 0.2 // Trigger when 20% of FV is visible
        });

        observer.observe(fv);

        // Initial state: hide when page loads at top
        if (window.scrollY < fvHeight * 0.8) {
            fixedBar.classList.add('is-hide');
        }
    }

    // ========================================
    // Hamburger Menu (SP)
    // ========================================
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-open');
        });

        // Close menu when nav item is clicked
        nav.querySelectorAll('.l-header__nav-item').forEach(function (item) {
            item.addEventListener('click', function () {
                hamburger.classList.remove('is-active');
                nav.classList.remove('is-open');
            });
        });
    }

    // ========================================
    // Smooth scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
