import './style.css';
import Leaderboard from './modules/leaderboard.js';
import { getData, postData } from './modules/getPost.js';

const scores = document.querySelector('.scores');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const submittBtn = document.querySelector('#submittBtn');
const refresheBtn = document.querySelector('#refresheBtn');

submittBtn.addEventListener('click', (e) => {
  const list = new Leaderboard(name.value, score.value);
  e.preventDefault();
  postData(list);
  scores.innerHTML = '';
  name.value = '';
  score.value = '';
  setTimeout(getData, 400);
});

refresheBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  scores.innerHTML = '';
  getData();
});

window.addEventListener('DOMContentLoaded', getData);
