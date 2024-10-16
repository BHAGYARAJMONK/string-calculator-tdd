import { expect } from 'chai';

let StringCalculator;  // Declare it outside so it's accessible globally

describe('StringCalculator', function() {
  let calculator;

  // Load StringCalculator asynchronously before running any tests
  before(async () => {
    const module = await import('./StringCalculator.js');  // Dynamically import the module
    StringCalculator = module.StringCalculator;  // Destructure if it was exported as named export
  });

  beforeEach(() => {
    calculator = new StringCalculator();  // Instantiate after the import is done
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).to.equal(0);
  });

  it('should return the number itself if a single number is provided', () => {
    expect(calculator.add('1')).to.equal(1);
    expect(calculator.add('5')).to.equal(5);
  });

  it('should return the sum of two numbers', () => {
    expect(calculator.add('1,2')).to.equal(3);
  });

  it('should handle an unknown amount of numbers', () => {
    expect(calculator.add('1,2,3,4,5')).to.equal(15);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).to.equal(6);
  });

  it('should support custom delimiters', () => {
    expect(calculator.add('//;\n1;2')).to.equal(3);
    expect(calculator.add('//|\n1|2|3')).to.equal(6);
  });

  it('should throw an error if negative numbers are provided', () => {
    expect(() => calculator.add('1,-2,3')).to.throw('Negative numbers not allowed: -2');
    expect(() => calculator.add('1,-2,-3')).to.throw('Negative numbers not allowed: -2, -3');
  });
});
