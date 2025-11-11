// popup.js

// Function to show a popup message
function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = message;
    document.body.appendChild(popup);

    // Style the popup
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = 'white';
    popup.style.borderRadius = '5px';

    // Auto-remove the popup after 3 seconds
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 3000);
}

// Example usage:
// showPopup('This is a popup message!');
