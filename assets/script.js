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