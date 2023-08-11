// Assuming this code is part of an HTML file in a <script> tag

// 1. Select elements with the 'ramp' class
const rampElements = document.querySelectorAll('.ramp');

// 2. Define the pattern you want to search for
const patternSelector = 'ul[data-tag="*75*"] li[data-id="98*"] div[data-class="*35"] span.value[value="VALID_CHARACTER"]';

// 3. Loop through the ramp elements and search for the pattern within each of them
rampElements.forEach((rampElement) => {
    const matchingPattern = rampElement.querySelector(patternSelector);
    if (matchingPattern) {
        console.log(matchingPattern);
    }
});




       
// const rampElements = document.querySelectorAll('.ramp');


// const patternSelector = 'ul[data-tag="*75*"] li[data-id="98*"] div[data-class="*35"] span.value[value="VALID_CHARACTER"]';


// rampElements.forEach((rampElement) => {
//     const matchingPattern = rampElement.querySelector(patternSelector);
//     if (matchingPattern) {
//         console.log(matchingPattern);
//     }
// });