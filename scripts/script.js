



const efect = function (event, button) {
    //získání souřadnic polohy kliku
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft= event.target.offsetLeft;

    //pozice uvnitř tlačítka - přímo kam kliknu
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circleElement = document.createElement('span');
    circleElement.classList.add('circle');

    circleElement.style.top = yInside + 'px';
    circleElement.style.left = xInside + 'px';

    button.appendChild(circleElement);

    setTimeout(() => circleElement.remove(), 1000);      
};

const cvButton = document.querySelector('#btn-cv');
const projectsButton = document.querySelector('#btn-projects');

cvButton.addEventListener('click', function (event) {
    efect(event, this);
    setTimeout(() => {
        window.location.href = '/cv/';
    }, 150);
});

projectsButton.addEventListener('click', function (event) {
    efect (event, this);
    setTimeout(() => window.location.href = '/projekty/', 100);
});
