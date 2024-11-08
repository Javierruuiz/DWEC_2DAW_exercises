window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  
  document.getElementById("alpha");
  document.getElementById("beta");
  document.getElementById("gamma");

  
}