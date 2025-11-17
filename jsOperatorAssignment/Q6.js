// Q6: Event-Based Counter Simulation
let count = 0;
function increment() {
  count++;
  console.log(`Count incremented to: ${count}`);
  function showUpdate() { console.log(`(Nested) Current count value: ${count}`); }
  showUpdate();
}
function decrement() { count--; console.log(`Count decremented to: ${count}`); }
increment(); increment(); decrement();
