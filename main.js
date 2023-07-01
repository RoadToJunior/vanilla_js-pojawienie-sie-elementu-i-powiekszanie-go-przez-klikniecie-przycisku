// tutaj rozwiązanie

const btn = document.querySelector("button");
let li = document.querySelectorAll("li");
let size = 10;

//for-loop option

btn.addEventListener("click", () => {
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = "block";
    li[i].style.fontSize = `${size}px`;
  }
  size++;
});

//forEach option

btn.addEventListener("click", () => {
  li.forEach((i) => {
    i.style.display = "block";
    i.style.fontSize = `${size}px`;
  });
  size++;
});
