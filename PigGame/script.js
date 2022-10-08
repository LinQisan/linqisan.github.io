'use strict';

let score, currentScore, activePlayer, playing;

//初始化

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; //防止赢了还可以玩，赢了就锁死

  document.querySelector('.dice').classList.add('hidden');
  //玩家的状态也需要重置
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  const allScore = document.querySelectorAll('.score');
  const allCurrent = document.querySelectorAll('.current-score');
  const allPlayer = document.querySelectorAll('.player');
  for (let i = 0; i < allScore.length; i++) {
    allScore[i].textContent = 0;
    allCurrent[i].textContent = 0;
    allPlayer[i].classList.remove('player--winner');
  }
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //用三元运算符切换活跃的玩家
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};

// 摇骰子
document.querySelector('.btn--roll').addEventListener('click', function () {
  // 1.随机摇骰子
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.显示骰子🎲
    document.querySelector('.dice').classList.remove('hidden');
    document.querySelector('.dice').src = `dice-${dice}.png`;
    // 3.如果骰子为 1，就换到下一个玩家
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//换人
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[`${activePlayer}`] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); //玩家状态也需要重置
      document.querySelector('.dice').classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

//新游戏
document.querySelector('.btn--new').addEventListener('click', init);
