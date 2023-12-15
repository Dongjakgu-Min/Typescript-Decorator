import {ClassDecorator, ClassDecoratorWithParameter, MethodDecorator} from './decorator';

export class Calculator {
    @MethodDecorator()
    sum(a: number, b: number) {
        return a + b;
    }

    multiply(a: number, b: number) {
        return a * b;
    }
}

@ClassDecorator
export class ConsoleWithDecorator {}

@ClassDecoratorWithParameter('Il-Sung', 'Kim')
export class ConsoleWithDecoratorAndFactory {}