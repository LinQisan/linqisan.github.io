setInterval(function () {
  const now = new Date()
  const strTime = function (num) { return String(num).padStart(2, 0) }
  const h = strTime(now.getHours())
  const m = strTime(now.getMinutes())
  const s = strTime(now.getSeconds())
  document.getElementById('time').innerHTML = `${h}:${m}:${s}`
}, 250)

const movie = Vue.createApp({
  data() {
    return {
      film: '千年女优',
      director: '今敏',
      releaseYear: 2002,
      imgUrl: 'https://www.themoviedb.org/t/p/original/iVNCVWAqBSDU0MJCq1ehAIGifev.jpg',
      watchTimes: 0,
      name: '',
    };
  },
  methods: {
    setName(event, text) { this.name = text + event.target.value },
    countdown() { return new Date().getFullYear() - this.releaseYear },
    addTime(n = 1) { this.watchTimes += n },
    reduceTime(n = 1) { this.watchTimes !== 0 ? (this.watchTimes -= n) : 0; },
  },
});
movie.mount('#movie');