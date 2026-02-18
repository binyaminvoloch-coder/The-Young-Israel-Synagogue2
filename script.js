document.addEventListener('DOMContentLoaded', () => {
    // אתחול אייקונים
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
}