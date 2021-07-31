let buttons = document.querySelectorAll('.btn');
let s = new Audio('');



let play = sound => {
  s = new Audio(sound);
  s.play();
};

const stopAudio = () => {
  s.pause();
  // for (let i = 0; i < buttons.length - 1; i++) {
  //   s.src = buttons[i].value;
  //   s.pause();
  // }
};

let playSound = (btn, e) => {
  let currentSound = e.currentTarget.value;
  if (currentSound == 'stop') stopAudio(); 
  else
  play(currentSound);
};

buttons.forEach(btn => {
  btn.addEventListener('click', e => { playSound(btn, e); });
});


