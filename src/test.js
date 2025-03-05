// This file contains additional linting issues to demonstrate GitHub annotations

// Undeclared variable (will trigger an error)
undeclaredVariable = 'This variable is not declared with const, let, or var';

// Line 5 - will be referenced in manual annotation
console.log('This line will have a manual error annotation');

// Duplicate declaration (will trigger an error)
const duplicateVar = 'First declaration';
const duplicateVar = 'Second declaration';

// Comparison with no effect (will trigger a warning)
if ('string' === 'string') {
  console.log('This comparison is always true');
}

// Empty block statement (will trigger a warning)
if (true) {
  // This block is empty
}

// Unreachable code after return (will trigger an error)
function anotherUnreachableCode() {
  return true;
  console.log('This will never execute');
}

// Call function to avoid "unused function" warning
anotherUnreachableCode();
