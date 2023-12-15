import { ConsoleWithDecoratorAndFactory, Calculator, ConsoleWithDecorator } from './classes';

const calculator = new Calculator();
console.log(calculator.sum(3, 5));

const consoleDecorator = new ConsoleWithDecorator();
(consoleDecorator as any).printSing();
(consoleDecorator as any).printName();

const consoleWithDecoratorAndFactory = new ConsoleWithDecoratorAndFactory();
(consoleWithDecoratorAndFactory as any).printName();

