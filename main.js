// tutaj rozwiązanie

const btn = document.querySelector("button");
const li = document.querySelector("li");
let array = [...document.querySelectorAll("li")];
let size = 10;

//for-loop option

// btn.addEventListener("click", () => {
//   for (let i = 0; i < array.length; i++) {
//     array[i].style.display = "block";
//     array[i].style.fontSize = size + "px";
//   }
//   size++;
// });

//forEach option

btn.addEventListener("click", () => {
  array.forEach((i) => {
    i.style.display = "block";
    i.style.fontSize = size + "px";
  });
  size++;
});
