let timerModal;


const btnNao = document.getElementById('btnNao');
let posOriginalLeft = btnNao.offsetLeft + 'px';
let posOriginalTop = btnNao.offsetTop + 'px';
let posOriginalPosition = window.getComputedStyle(btnNao).position || 'absolute';

let naoClicks = 0; 

function abrirEnvelope() {
  document.querySelector('.flap').style.transform = 'translateY(19px) rotateX(180deg)';
  document.querySelector('.carta').style.transform = 'translateY(0)';
  document.querySelector('.mensagem').style.display = 'none';
  const mensagem = document.getElementById('mensagemTexto');
  mensagem.style.display = 'none';

  const musicaPrincipal = document.getElementById('musicaPrincipal');
  if (musicaPrincipal.paused) {
    musicaPrincipal.play().catch(err => console.log('Erro ao tocar música principal:', err));
  }

  const musicaAbrir = document.getElementById('musicaAbrir');
  musicaAbrir.currentTime = 0;
  musicaAbrir.play().catch(err => console.log('Erro ao tocar música de abertura:', err));

  document.getElementById('btnReiniciarFixo').style.display = 'block';

  timerModal = setTimeout(() => {
    abrirModal();
  }, 2000);
}


function reiniciar() {
  clearTimeout(timerModal);

  document.querySelector('.flap').style.transform = 'translateY(19px) rotateX(0deg)';
  document.querySelector('.carta').style.transform = 'translateY(120%)';


  const musicaAbrir = document.getElementById('musicaAbrir');
  musicaAbrir.pause();
  musicaAbrir.currentTime = 0;

  const musicaPrincipal = document.getElementById('musicaPrincipal');
  musicaPrincipal.pause();
  musicaPrincipal.currentTime = 0;

  
  btnNao.style.position = posOriginalPosition;
  btnNao.style.left = posOriginalLeft;
  btnNao.style.top = posOriginalTop;
  btnNao.style.display = 'inline-block';


  mensagemEspecial.style.display = 'none';
}

btnNao.addEventListener('click', (e) => {
  e.preventDefault();

  naoClicks++;

  const btnWidth = btnNao.offsetWidth;
  const btnHeight = btnNao.offsetHeight;
  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnNao.style.position = 'fixed';
  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
});
