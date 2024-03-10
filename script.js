document.addEventListener('DOMContentLoaded', function () {
    // Generate random captcha
    function generateCaptcha() {
      let captcha = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return captcha;
    }
  
    // Set initial captcha
    document.getElementById('captcha').innerText = generateCaptcha();
  
    // Handle form submission
    document.getElementById('login-form').addEventListener('submit', function (event) {
      event.preventDefault();
      // Get username, password, and entered captcha
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const enteredCaptcha = document.getElementById('captchaInput').value;
  
      // Get the current captcha
      const currentCaptcha = document.getElementById('captcha').innerText;
  
      // Check if entered captcha matches the current captcha
      if (enteredCaptcha === currentCaptcha) {
        // Dummy validation - check if username and password are the same
        if (username === password) {
          // Redirect to the next page
          window.location.href = 'welcome.html';
        } else {
          alert('Invalid username or password. Please try again.');
          // Refresh captcha
          document.getElementById('captcha').innerText = generateCaptcha();
        }
      } else {
        alert('Invalid captcha. Please try again.');
        // Refresh captcha
        document.getElementById('captcha').innerText = generateCaptcha();
      }
    });
  });
  