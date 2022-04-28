const generatebtn = document.getElementById('generate-btn');
const number = document.getElementById('number')

const randomNumberGenerator = () =>{
    let randomNumber = Math.floor(Math.random()* 10 +1)

    number.innerText = randomNumber
}
generatebtn.addEventListener('click', randomNumberGenerator)