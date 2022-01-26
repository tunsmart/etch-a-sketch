const container = document.getElementById("container");
const baseColor = document.getElementById("base-color");
const gridSize = document.getElementById('resize');


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "cell";
  };
};

makeRows(16, 16);



gridSize.addEventListener('change', updateGridSize);
function updateGridSize(){
    container.innerHTML = '';
    makeRows(this.value, this.value)
    
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => cell.addEventListener('mouseover', changeColor))

} 

baseColor.addEventListener('change', updateColor);
function updateColor() {
    document.documentElement.style.setProperty('--color', this.value)
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => cell.addEventListener('mouseover', changeColor));

function changeColor() {
    this.classList.toggle('color')
}