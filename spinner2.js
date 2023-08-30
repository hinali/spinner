process.stdout.write('hello from spinner1.js... \rheyyy\n');
let time = 0;
let arr = ["| ", "/ ", "- ", "\ ", "| ", "/ ", "- ", "\\ "];
for (let char of arr) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, time);
  time += 200;
}