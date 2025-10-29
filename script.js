const container = document.querySelector(".squares-container");

let squares = 104;

for (let i = 0; i < squares; i++) {
  const div = document.createElement("div");
  div.classList.add("square");

  div.addEventListener("mouseenter", () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
    div.style.backgroundColor = randomColor;
    div.style.boxShadow = `0 0 12px ${randomColor}`;
    div.style.scale = 1.1;
  });

  div.addEventListener("mouseleave", () => {
    setTimeout(() => {
      div.style.backgroundColor = "#000";
      div.style.boxShadow = "none";
      div.style.scale = 1;
    }, 800);
  });

  container.appendChild(div);
}
