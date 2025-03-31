// Mensajes personalizados (modifícalos!)
const mensajes = [
    "Recuerdo nuestro primer beso como si fuera ayer... 💋",
    "Eres la razón por la que creo en el destino.",
    "Prometo hacerte reír todos los días de tu vida.",
    "¿Sabías que tu sonrisa es mi pantalla de bloqueo? 📱",
    "La razón #1 para quedarme: tu abrazo.",
    "Botella encontrada: Contiene amor infinito para ti. ❤️"
];

// Crear botellas dinámicamente
const botellasContainer = document.querySelector('.botellas-container');
const modal = document.getElementById('modal');
const mensajeBotella = document.getElementById('mensaje-botella');

mensajes.forEach((mensaje, index) => {
    const botella = document.createElement('img');
    botella.src = 'bottle.png'; // Imagen de botella
    botella.className = 'botella';
    botella.dataset.mensaje = mensaje;
    botella.style.animationDelay = `${index * 0.5}s`; // Efecto escalonado
    
    botella.addEventListener('click', () => {
        mensajeBotella.innerHTML = `
            <div class="encabezado-mensaje">
                <i class="fas fa-heart" style="color: #ff6b9e;"></i>
                <h2>Mensaje #${index + 1}</h2>
            </div>
            <p>${mensaje}</p>
            <small class="firma">Con amor, <br> Tú</small>
        `;
        modal.style.display = 'block';
    });
    
    
    botellasContainer.appendChild(botella);
});


// Cerrar modal
document.querySelector('.cerrar').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Control de audio
const sonidoOlas = document.getElementById('sonido-olas');
const controlAudio = document.getElementById('control-audio');

// Intenta reproducir automáticamente (con manejo de errores)
document.addEventListener('DOMContentLoaded', () => {
  sonidoOlas.volume = 0.3; // Volumen bajo (30%)
  const playPromise = sonidoOlas.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      controlAudio.classList.add('muted');
      console.log("Reproducción automática bloqueada. El usuario debe interactuar primero.");
    });
  }
});

// Botón de mute/desmute
controlAudio.addEventListener('click', () => {
  if (sonidoOlas.paused) {
    sonidoOlas.play();
    controlAudio.classList.remove('muted');
    controlAudio.textContent = '🔊';
  } else {
    sonidoOlas.pause();
    controlAudio.classList.add('muted');
    controlAudio.textContent = '🔇';
  }
});
