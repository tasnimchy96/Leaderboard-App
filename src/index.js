import './style.css';

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const submitButton = document.getElementById('submit-btn');
const ul = document.querySelector('.scores');

// Retrieve scores from local storage and display them
function displayScores() {
  ul.innerHTML = ''; // Clear the list before adding scores

  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerText = score;
    ul.appendChild(li);
  });
}

// Add a click event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const score = scoreInput.value;

  // Create a string representation of the score
  const scoreString = `${name}:${score}`;

  // Retrieve existing scores from local storage or create an empty array
  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  // Add the new score to the array
  scores.push(scoreString);

  // Store the updated scores array in local storage
  localStorage.setItem('scores', JSON.stringify(scores));

  // Display the scores
  displayScores();

  // Clear input fields
  nameInput.value = '';
  scoreInput.value = '';
});

// Initial display of scores when the page loads
displayScores();
