import { Bench } from "tinybench";
const bench = new Bench({ time: 100 });

const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };

  bench
  .add("Dot Notation", () => {
    person.name;
  })
  .add("Dot function", () => {
    person.greet();
  })
  .add("Bracket Notation", async () => {
    person['name'];
  });

await bench.warmup();
await bench.run();

console.table(bench.table());