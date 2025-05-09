// Définir un faux DOM pour les tests
document.body.innerHTML = `
  <p>Score : <span id="score">0</span></p>
  <button id="clickButton">Clique ici !</button>
  <p id="timer">Temps restant : 5s</p>
`;

// Importer les fonctions après avoir défini le DOM
const { updateScore, resetScore } = require('./script.js');

test('Le score est incrémenté après un clic', () => {
  // Utiliser le paramètre forceUpdate pour ignorer la vérification isGameActive
  updateScore(true); // Simuler un clic
  updateScore(true); // Simuler un autre clic

  const score = document.getElementById('score').textContent;
  expect(score).toBe('2'); // Vérifier que le score est 2
});

test('Le score est réinitialisé après un reset', () => {
  updateScore(true); // Simuler un clic avec forceUpdate
  resetScore(); // Réinitialiser le score

  const score = document.getElementById('score').textContent;
  expect(score).toBe('0'); // Vérifier que le score est 0
});