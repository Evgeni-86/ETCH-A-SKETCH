/*************************Переменные*******************************************/
const container = document.querySelector(".conteiner_grid");
const inputs = document.getElementById('number_rows');
let sizing = 10;
const setColors = document.getElementById('colors');
/**************************************************************************** */

/***********************Создание сетки*******************************************/
function makeRows(rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid_item";       
    };
};
/*********************************************************************************/

/**************************Отслеживание регулятора размера сетки*******************/
    inputs.addEventListener('input', () => { 
      console.log(inputs.value);
      clearGrid();
      makeRows(inputs.value, inputs.value);
      muveMouse();
    });
/***************************************************************************************/

/********************Удаление предыдущих дочерних обьектов***********************/
function clearGrid() { while (container.firstChild) {
      container.removeChild(container.firstChild);
    }};
/*********************************************************************************/

/************************Отслеживаем события мыши***********************************/
function muveMouse() {

const grid_items = document.querySelectorAll(".grid_item");
grid_items.forEach((grid_item) => {

    grid_item.addEventListener(('mouseover'), (elem) => {
      if (elem.buttons == 1) {  
          if (setColors.checked) {
              randomColor(grid_item);
          }
          else {
              blackColor(grid_item);
          }
      };
    }); 

    grid_item.addEventListener('mousedown', () => {
        if (setColors.checked) {
          randomColor(grid_item);
        }
        else {
            blackColor(grid_item);
        }
    });      
});        
};
/***********************************************************************************/

/************************При старте**************************************************/
window.onload = () => {
  makeRows(sizing, sizing);
  inputs.value = sizing;
  muveMouse();
};
/*********************************************************************************/

/************************Случайный цвет********************************************/
function randomColor(elem) {

    elem.classList.add('grid_item_cahge');

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);
    elem.style.setProperty('--red', red);
    elem.style.setProperty('--green', green);
    elem.style.setProperty('--blue', blue);
};
/********************************************************************************/

/************************Добавление черного цвета********************************/
function blackColor(elem) {

    if (!elem.classList.contains("grid_item_blacked")) {

      elem.classList.add('grid_item_blacked');
      blacked = 0.5;
      elem.style.setProperty('--black-elem', blacked);
      return;
    };

    if (elem.classList.contains("grid_item_blacked")) {

      let bg = elem.style.getPropertyValue('--black-elem');
      blacked = bg - (-0.1);
      elem.style.setProperty('--black-elem', blacked);
      return;
    };
};
