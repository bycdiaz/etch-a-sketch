const gridContainer = document.querySelector('.container');

function gridInit(gridDensity=16) {
  createGrid(gridDensity);
  hoverChange();
  resetGrid();
}

gridInit();

function createGrid(gridDensity) {
  console.log(gridDensity);
  for (let i = 0; i < gridDensity * gridDensity; i++) {
    const gridItems = document.createElement('div');
    gridItems.className = "grid-item";
    gridContainer.appendChild(gridItems);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${gridDensity}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridDensity}, 1fr)`
};

// toggles class
function hoverChange() {
  const gridCells = document.querySelectorAll('.grid-item');
  gridCells.forEach( gridCell => {
      gridCell.addEventListener('mouseover', function(e) {
      e.target.classList.toggle("grid-item-hovered");
    }, {once: true});
  });
};

function resetGrid() {
  const freshGrid = document.querySelector('#resetGrid');
  freshGrid.addEventListener('click', function(e) {
    document.querySelector('.container').innerHTML = "";
    const gridDensity = Number(prompt("Please enter number of rows and columns:"));
    gridInit(gridDensity);
  }, { once: true });
}


// dietCokeHeadToday at 2: 09 PM
// @bycdiaz It's because you're calling resetGrid which sets up an event listener
// so everytime you click the reset button you create another event listener
// and those two create another 2
// and those 4 create another 4