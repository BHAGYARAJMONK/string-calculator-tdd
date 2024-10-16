# String Calculator TDD

This project implements a String Calculator based on a TDD (Test-Driven Development) approach using Node.js, Mocha, and Chai.

## Features

1. **Add Method**:
   - Takes a string of comma-separated numbers and returns their sum.
   - Supports handling an unknown number of numbers.
   - Supports new lines as a valid delimiter.
   - Custom delimiters can be defined in the input string.
   - Throws an exception if negative numbers are provided.
   
2. **Test-Driven Development**:
   - The implementation follows the TDD workflow: writing tests first, ensuring they fail, implementing functionality to make tests pass, and refactoring.

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BHAGYARAJMONK/string-calculator-tdd.git
   Navigate into the project directory:


2. **Install dependencies**:
```bash
  npm install

3. Run the tests:
    ```bash
    npm test

## File Structure
    StringCalculator.js: Contains the String Calculator class implementation.
    test.js: Contains the unit tests for the String Calculator.
    package.json: Project configuration and dependencies.
