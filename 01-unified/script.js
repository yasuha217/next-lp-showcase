// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.c-faq-item__q');

    faqItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const parent = this.parentElement;
            parent.classList.toggle('is-open');
        });
    });
});
