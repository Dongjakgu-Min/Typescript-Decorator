// Method Decorator with Factory
export function MethodDecorator() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('데코레이터 실행');
        descriptor.value.apply();
    }
}

// Class Decorator
export function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    // protoType으로 새로운 요소를 추가할 수 있음.
    constructor.prototype.songName = 'Do you hear the people sing?';
    constructor.prototype.printName = () => console.log('Les Miserables');

    return class extends constructor {
        printSing() {
            console.log(constructor.prototype.songName);
        }
    }
}

// Class Decorator With Parameter, Factory
export function ClassDecoratorWithParameter(familyName: string, givenName: string) {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            printName() {
                console.log(`My Name is ${givenName} ${familyName}`);
            }
        }
    }
}