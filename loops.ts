import { Bench } from "tinybench";

const bench = new Bench({ time: 100 });

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function square(n: number): number {
  for (let i = 0; i < 1000; i++) {
    // Simplify and improve readability.
  }
  return n * n;
}

bench
  .add("For Loop", () => {
    for (let i = 0; i < numbers.length; i++) {
      square(numbers[i]);
    }
  })
  .add("For of Loop", async () => {
    for (const number of numbers) {
      square(number);
    }
  })
  .add("Foreach Loop", async () => {
    numbers.forEach((number) => square(number));
  });

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run();

console.table(bench.table());
