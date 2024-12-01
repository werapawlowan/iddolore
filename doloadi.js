// Select the element you want to observe
const elementToObserve = document.querySelector('#elementId');

// Create a new MutationObserver instance
const observer = new MutationObserver((mutationsList, observer) => {
  // Iterate through the mutations list
  for (const mutation of mutationsList) {
    // Check if the mutation type is 'attributes' and the attributeName is 'aria-selected'
    if (mutation.type === 'attributes' && mutation.attributeName === 'aria-selected') {
      // Execute your action here
      console.log('The aria-selected attribute has changed!');
    }
  }
});

// Configure the observer to watch for attribute changes
const observerConfig = {
  attributes: true, // Watch for attribute changes
  attributeFilter: ['aria-selected'], // Only observe changes to the 'aria-selected' attribute
};

// Start observing the element
observer.observe(elementToObserve, observerConfig);
