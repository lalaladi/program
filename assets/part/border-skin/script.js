/*
inspiration from
https://dribbble.com/shots/19811237-Daily-care-Web-App
*/

const cards = document.querySelectorAll(".card-skin");
cards.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    const input = item.querySelector("input");
    input.checked = !input.checked;
  });
});