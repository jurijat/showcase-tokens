// This file contains intentional linting issues to demonstrate GitHub annotations

// Unused variable (will trigger a warning)
const unusedVariable = 'This variable is never used';

// Missing semicolon (will trigger a warning or error depending on ESLint config)
const missingTerminator = 'This line is missing a semicolon'

// Incorrect indentation (will trigger a warning)
function badlyIndentedFunction() {
    const level1 = 'This is fine';
  const level2 = 'This is incorrectly indented';
      const level3 = 'This is also incorrectly indented';
  
  // Line 10 - will be referenced in manual annotation
  console.log('This line will have a manual warning annotation');
  
  return level1 + level2 + level3;
}

// Line 15 - will be referenced in manual annotation
console.log('This line will have a manual notice annotation');

// Unreachable code (will trigger an error)
function unreachableCode() {
  return 'Early return';
  
  // This code will never execute
  console.log('This will never run');
}

// Call functions to avoid "unused function" warnings
badlyIndentedFunction();
unreachableCode();
