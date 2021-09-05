const infoContainer = document.querySelector("#info");
const shareContainer = document.querySelector("#share");

const infoBtn = document.querySelector("#info-btn");
const shareBtn = document.querySelector("#share-btn");

window.onfocus = () => {
    if (window.innerWidth < 1000) {
        infoBtn.addEventListener('click', () => {
            infoContainer.classList.toggle("none");
            shareContainer.classList.toggle("none");
        });

        shareBtn.addEventListener('click', () => {
            infoContainer.classList.toggle("none");
            shareContainer.classList.toggle("none");
        });
    } else {
        infoBtn.addEventListener('click', () => {
            shareContainer.classList.toggle("none");
        });
    }
}
