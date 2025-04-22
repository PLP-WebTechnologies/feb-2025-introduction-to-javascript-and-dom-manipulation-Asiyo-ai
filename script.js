// Change text and style
document.getElementById('change-text-btn').addEventListener('click', () => {
    const text = document.getElementById('dynamic-text');
    text.textContent = 'The content has been changed!';
    text.style.color = 'tomato';
    text.style.fontWeight = 'bold';
    text.style.backgroundColor = '#f0f0f0';
  });
  
  // Add or remove an element
  const toggleBtn = document.getElementById('toggle-element-btn');
  const container = document.getElementById('toggle-container');
  let isElementPresent = false;
  
  toggleBtn.addEventListener('click', () => {
    if (!isElementPresent) {
      const newElement = document.createElement('p');
      newElement.textContent = 'A new paragraph has been added. Thi paragraph is added dynamically.Thi paragraph is added dynamically.';
      newElement.id = 'added-paragraph';
      container.appendChild(newElement);
      isElementPresent = true;
    } else {
      const existingElement = document.getElementById('added-paragraph');
      if (existingElement) {
        container.removeChild(existingElement);
      }
      isElementPresent = false;
    }
  });
  