const modelViewer = document.querySelector('model-viewer');

const maxRotation = 360;
const inital_position = -50;

window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const rotation_scroll = scrollPercent * maxRotation;
    
    modelViewer.orientation = `0deg 0deg ${rotation_scroll}deg`;
});

modelViewer.orientation = `0deg 0deg ${inital_position}deg`;
