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
    tabs[0].children[INDEX_OF_TAB].click();
};
  
/**
 * Click on button of work process
 */
const clickDivWithSpecificBackground = () => {
    const orderProcessDivs = document.querySelectorAll('div.orderProcess-container-with-status');
    let allButtonsChecked = true;

    Array.from(orderProcessDivs).some((div) => {
        const bgImage = getBgImage(div.querySelector('div.feature-container'));
        const { title, description } = getTitleAndDescription(div);
        const childDivWithMM = div.querySelector('div.feature-value');
        const material = div.querySelectorAll('div.section-expandable')

        if (filter && bgImage === BG_IMAGE) {
            const titleText = title.innerText.split(' ')[1];
            filterSplit = filter.split(' ');
            const isTitleContainsFilter = filterSplit.some((item) => titleText.includes(item));

            if (isTitleContainsFilter) {
                console.log(`Clicked on ${title.innerText}; \nDescription: ${description.innerText}; \n------------------`);
                allButtonsChecked = false;
                checked_buttons[title.innerText] = description.innerText;
                childDivWithMM.click();
                if (material.length > 0) {
                    clearFilterPopup(filterPopup);
                    clearTimeout(timeout); 
                    clearInterval(interval);
                }        
                return true
            }

        } else if (bgImage === BG_IMAGE) {
            console.log(`Clicked on ${title.innerText}; \nDescription: ${description.innerText}; \n------------------`);
            allButtonsChecked = false;
            checked_buttons[title.innerText] = description.innerText;
            childDivWithMM.click();
            if (material.length > 0) {
                clearFilterPopup(filterPopup);
                clearTimeout(timeout); 
                clearInterval(interval);
            }       
            return true
        }
        return false
    });

    if (allButtonsChecked && orderProcessDivs.length > 0) {
        console.log('All processes are checked')
        clearInterval(interval)
    }
}

const openConfirmationPopup = (popup) => {
    popup.style.display = 'flex';
}

const fillConfirmationPopup = (popup, checked_buttons) => {
    // Создаем список
    const popupList = document.createElement('ul');
    popupList.classList.add('popup-list'); // Добавляем класс для стилизации
    const secondChild = popup.children[1];
    popup.insertBefore(popupList, secondChild);
    
    // Добавляем элементы списка
    Object.keys(checked_buttons).forEach((key) => {
        const li = document.createElement('li');
        li.classList.add('popup-list-item'); // Добавляем класс для стилизации
        li.innerHTML = `
        <div class="popup-list-item-process">${key}</div>
        <div class="popup-list-item-description">${checked_buttons[key]}</div>
        `;
        popupList.appendChild(li);
    });
}

const openFilterPopup = (popup) => {
    popup.style.display = 'flex';
}

const clearFilterPopup = (filterPopup) => {
    filterPopup.children[1].value = '';
    filter = null
}

