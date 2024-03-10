// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the checkbox and button elements
  const rulesCheckbox = document.getElementById('rulesCheckbox');
  const agreeBtn = document.getElementById('agreeBtn');

  // Add change event listener to the checkbox
  rulesCheckbox.addEventListener('change', function () {
    // Enable/disable the button based on checkbox state
    if (rulesCheckbox.checked) {
      agreeBtn.disabled = false;
    } else {
      agreeBtn.disabled = true;
    }
  });

  // Add click event listener to the button
  agreeBtn.addEventListener('click', function () {
    // Redirect to the next page
    window.location.href = 'index2.html';
  });
});
