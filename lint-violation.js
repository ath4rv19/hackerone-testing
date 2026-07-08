// lint-violation.js

const unusedVar = "This variable is never used";

function greet(name) {
  console.log("Hello, world!"); // Triggers no-console
}

greet("Alice");
