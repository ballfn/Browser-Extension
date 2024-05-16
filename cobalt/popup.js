document.addEventListener('DOMContentLoaded', () => {
	
  // Get the current tab
  browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let currentUrl = tabs[0].url;
    let newUrl = `https://cobalt.tools/?u=${encodeURIComponent(currentUrl)}`;
    let iframe = document.getElementById('embedded-page');
    let loading = document.getElementById('loading');
    let settingsButton = document.getElementById('settings-button');
    let settingsContainer = document.getElementById('settings-container');

    // Set the iframe source
    iframe.src = newUrl;

    // Show iframe and hide loading indicator when iframe is loaded
    iframe.addEventListener('load', () => {
      loading.style.display = 'none';
      iframe.style.display = 'block';
    });

    // Handle settings button click event
    settingsButton.addEventListener('click', () => {
      if (settingsContainer.style.display === 'none') {
        settingsContainer.style.display = 'flex';
      } else {
        settingsContainer.style.display = 'none';
      }
    });
  });
});
