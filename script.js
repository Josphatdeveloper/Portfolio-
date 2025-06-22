
// Typing effect
const words = ["Josphat", "a Developer", "an ICT Pro"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    typewriter.textContent = currentWord;

    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
}
type();

// Show "Back to Top" button on scroll
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top when button clicked
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
