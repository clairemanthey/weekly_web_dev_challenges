let btn = document.getElementById("adviceBtn");
let questionInput = document.getElementById("question");
let answer = document.getElementById("advice");

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
];



// generate random light colors: 
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})
btn.addEventListener("click", () => {
    if(!questionInput.value){
        answer.textContent = "Please ask a Question";
    }else{
        let randomNum = Math.round(Math.random() * 5);
        answer.textContent = advice[randomNum];
    }
});