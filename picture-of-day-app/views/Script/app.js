document.addEventListener('DOMContentLoaded', () => {
    // Example of using fetch() with Promises
    const refreshCat = () => {
      fetch('/')
        .then(response => {
          if (!response.ok) throw new Error('Network error');
          return response.text();
        })
        .then(html => {
          document.body.innerHTML = html;
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    };
 
     document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
      refreshCat();
     });
  });
