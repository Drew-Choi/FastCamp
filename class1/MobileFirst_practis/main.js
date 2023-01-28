const moreBtn = document.querySelector('section.info .metadata .titleAndButton .moreBtn');
const title = document.querySelector('section.info .metadata .titleAndButton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});