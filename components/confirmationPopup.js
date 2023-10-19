const popup = document.createElement('div');
const popupTitle = document.createElement('h1');
const closeButton = document.createElement('button');
const checkBoxRow = document.createElement('div');
const checkBox = document.createElement('input');
const checkBoxLabel = document.createElement('label');

checkBox.type = 'checkbox';
checkBoxLabel.innerText = 'Are you sure?';
checkBoxLabel.setAttribute('for', 'checkBox');
closeButton.disabled = true;

// Styles
popup.style.width = '300px';
popup.style.height = '300px';
popup.style.backgroundColor = '#fff';
popup.style.position = 'fixed';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
popup.style.display = 'none'; // Remember to change this to 'block' or 'flex' to show the popup
popup.style.flexDirection = 'column';
popup.style.alignItems = 'center';
popup.style.justifyContent = 'center';
popup.style.overflow = 'auto';
popup.style.borderRadius = '20px';

closeButton.style.marginBottom = '10px';

// Content
popupTitle.innerText = 'Arbeitsvorgänge';
closeButton.innerText = 'Accept';

// Listeners
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    console.log('Closed');
    // Delete list
    const child = popup.children[1];
    popup.removeChild(child);
    checked_buttons = {};
    checkBox.checked = false;
});

checkBox.addEventListener("change", function() {
    if (this.checked) {
        closeButton.disabled = false;
    } else {
        closeButton.disabled = true;
    }
});

// Append
checkBoxRow.appendChild(checkBox);
checkBoxRow.appendChild(checkBoxLabel);
popup.appendChild(popupTitle);
popup.appendChild(closeButton);
popup.appendChild(checkBoxRow);

document.body.appendChild(popup);