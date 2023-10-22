function showLoader() {
    const loader = document.querySelector('.mask');
    loader.classList.replace("hide", "mask")
}

// Функція для приховування лоадера
function hideLoader() {
    const loader = document.querySelector('.mask');
    loader.classList.replace("mask", "hide")
    
}
// Викликати функцію showLoader при завантаженні сторінки
window.addEventListener('load', () => {
    hideLoader(); // Приховуємо лоадер, оскільки сторінка вже завантажена
});

