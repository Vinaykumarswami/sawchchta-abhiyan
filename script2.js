document.addEventListener('DOMContentLoaded', function() {
    // Fetch the username (replace this with your method of obtaining the username at login time)
    var userName = "John Don"; // Replace this with the actual username
  
    // Set the username in the certificate
    document.getElementById('userName').innerText = userName;
  
    // Download functionality
    document.getElementById('downloadBtn').addEventListener('click', function() {
      var certificateImgSrc = document.getElementById('certificateImg').src;
      var downloadLink = document.createElement('a');
      downloadLink.href = certificateImgSrc;
      downloadLink.download = 'certificate.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  
    // Social media sharing options (replace "#" with your sharing URLs)
    document.getElementById('whatsappShare').href = "#";
    document.getElementById('twitterShare').href = "#";
    document.getElementById('telegramShare').href = "#";
  });
  