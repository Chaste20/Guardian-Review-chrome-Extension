// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.getElementById('urlInput');
    const checkButton = document.getElementById('checkButton');
    const resultDiv = document.getElementById('result');
  
    checkButton.addEventListener('click', function() {
      const url = urlInput.value.trim();
  
      if (url !== '') {
        

        // Make a request to the local Flask API
        fetch('http://127.0.0.1:5000/ml_process', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },

          body: new URLSearchParams({ url: url }),

       
      
      })
        .then(response => response.text())
        .then(htmlData => {
          // Update the resultDiv with the received data
          //resultDiv.innerText = data.result;
          //const predictions = data.predictions;
          // Display the predictions in the resultDiv
         // resultDiv.innerText = 'Predictions: ' + predictions;
         resultDiv.innerHTML = htmlData;
         
        })
        .catch(error => {
          console.error('error:', error);
          resultDiv.innerText = 'Error occurred';
          
        });
      }
    });
  });
  
  
  // This code is used for sending requests from the frontend to the backend server

  