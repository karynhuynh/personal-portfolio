let arrow = document.querySelector(".arrow-more");
arrow.addEventListener("mouseover", displayText);

function displayText() {
  let header = document.querySelector(".more-text");
  header.innerHTML = "LEARN MORE";
}
