"use strict";

import fs from "fs";

function getCalibrationSum() {
    const codeLines = getCodeLines();
    let calibrationValuesSum = 0;
    
    for (let line of codeLines) {
        const calibrationValue = getCalibrationValue(line);
        calibrationValuesSum += calibrationValue;
    }

    return calibrationValuesSum;
}

console.log(getCalibrationSum()); // 54331

/**
 * @returns {string[]}
 */
function getCodeLines() {
    return fs.readFileSync("./day-1-data.txt", "utf-8").trim().split("\n");
}

/**
 * @param {string} str 
 * @returns {number}
 */
function getCalibrationValue(str) {
    let firstDigit;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === "0" ||
            char === "1" ||
            char === "2" ||
            char === "3" ||
            char === "4" ||
            char === "5" ||
            char === "6" ||
            char === "7" ||
            char === "8" ||
            char === "9") {
            firstDigit = char;

            break;
        }
    }

    let lastDigit;

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];

        if (char === "0" ||
            char === "1" ||
            char === "2" ||
            char === "3" ||
            char === "4" ||
            char === "5" ||
            char === "6" ||
            char === "7" ||
            char === "8" ||
            char === "9") {
            lastDigit = char;

            break;
        }  
    }

    return Number(`${firstDigit}${lastDigit}`);
}
