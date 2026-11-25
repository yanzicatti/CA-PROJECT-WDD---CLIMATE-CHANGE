//first load entire html code before applying any js feature.

const actionBox = document.getElementById("takeactioncheckbox");

if (actionBox) {
  const checkboxes = actionBox.querySelectorAll('input[type="checkbox"]');
  const countText = document.getElementById("actionCount");
  const messageText = document.getElementById("answercheckbox");
  const progressBar = document.getElementById("actionProgress");
  const resetBtn = document.getElementById("resetActionsBtn");

  function checkProgress() {
    let count = 0;

    // Count how many boxes are ticked
    checkboxes.forEach(function (box) {
      if (box.checked) {
        count++;
      }
    });

    // Update the count and progress bar
    countText.textContent = "You did " + count + " of 5 actions";
    progressBar.style.width = (count * 20) + "%";
    progressBar.textContent = (count * 20) + "%";

    // Clear old message
    messageText.innerHTML = "";

    const newMessage = document.createElement("p");

    if (count === 0) {
      newMessage.textContent = "Tick any action above to get started!";
    } else if (count < 3) {
      newMessage.textContent = "Good start! Every small habit helps.";
    } else if (count < 5) {
      newMessage.textContent = "Great job! You are making a real difference.";
    } else {
      newMessage.textContent = "Climate Champion! You completed all 5 actions!";
      newMessage.className = "fw-bold text-success";
    }

    messageText.appendChild(newMessage);
  }

  // Run checkProgress whenever any checkbox changes
  checkboxes.forEach(function (box) {
    box.addEventListener("change", checkProgress);
  });

  // Reset button clears all checkboxes
  resetBtn.addEventListener("click", function () {
    checkboxes.forEach(function (box) {
      box.checked = false;
    });
    checkProgress();
  });

  // Run once when the page loads
  checkProgress();
}