//Filename: ../views/Script/app.js
// Wait until the HTML document is fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
 
  // Function to fetch and display a new cat picture
  const refreshCat = () => {
    // STEP 1: Initiate a fetch request to the server's root route ('/')
    fetch('/')
      // STEP 2: Handle the response from the server
      .then(response => {
        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
          // If not successful, throw an error to trigger the .catch() block
          throw new Error('Network error');
        }
        // If successful, extract the HTML text from the response
        // (This returns another Promise)
        return response.text();
      })
      // STEP 3: Process the HTML received from the server
      .then(html => {
        // Replace the entire body content with the new HTML
        // This updates the page without a full refresh
        document.body.innerHTML = html;
      })
      // STEP 4: Handle any errors that occurred during the process
      .catch(error => {
        // Log the error to console for debugging
        console.error('Fetch error:', error);
        // Note: You could add user-friendly error display here
      });
  };


  // STEP 5: Add click event listener to the button
  document.querySelector('button').addEventListener('click', (e) => {
    // Prevent the default form submission behavior (if button is in a form)
    e.preventDefault();
    // Call our refresh function when button is clicked
    refreshCat();
  });


});
