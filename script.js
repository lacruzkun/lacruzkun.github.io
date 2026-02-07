const dots = document.querySelector(".dots");

for (let i = 0; i < 120; i++)
{
  const dot = document.createElement("div");
  dot.className = "dot";

  dot.style.left = Math.random() * 100 + "%";
  dot.style.top = Math.random()*100+"%";

  dots.appendChild(dot);
}
