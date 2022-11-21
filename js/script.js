const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
});

window.addEventListener('scroll', () => {
    nav.classList.remove('flex')
    nav.classList.add("hidden")
    btn.classList.remove("open")
})