const wrapper = document.querySelector(".wrapper"),
  header = wrapper.querySelector("header");

const onDrag = ({ movementX, movementY }) => {
  let getstyle = window.getComputedStyle(wrapper);
  //getting left value of wrapper and parsing string to integer or number
  let left = parseInt(getstyle.left);
  //getting left value of wrapper and parsing string to integer or number
  let top = parseInt(getstyle.top);

  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${left + movementY}px`;
  //   console.log(typeof left, typeof top);
  //   console.log(e);
};

header.addEventListener("mousedown", () => {
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});
