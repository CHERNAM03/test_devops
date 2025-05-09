let score = 0; // Variable pour le score
let count = 0; // Variable pour le nombre de clics
let isGameActive = false; // Variable pour vérifier si le chrono est actif

// Sélectionner le bouton, l'élément de score et le chrono
const button = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.createElement('p'); // Ajouter un élément pour afficher le chrono
document.body.appendChild(timerDisplay);

// Fonction pour démarrer le chrono
function startGame() {
  if (isGameActive) return; // Empêcher de redémarrer le jeu si déjà actif

  isGameActive = true;
  score = 0; // Réinitialiser le score
  scoreDisplay.textContent = score;

  let timeLeft = 5; // Temps imparti en secondes
  timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

  const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Temps restant : ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer); // Arrêter le chrono
      isGameActive = false; // Désactiver le jeu
      timerDisplay.textContent = "Temps écoulé !";
    }
  }, 1000);
}

// Ajouter un écouteur d'événement pour détecter les clics
button.addEventListener('click', () => {
  if (isGameActive) {
    count++; // Incrémenter le nombre de clics
    score++; // Incrémenter le score
    scoreDisplay.textContent = score; // Mettre à jour l'affichage du score
    console.log(`Nombre de clics : ${count}`); // Afficher le nombre de clics dans la console
  }
});

// Démarrer le jeu automatiquement au chargement de la page
startGame();