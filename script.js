// אתחול האייקונים כשהדף נטען
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// פונקציה לפתיחה וסגירה של התפריט הראשי במובייל
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    const body = document.body;

    // בדיקה אם התפריט כרגע סגור (נמצא מחוץ למסך)
    const isClosed = menu.classList.contains('translate-x-full');

    if (isClosed) {
        // פתיחה: החלקה פנימה
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        
        // הצגת הרקע הכהה
        overlay.classList.remove('hidden');
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
        }, 10); // דיליי קטן לאנימציה

        // מניעת גלילה של הדף כשהתפריט פתוח
        body.style.overflow = 'hidden';
    } else {
        // סגירה: החלקה החוצה
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
        
        // הסתרת הרקע הכהה
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300); // מחכים שהאנימציה תסתיים

        // החזרת הגלילה לדף
        body.style.overflow = '';
    }
}

// פונקציה לפתיחה וסגירה של תתי-תפריטים (אקורדיון) במובייל
function toggleSubmenu(submenuId, btnElement) {
    const submenu = document.getElementById(submenuId);
    const icon = btnElement.querySelector('i'); // האייקון של החץ
    
    // אם התת-תפריט מוסתר
    if (submenu.classList.contains('hidden')) {
        // פתח אותו
        submenu.classList.remove('hidden');
        submenu.classList.add('flex');
        
        // סובב את החץ וצבע בזהב
        if(icon) icon.style.transform = 'rotate(180deg)';
        btnElement.classList.add('text-[#D4AF37]');
    } else {
        // סגור אותו
        submenu.classList.add('hidden');
        submenu.classList.remove('flex');
        
        // החזר חץ למצב רגיל
        if(icon) icon.style.transform = 'rotate(0deg)';
        btnElement.classList.remove('text-[#D4AF37]');
    }
}
