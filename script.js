const companyText = "Art By Mwayie Snooker"; // Change to your desired company name
const slogans = [
  "Capturing Life | Creating Arts",
  "Weddings| Portraits| Events Photographer"
];
const typedTextElement = document.getElementById("typed-text");
const typingDelay = 100; // Delay between each character typing
const erasingDelay = 50; // Delay between each character erasing
const newTextDelay = 2000; // Delay before starting to erase the text

let textIndex = 0;
let sloganIndex = 0;
let isTyping = true;

function type() {
  if (textIndex < companyText.length) {
    typedTextElement.textContent += companyText.charAt(textIndex);
    textIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (textIndex > 0) {
    typedTextElement.textContent = companyText.substring(0, textIndex - 1);
    textIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    setTimeout(typeSlogan, typingDelay);
  }
}

function typeSlogan() {
  typedTextElement.textContent = ""; // Clear the text
  textIndex = 0;
  isTyping = false;

  function typeSloganCharacters() {
    if (textIndex < slogans[sloganIndex].length) {
      typedTextElement.textContent += slogans[sloganIndex].charAt(textIndex);
      textIndex++;
      setTimeout(typeSloganCharacters, typingDelay);
    } else {
      setTimeout(eraseSlogan, newTextDelay);
    }
  }

  function eraseSlogan() {
    if (textIndex > 0) {
      typedTextElement.textContent = slogans[sloganIndex].substring(0, textIndex - 1);
      textIndex--;
      setTimeout(eraseSlogan, erasingDelay);
    } else {
      sloganIndex = (sloganIndex + 1) % slogans.length; // Loop through slogans
      isTyping = true;
      setTimeout(type, typingDelay);
    }
  }

  typeSloganCharacters();
}

document.addEventListener("DOMContentLoaded", function() {
  if (isTyping) {
    setTimeout(type, newTextDelay);
  } else {
    typedTextElement.textContent = companyText;
  }
});
