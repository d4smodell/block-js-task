const toggle = () => {
  let labels = document.getElementsByTagName("label");
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.toggle("color");
  }
}

const inputs = document.querySelectorAll("input");

const on = () => inputs.forEach(item => item.checked = true);

const off = () => inputs.forEach(item => item.checked = false);