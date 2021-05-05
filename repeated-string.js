let s = "a";
let n = 1000000000000;
let sum = 0n;

function repeatedString(s, n) {
   let i = 0;
   s = s.repeat(n);
   console.log(s);
   do {
      sum = s.slice(0,n).split('a').length - 1;
      console.log(`Sliced arr ${sum}`);
   }
   while (i = 0, i < n, i++);
}
repeatedString(s,n);