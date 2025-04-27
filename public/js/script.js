// Definir a data de início
const date_inicio = new Date(2024, 11, 13, 0, 0, 0); // 13/12/2024

function createHeartsScreen() {
    const heart = document.createElement('img');
    heart.src = 'public/img/heart.png';
    heart.style.position = 'fixed';
    heart.style.top = '-50px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    const size = Math.random() * 20 + 20; // entre 20px e 40px
    heart.style.width = size + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5; // entre 0.5 e 1
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    heart.style.transition = `top ${Math.random() * 2 + 4}s linear`; // entre 4s e 6s
    heart.style.zIndex = 0;
    heart.style.pointerEvents = 'none';
    heart.style.opacity = '0.3';

    document.body.appendChild(heart);

    void heart.offsetWidth;

    heart.style.top = window.innerHeight + 'px';

    setTimeout(() => {
        heart.remove();
    }, 4500); // tempo máximo
}

// Função para atualizar o contador
function atualizarContador() {
  const agora = new Date();
  let diff = agora - date_inicio;

  if (diff < 0) {
    // Se a data de início ainda não chegou
    diff = 0;
  }

  // Calcular tempos
  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  let anos = Math.floor(dias / 365);
  let meses = Math.floor((dias % 365) / 30); // aproximado
  let diasRestantes = (dias % 365) % 30;

  // Horas, minutos e segundos restantes
  let horasRestantes = horas % 24;
  let minutosRestantes = minutos % 60;
  let segundosRestantes = segundos % 60;

  // Atualizar os elementos na página
  document.querySelector("#date_ano h6").innerText = anos;
  document.querySelector("#date_meses h6").innerText = meses;
  document.querySelector("#date_dias h6").innerText = diasRestantes;
  document.querySelector("#date_horas h6").innerText = horasRestantes;
  document.querySelector("#date_minutos h6").innerText = minutosRestantes;
  document.querySelector("#date_segundos h6").innerText = segundosRestantes;
}

// Atualizar contador a cada segundo
setInterval(atualizarContador, 1000);
setInterval(createHeartsScreen, 500); // a cada 800ms cria um coração

// Atualizar imediatamente ao carregar
atualizarContador();
playPauseButton.click();
