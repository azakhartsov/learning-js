let s = "abcac";
let n = 10;
let sum = 0n;

function repeatedString(s, n) {
   let i = 0;
   s = s.repeat(n); //тупо клонирую заданную строку n раз
   do {
      sum = s.slice(0,n).split('a').length - 1; // отрезаю n символов из получившейся строки и считаю количество А
      console.log(sum);
   }
   while (i = 0, i < n, i++);
}
repeatedString(s,n);