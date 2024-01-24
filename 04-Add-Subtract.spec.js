import { createCalculator } from './04-Add-Subtract.js'
import { expect } from 'chai'

describe ('createCalculator', () => {

    it ('should return 0 if no operation are executed on the calculator', () => {
        // Arrange
        const calculator = createCalculator()

        // Act
        const result = calculator.get()

        // Assert
        expect(result).to.equals(0);
    })

    it ('should return a negative number if only subtract operation are executed on the calculator', () => {
        // Arrange
        const calculator = createCalculator()

        // Act
        calculator.add(3)
        calculator.add(3)
        calculator.add(10)
        const result = calculator.get()

        // Assert
        expect(result).to.equals(16)
    })

    it ('shoult return a positive number if only add operations are executed on the calculator', () => {
        // Arrange
        const calculator = createCalculator()

        // Act
        calculator.subtract(2)
        calculator.subtract(2)
        calculator.subtract(100)
        const result = calculator.get()

        // Assert
        expect(result).to.equals(-104)
    })

    it ('should handle number as string', () => {
         // Arrange
         const calculator = createCalculator()

         // Act
         calculator.add('2')
         calculator.add('2')
         calculator.add('100')
         const result = calculator.get()
 
         // Assert
         expect(result).to.equals(104)
    })

    it ('should handle a mix of operations', () => {
        // Arrange 
        const calculator = createCalculator()

        // Act
        calculator.add(2)
        calculator.add(2)
        calculator.add(100)
        calculator.add(-4)
        calculator.subtract(-100)
        calculator.subtract(200)
        const result = calculator.get()

        // Assert
        expect(result).to.equals(0)
    })
})