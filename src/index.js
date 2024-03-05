import './styles.css';
import magicBallImage from './magic.png';
const magicBall = document.querySelector('.magic-ball');
const imgElement = document.createElement('img');
imgElement.src = magicBallImage;
imgElement.alt = 'Magic Ball';
magicBall.prepend(imgElement);
document.getElementById('askButton').addEventListener('click', function () {
    const answers = [
        "Yes",
        "No",
        "Maybe",
        "Ask again later",
        "Outlook not so good"
    ];
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answerText = document.getElementById('answerText');
    answerText.innerText = answers[randomIndex];
    answerText.style.display = 'block';



    magicBall.classList.add('shake');
    setTimeout(() => {
        magicBall.classList.remove('shake');
    }, 1000);
});
