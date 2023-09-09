import './style.css';
import {
  updateScore,
  loadScore,
  resetForm,
  createGame,
} from './modules/api.js';

const handleRefreshButtonClick = (event) => {
  event.preventDefault();
  loadScore();
};

const handleSubmitButtonClick = (event) => {
  event.preventDefault();
  const playerName = document.querySelector('#name').value;
  const playerScore = document.querySelector('#score').value;

  updateScore(playerName, playerScore);
  resetForm();
};

document
  .querySelector('#refresh-btn')
  .addEventListener('click', handleRefreshButtonClick);
document
  .querySelector('#submit-btn')
  .addEventListener('click', handleSubmitButtonClick);

createGame();
loadScore();
