// Variables globales
let score = 0;          // Score actuel
let isGameActive = false; // État du jeu

// Sélectionner les éléments du DOM
const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('resetButton'); // Sélectionner le bouton de réinitialisation

/**
 * Démarre le jeu avec un compte à rebours
 */
function startGame() {
  if (isGameActive) return; // Empêcher de redémarrer le jeu si déjà actif

  isGameActive = true;
  resetScore(); // Réinitialiser le score

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

/**
 * Incrémente le score et met à jour l'affichage
 * @param {boolean} forceUpdate - Si true, incrémente le score même si le jeu n'est pas actif (pour les tests)
 */
function updateScore(forceUpdate = false) {
  if (isGameActive || forceUpdate) {
    score++;
    scoreDisplay.textContent = score;
  }
}

/**
 * Réinitialise le score et met à jour l'affichage
 */
function resetScore() {
  score = 0;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = "Cliquez pour commencer"; // Réinitialiser le texte du timer
  isGameActive = false; // S'assurer que le jeu n'est plus actif
}

// Ajouter un écouteur d'événement pour détecter les clics
if (clickButton) {
  // Démarrer le jeu au premier clic
  clickButton.addEventListener('click', () => {
    if (!isGameActive) {
      startGame();
    }
    updateScore();
  });
}

// Ajouter un écouteur d'événement pour le bouton de réinitialisation
if (resetButton) {
  resetButton.addEventListener('click', resetScore);
}