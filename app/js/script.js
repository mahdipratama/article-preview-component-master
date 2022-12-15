const shareIcon = document.querySelector('.share-icon');
const shareIcons = document.querySelector('.share-icons');
const closeShareIcon = document.querySelector('.close-share-icon');


shareIcon.addEventListener('click', () => {
  shareIcons.classList.add('active');
});

closeShareIcon.addEventListener('click', () => {
  shareIcons.classList.remove('active');
});