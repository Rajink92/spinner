let time = 100
let spinner = ['\r|   ', '\r/   ','\r-   ', '\r\\   ','\r|   ', '\r/   ','\r-   ', '\r\\   '];
let exit = time * spinner.length;

for (const position of spinner) {
  setTimeout(() => {
  process.stdout.write(position);
}, time);
time += 200;
};

