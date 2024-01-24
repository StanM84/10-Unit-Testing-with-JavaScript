import { isSymmetric } from './02-Check-for-Symmetry.js'
import { expect } from 'chai'

describe ('isSymmetric', () => {
    it ('if given an empty array should return true', () => {
        // Arrange
        const inputArray = [];

        // Act
        const result = isSymmetric(inputArray);

        // Assert
        expect(result).to.be.true;
    })

    it ('should return falce if a non-array value is given', () => {
        // Arrange
        // Act
        const nanResult = isSymmetric(NaN);
        const undefinedResult = isSymmetric(undefined);
        const objResult = isSymmetric({});
        const nullResult = isSymmetric(null);

        // Assert
        expect(nanResult).to.be.false;
        expect(undefinedResult).to.be.false;
        expect(objResult).to.be.false;
        expect(nullResult).to.be.false;
    })

    it ('should return falce if a non-simmetric array is given', () => {
        // Arrange
        const nonSimetric = [1, 2, 3, 4];

        // Act
        const result = isSymmetric(nonSimetric);

        // Assert
        expect(result).to.be.false;
    })

    it ('should return true if a simmetric array is given', () => {
        // Arrange
        const simmetricArrey = [3, 2, 1, 2, 3];

        // Act
        const result = isSymmetric(simmetricArrey);

        // Assert
        expect(result).to.be.true;
    })

    it ('should return false for symmetric lookalike values', () => {
        // Arrange
        const inputArray = ['1', '2', '3', 2, 1];

        // Act
        const result = isSymmetric(inputArray);

        // Assert
        expect(result).to.be.false;
    })
})