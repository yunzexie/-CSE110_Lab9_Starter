// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Step 2
    // Get a references
    const consoleLogButton = document.querySelector('#console-log');
    const consoleErrorButton = document.querySelector('#console-error');
    const countButton = document.querySelector('#count-button');
    const consoleWarnButton = document.querySelector('#console-warn');
    const consoleAssertButton = document.querySelector('#console-assert');
    const consoleClearButton = document.querySelector('#console-clear');
    const consoleDirButton = document.querySelector('#console-dir');
    const consoleDirxmlButton = document.querySelector('#console-dirxml');
    const consoleGroupStartButton = document.querySelector('#console-group-start');
    const consoleGroupEndButton = document.querySelector('#console-group-end');
    const consoleTableButton = document.querySelector('#console-table');
    const startTimerButton = document.querySelector('#start-time');
    const endTimerButton = document.querySelector('#end-time');
    const consoleTraceButton = document.querySelector('#console-trace');
    const globalErrorButton = document.querySelector('#global-error');

    // Add an event listener to the button
    consoleLogButton.addEventListener('click', function() {
      console.log('Console Log Demo');
    });

    consoleErrorButton.addEventListener('click', function() {
        console.error('Console Error Demo');
    });

    let clickCount = 0;
    countButton.addEventListener('click', function() {
        clickCount++;
        console.log('Click Count:', clickCount);
    });

    consoleWarnButton.addEventListener('click', function() {
        console.warn('Console Warn Demo');
    });

    consoleAssertButton.addEventListener('click', function() {
        const expectedNumber = 10;
        const actualNumber = 5;
        console.assert(actualNumber === expectedNumber, `Expected ${expectedNumber}, but got ${actualNumber}`);
    });
      
    consoleClearButton.addEventListener('click', function() {
        console.clear();
    });

    consoleDirButton.addEventListener('click', function() {
        console.dir(consoleDirButton);
    });

    consoleDirxmlButton.addEventListener('click', function() {
        console.dirxml(consoleDirxmlButton);
    });

    consoleGroupStartButton.addEventListener('click', function() {
        console.group('Console Group');
    });

    consoleGroupEndButton.addEventListener('click', function() {
        console.groupEnd();
    });

    consoleTableButton.addEventListener('click', function() {
        const cardata = [
            { Brand: 'Mercedes-Benz', Model: 'C Class', Trim: 'AMG C63' },
            { Brand: 'BMW', Model: '3 Series', Trim: 'M3' },
            { Brand: 'ALFA-Romeo', Model: 'Giulia', Trim: 'Quadrifoglio' }
        ];
    console.table(cardata);
    });

    let startTime;
    startTimerButton.addEventListener('click', function() {
        startTime = new Date().getTime(); 
    });

    endTimerButton.addEventListener('click', function() {
        if (startTime) {
            const endTime = new Date().getTime();
            const elapsedTime = endTime - startTime;
            console.log('Time elapsed:', elapsedTime, 'milliseconds');
            startTime = new Date().getTime();
        }
    });

    function deep() {
        deeper();
    }  
    function deeper() {
        deepest();
    }
    function deepest() {
        console.trace();
    }
    consoleTraceButton.addEventListener('click', function Traced() {
        deep(); // Call the first function to start the trace
    });

    globalErrorButton.addEventListener('click', function GlobalErrorButtonClicked() {
        throw new Error('This is a global error');
    });

    // Step 3
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });
    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    const inputNumber = document.querySelector('#input-number');
    const submitButton1 = document.querySelector('#number-try-catch');

    submitButton1.addEventListener('click', function() {
        try {
            const inputValue = inputNumber.value;
            const number = parseInt(inputValue, 10);
            if (isNaN(number)) {
                throw new Error('Invalid input: Not a number');
            }
            console.log('Valid number:', number);
        } catch (error) {
            console.error('Error:', error.message);
            alert('Invalid input: Not a number');
        } finally {
            console.log('Finally block executed');
        }
    });

    // Step 4
    class LetterInputError extends Error {
        constructor(message) {
          super(message);
          this.name = 'LetterInputError';
        }
    }
    const inputLetter = document.querySelector('#input-letter');
    const submitButton = document.querySelector('#letter-try-catch');

    submitButton.addEventListener('click', function() {
        try {
          const letter = inputLetter.value.trim();
            if (!letter.match(/^[a-zA-Z]+$/)) {
                throw new LetterInputError('Please enter a single letter');
            }
            console.log('Input letter:', letter);
        } catch (error) {
            if (error instanceof LetterInputError) {
                console.error('Error:',error.name, error.message, error.stack);
            } else {
                console.error('Error:', error);
            }
        }
      });
    
});
  