// ==========================
// PASSWORD GENERATOR API
// ==========================

// Buttons
const buttonAPICaller = document.getElementById("button-api-caller");

// Inputs
const inputPasswordLength = document.getElementById("input-password-length");

// Output
const textAPIOutput = document.getElementById("api-output-area");
const displayAPIOutput = document.getElementById("api-output-section");

// About text (optional section)
const displayPasswordGenAbout = document.getElementById("password-generator-about");


// ==========================
// HELPERS
// ==========================

function clearOutput() {
  if (textAPIOutput) {
    textAPIOutput.innerText = "";
  }
}

function clearPasswordInput() {
  if (inputPasswordLength) {
    inputPasswordLength.value = "";
  }
}


// ==========================
// MAIN API CALL
// ==========================

if (buttonAPICaller) {
  buttonAPICaller.addEventListener("click", async () => {

    clearOutput();

    if (displayAPIOutput) {
      displayAPIOutput.classList.remove("hidden");
    }

    if (displayPasswordGenAbout) {
      displayPasswordGenAbout.classList.remove("hidden");
    }

    const passwordLength = inputPasswordLength?.value || 16;

    const url = `https://api.api-ninjas.com/v1/passwordgenerator?length=${passwordLength}`;

    try {
      const response = await fetch(url, {
        headers: {
          "X-Api-Key": "Jp7WxgA92eFJpZAc2fqYVeMATx4mde5dahTc2fVd"
        }
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      if (data.error) {
        textAPIOutput.innerText = data.error;
        return;
      }

      // API response field
      textAPIOutput.innerText = data.random_password;

      clearPasswordInput();

    } catch (error) {
      textAPIOutput.innerText = "Error: " + error.message;
    }
  });
}