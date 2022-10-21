/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
编写一个以整数为输入的函数 并返回该数字的二进制表示形式中等于1的位数。输入是非负的
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// const countBits = function (n) {
//   // match 方法如果找不到会返回 null
//   const binary = n.toString(2).match(/1/g)
//   return binary ? binary.length : 0
// }
// eslint-disable-next-line no-undef
const time = Vue.createApp({
  methods: {
    currentTime() {
      return `${new Date().getHours()}时${String(new Date().getMinutes()).padStart(2, 0)}分${String(new Date().getSeconds()).padStart(2, 0)}秒`;
    },
  },
})
time.mount('.main-header')


const movie = Vue.createApp({
  data() {
    return {
      film: '千年女优',
      director: '今敏',
      releaseYear: 2002,
      imgUrl: 'https://arielhsu.tw/wp-content/uploads/20210202194826_70.jpg',
      watchTimes: 0,
      name: '',
    };
  },
  methods: {
    setName(event, text) {
      this.name = text + event.target.value;
    },
    countdown() {
      return new Date().getFullYear() - this.releaseYear;
    },
    addTime(n = 1) {
      this.watchTimes += n;
    },
    reduceTime(n = 1) {
      this.watchTimes !== 0 ? (this.watchTimes -= n) : 0;
    },
  },
});
movie.mount('#movie');