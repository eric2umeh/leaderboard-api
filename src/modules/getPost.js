export const getData = async () => {
  const request = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4zWvXxi2aIE5qdFlBjxx4/scores',
  );
  const data = await request.json();
  data.result.sort((a, b) => b.score - a.score);

  const getContents = async (data) => {
    data.result.forEach((item) => {
      const scores = document.querySelector('.scores');
      scores.innerHTML += `
              <p>👨‍💻 ${item.user} : ${item.score}</p>
          `;
    });
  };

  getContents(data);
};

export const postData = async (x) => {
  const content = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4zWvXxi2aIE5qdFlBjxx4/scores',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: x.name,
        score: x.score,
      }),
    },
  );
  const afterContents = await content.json();
  return afterContents;
};
