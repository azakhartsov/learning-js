let s = "javascriptloops";
let i = 0;
let j = 0;
while (i < s.length) {
  if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
    console.log(s[i]);
  }
  i++;
}

while (j < s.length) {
  if (
    !(s[j] == "a" || s[j] == "e" || s[j] == "i" || s[j] == "o" || s[j] == "u")
  ) {
    console.log(s[j]);
  }
  j++;
}
