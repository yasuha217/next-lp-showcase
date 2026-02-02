/**
 * ACCESS LP JavaScript
 * - FAQ accordion toggle
 * - SP fixed bar show/hide based on scroll
 */

document.addEventListener('DOMContentLoaded', function () {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.c-faq-item');
    faqItems.forEach(function (item) {
        const question = item.querySelector('.c-faq-item__q');
        if (question) {
            question.addEventListener('click', function () {
                item.classList.toggle('is-open');
            });
        }
    });

    // SP Fixed Bar show/hide
    const fixedBar = document.getElementById('fixed-bar');
    const fv = document.getElementById('fv');

    if (fixedBar && fv) {
        let lastScrollY = window.scrollY;
        const fvHeight = fv.offsetHeight;

        window.addEventListener('scroll', function () {
            const currentScrollY = window.scrollY;

            // Hide when in FV area
            if (currentScrollY < fvHeight * 0.8) {
                fixedBar.classList.add('is-hide');
            } else {
                fixedBar.classList.remove('is-hide');
            }

            lastScrollY = currentScrollY;
        });

        // Initial check
        if (window.scrollY < fvHeight * 0.8) {
            fixedBar.classList.add('is-hide');
        }
    }

    // Open first FAQ item by default
    const firstFaqItem = document.querySelector('.c-faq-item');
    if (firstFaqItem) {
        firstFaqItem.classList.add('is-open');
    }
});
