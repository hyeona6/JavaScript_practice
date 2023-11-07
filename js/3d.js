const word = document.querySelector('.word');
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('mouseleave', () => {
    card.style.width = '200px'; 
    word.style.display = 'none';
});
