function togglePassword() {
  const input = document.getElementById("secretInput");
  const eye = document.getElementById("toggleEye");
  if (input.type === "password") {
    input.type = "text";
    eye.textContent = "🙈";
  } else {
    input.type = "password";
    eye.textContent = "👁️";
  }
}



function checkPassword() {
  const correctPassword = "pondit"; // Her nickname for you
  const input = document.getElementById("secretInput").value.trim().toLowerCase();

  if (input === correctPassword) {
    document.getElementById("passwordPage").classList.add("hidden");
    document.getElementById("page1").classList.remove("hidden");
  } else {
    document.getElementById("wrongPasswordMsg").style.display = "block";
  }
}


function goToPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function handleYes() {
  document.getElementById("popup").classList.remove("hidden");
  launchConfettiHearts();
}

function launchConfettiHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖"; // You can also try "❤️", "🎉", "✨"
    heart.classList.add("confetti");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}


function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

let noClickCount = 0;
function handleNo() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.querySelector(".btn-group button");


  const funnyTexts = [
    "Really???...😢",
    "You sure???...🥺",
    "Think again???...😘",
    "You're joking, right???...😂",
    "Final answer???...🤨",
    "ভুল করে চাপ দিলা নাকি???...😅",
    "মন খারাপ???...😔",
    "আমি তো ভাবছিলাম হ্যাঁ বলবা!!!...😭",
    "আবার বলছি, চিন্তা করো!!!...🤯",
    "😒...বড় ভাইয়া না বলবা নাকি!!!",
    "আরেকবার একবার ভেবে দেখ, প্লিজ...❤️",
    "This button runs away, not me!!!...😈",
    "Your yes = my happiness...😇",
    "Okay…but you’ll miss my boro vibes...😏",
    "Last chance to melt my heart 💘",
    "Are you breaking my heart??? 💔",
    "You clicked No? That hurts!!!...😭😭😭",
    "Even the moon said ‘Yes’...🌙",
    "Your 'No' is invalid!!!...🚫",
    "Just say YES already!!!...🥹"
  ];
  noClickCount++;
   // Get viewport dimensions
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Get size of button
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Safe padding from screen edge
  const padding = 20;

  // Random position within visible safe zone
  let newTop, newLeft;
  do {
    newTop = Math.random() * (screenHeight - btnHeight - padding * 2) + padding;
    newLeft = Math.random() * (screenWidth - btnWidth - padding * 2) + padding;

    const yesRect = yesBtn.getBoundingClientRect();
    const noRect = {
      top: newTop,
      left: newLeft,
      right: newLeft + btnWidth,
      bottom: newTop + btnHeight
    };

    var overlap = !(
      noRect.right < yesRect.left ||
      noRect.left > yesRect.right ||
      noRect.bottom < yesRect.top ||
      noRect.top > yesRect.bottom
    );
  } while (overlap); // Repeat until it's not overlapping the "Yes" button

  noBtn.style.position = "fixed";
  noBtn.style.top = `${newTop}px`;
  noBtn.style.left = `${newLeft}px`;
  noBtn.innerText = funnyTexts[noClickCount % funnyTexts.length];
}


function goToLetterPage() {
  document.getElementById("popup").classList.add("hidden");
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("letterPage").classList.remove("hidden");
}

function finishJourney() {
  // Hide the letter page
  document.getElementById("letterPage").classList.add("hidden");

  // Create a custom thank you message container or reuse one if exists
  let thankYou = document.getElementById("thankYouPage");
  if (!thankYou) {
    thankYou = document.createElement("div");
    thankYou.id = "thankYouPage";
    thankYou.classList.add("page");
    thankYou.style.textAlign = "center";
    thankYou.style.padding = "2rem";
    thankYou.innerHTML = `
      <h2>Thank You, Fulfos! 💖</h2>
      <p>
        This page is just a token of our beautiful friendship,<br>
        but our bond is infinite and timeless.<br><br>
        May our smiles, memories, and love keep growing forever.
      </p>
      <button id="restartBtn">Start Over</button>
    `;
    document.body.appendChild(thankYou);

    document.getElementById("restartBtn").addEventListener("click", () => {
      thankYou.classList.add("hidden");
      document.getElementById("passwordPage").classList.remove("hidden");
    });
  } else {
    thankYou.classList.remove("hidden");
  }
}

