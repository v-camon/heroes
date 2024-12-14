// Codigo para rotar con el scroll de la web

const modelViewer = document.querySelector('model-viewer');

const maxRotation = 300;
const inital_position = -40;

window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const rotation_scroll = scrollPercent * maxRotation;
    const rotation = inital_position + rotation_scroll;
    
    modelViewer.orientation = `0deg 0deg ${rotation}deg`;
});

modelViewer.orientation = `0deg 0deg ${inital_position}deg`;



// Eventos on click para mostrar y ocultar el trailer

document.querySelector('[alt="Trailer"]').addEventListener('click', function() {
    const iframe = document.querySelector('iframe');
    const close_button = document.querySelector('.close_button');

    iframe.classList.add('active');
    close_button.classList.add('active');
    
    let currentSrc = iframe.src;
    iframe.src = currentSrc + '?autoplay=1';
});


const closeButton = document.querySelector('.close_button');
closeButton.addEventListener('click', toggleIframe);

function toggleIframe() {
    const iframe = document.querySelector('iframe');
    const closeButton = document.querySelector('.close_button');
    
    iframe.classList.toggle('active');
    closeButton.classList.toggle('active');
    
    // Reset iframe src to stop video playback
    iframe.src = iframe.src.split('?')[0];
}
