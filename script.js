// setInterval(function () {
//   const now = new Date()
//   const strTime = function (num) { return String(num).padStart(2, 0) }
//   const h = strTime(now.getHours())
//   const m = strTime(now.getMinutes())
//   const s = strTime(now.getSeconds())
//   document.getElementById('time').innerHTML = `${h}:${m}:${s}`
// }, 250)

// const movie = Vue.createApp({
//   data() {
//     return {
//       film: '千年女优',
//       director: '今敏',
//       releaseYear: 2002,
//       imgUrl: 'https://www.themoviedb.org/t/p/original/iVNCVWAqBSDU0MJCq1ehAIGifev.jpg',
//       watchTimes: 0,
//       name: '',
//     };
//   },
//   methods: {
//     setName(event, text) { this.name = text + event.target.value },
//     countdown() { return new Date().getFullYear() - this.releaseYear },
//     addTime(n = 1) { this.watchTimes += n },
//     reduceTime(n = 1) { this.watchTimes !== 0 ? (this.watchTimes -= n) : 0; },
//   },
// });
// movie.mount('#movie');



const gua = function (i = 6) {
  // const yao1 = Math.trunc(Math.random() * 2)
  // const yao2 = Math.trunc(Math.random() * 2)
  // const yao3 = Math.trunc(Math.random() * 2)
  // return [yao1, yao2, yao3]
  const yao = [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())]
  const sum = yao.reduce((acc, yao) => acc + yao, 0)
  // console.log(yao);
  if (sum === 0) return '阴爻变'
  if (sum === 1) return '阴爻'
  if (sum === 2) return '阳爻'
  if (sum === 3) return '阳爻变'
}
console.log(gua());
console.log(gua());
console.log(gua());
console.log(gua());
console.log(gua());
console.log(gua());