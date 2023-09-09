const createGame = async () => {
  const request = new Request(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
  );
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Football',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const updateScore = async (playerName, playerPoints) => {
  const request = new Request(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:Xz3q8KMpdRFVLo1eZCwb/scores/',
  );
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      user: playerName,
      score: playerPoints,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const loadScore = async () => {
  const request = new Request(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:Xz3q8KMpdRFVLo1eZCwb/scores/',
  );
  const response = await fetch(request);
  const data = await response.json();
  const scoreBoard = document.querySelector('.scores');
  scoreBoard.innerHTML = '';
  data.result.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user} : ${element.score}`;
    scoreBoard.appendChild(li);
  });
};

const resetForm = () => {
  const load = document.querySelectorAll('input');
  load.forEach((element) => {
    element.value = '';
  });
};

export {
  createGame, updateScore, loadScore, resetForm,
};
