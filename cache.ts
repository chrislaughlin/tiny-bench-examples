import { Bench } from "tinybench";
const bench = new Bench({ time: 100 });

function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error(
      `factorial() requires a non-negative integer, but got ${n}.`
    );
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const factorialCache:any = {};

function memoizedFactorial(n: number): number {
  if (n in factorialCache) {
    return factorialCache[n];
  }

  const result = factorial(n);
  factorialCache[n] = result;
  return result;
}

bench
  .add("Memoised", () => {
    memoizedFactorial(1000);
    memoizedFactorial(1000);
  })
  .add("Non Memoised", async () => {
    memoizedFactorial(1000);
    memoizedFactorial(1000);
  });

await bench.warmup();
await bench.run();

console.table(bench.table());

