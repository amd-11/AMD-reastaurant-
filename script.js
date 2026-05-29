// 1. Обработка формы бронирования (для contact.html)
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        // Показываем сообщение пользователю
        alert('Спасибо! Ваша бронь получена. Мы ждем вас в AMD.');
        
        // Очищаем форму
        form.reset(); 
    });
}

// 2. Дополнительная фишка: Плавное появление элементов при скролле
// Добавь класс "hidden" в CSS для элементов, которые должны появляться
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем анимацию к карточкам меню и glass-box
document.querySelectorAll('.card, .glass-card, .glass-box').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});