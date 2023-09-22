const variables = require('./variables.js');
const { TIME_FOR_CLICK, TIME_FOR_SWAP, OPEN_BG_IMAGE, SECOND_TAB_INDEX, checked_buttons } = variables;

console.log('Started')

/**
 * Get background image of button to work process
 * @param {HTMLElement} div - of feature-container
 * @returns {string} - background image
 */
const getBgImage = (div) => {
  const styles = window.getComputedStyle(div, '::after')
  return styles.getPropertyValue('background-image')
}

/**
 * Get title and description of work process
 * @param {HTMLElement} div - of orderProcess-container-with-status
 * @returns {Object} - title and description
 */
const getTitleAndDescription = (div) => {
  const title = div.querySelector('span')
  const description = div.querySelector('div.feature-multiline')
  return { title, description }
}

/**
 * Swap to second tab
 */
const swapToSecondTab = () => {
  const tabs = document.querySelectorAll('div.tabs-head');
  tabs[0].children[SECOND_TAB_INDEX].click();
};

/**
 * Click on button of work process
 */
function clickDivWithSpecificBackground() {
  const orderProcessDivs = document.querySelectorAll('div.orderProcess-container-with-status');
  let allButtonsChecked = true;

  Array.from(orderProcessDivs).some((div) => {
    const bgImage = getBgImage(div.querySelector('div.feature-container'));
    const { title, description } = getTitleAndDescription(div);
    const childDivWithMM = div.querySelector('div.feature-value');

    if (bgImage === OPEN_BG_IMAGE) {
      console.log(`Clicked on ${title.innerText}; \nDescription: ${description.innerText}; \n------------------`);
      allButtonsChecked = false;
      checked_buttons[title.innerText] = description.innerText;
      childDivWithMM.click();
      return true
    }
    return false
  });

  if (allButtonsChecked && orderProcessDivs.length > 0) {
    console.log('All processes are checked')
    print(checked_buttons)
    clearInterval(interval)
  }
}

const timeout = setTimeout(swapToSecondTab, TIME_FOR_SWAP);
const interval = setInterval(clickDivWithSpecificBackground, TIME_FOR_CLICK);

console.log(`Timeout for swap to second tab in ${TIME_FOR_SWAP / 1000} s`);
console.log(`Interval for clicking buttons in ${TIME_FOR_CLICK / 1000} s`);
console.log('------------------');