import { rgbToHexColor } from './03-RGB-to-Hex.js'
import { expect } from 'chai'

describe ('rgbToHexColor', () => {
    it ('shold return undefined it red value is invalid', () => {
        // Arrange
        // Acr
        const nonNumericRedValue = rgbToHexColor('123', 0, 0);
        const negariveRedValue = rgbToHexColor(-123, 0, 0)
        const toBirRedValue = rgbToHexColor(999, 0, 0)

        // Assert
        expect(nonNumericRedValue).to.be.undefined;
        expect(negariveRedValue).to.be.undefined;
        expect(toBirRedValue).to.be.undefined;
    })

    it ('shold return undefined it green value is invalid', () => {
        // Arrange
        // Acr
        const nonNumericGreenValue = rgbToHexColor(0, '123', 0);
        const negariveGreenValue = rgbToHexColor(0, -123, 0)
        const toBirGreenValue = rgbToHexColor(0, 999, 0)

        // Assert
        expect(negariveGreenValue).to.be.undefined;
        expect(nonNumericGreenValue).to.be.undefined;
        expect(toBirGreenValue).to.be.undefined;
    })

    it ('shold return undefined it blue value is invalid', () => {
        // Arrange
        // Acr
        const nonNumericBlueValue = rgbToHexColor(0, 0, '123');
        const negariveBlueValue = rgbToHexColor(0, 0, -123)
        const toBirBlueValue = rgbToHexColor(0, 0, 999)

        // Assert
        expect(nonNumericBlueValue).to.be.undefined;
        expect(negariveBlueValue).to.be.undefined;
        expect(toBirBlueValue).to.be.undefined;
    })

    it ('shold return a correct hex value if a correct rgb is given', () => {
        // Arrange
        const redValue = 223;
        const greenValue = 123;
        const blueValue = 12;

        // Acr
        const result = rgbToHexColor(redValue, greenValue, blueValue);

        // Assert
        expect(result).to.equal('#DF7B0C')
    })

    it ('shold return a correct hex value if a max rgb value is given', () => {
        // Arrange
        const redValue = 255;
        const greenValue = 255;
        const blueValue = 255;

        // Acr
        const result = rgbToHexColor(redValue, greenValue, blueValue);

        // Assert
        expect(result).to.equal('#FFFFFF')
    })

    it ('shold return a correct hex value if a min rgb value is given', () => {
        // Arrange
        const redValue = 0;
        const greenValue = 0;
        const blueValue = 0;

        // Acr
        const result = rgbToHexColor(redValue, greenValue, blueValue);

        // Assert
        expect(result).to.equal('#000000')
    })
})