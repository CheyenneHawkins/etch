const screenref = document.querySelector("#screenid");
const container = document.querySelector('#container');
let clientHeight = document.getElementById('screenid').clientHeight;
let clientWidth = document.getElementById('screenid').clientWidth;
let resolution = 50
// let resolution = (prompt("How resolute are you?", "20"))
// let resolution = document.querySelector("#input");
let pixeldivider = "20px";
let i = 0;
let namer = i+1;
let rowres = (Math.floor(clientWidth/resolution));
let r = 0;
let border = false;

console.log(clientHeight);
console.log(clientWidth);

function createPixel() {
    // rowres = (Math.floor(clientWidth/resolution));
    pixeldivider = (`${rowres}px`);     //sets number of row divs
    const pixelDiv = document.createElement("div");
    pixelDiv.className = "pixelclass";
    if (border) {pixelDiv.style.border = 'gray solid 1px'};
    pixelDiv.style['background-color'] = '';
    pixelDiv.style.display = "block";
    pixelDiv.style.height = pixeldivider;
    pixelDiv.style.width = pixeldivider;
    pixelDiv.setAttribute('id', 'pixelid');    
    return pixelDiv;
};

function generateRow() {
    let tempscreen = document.getElementById("screenid");
    let row = document.createElement("div"),
      rowDivs = [],                 //set empty array
      i = 0;                        //set counter
      row.style.display = "flex";
      tempscreen.appendChild(row);  //add new row

      for (i=0; i < resolution; i += 1) { //populate row
      rowDivs.push(createPixel());
      row.appendChild(rowDivs[i]);
    }
}
generateRow();

function populatePixels(){
    let columns = [];                   //set empty array
    for (r=0; r < resolution; r++) {
    columns[r] = generateRow(); //populate row
    console.log("Row"+(r+1));

    }

}
populatePixels();

const live = document.querySelector('#pixelid');

screenref.addEventListener('click', colorPixel);

function colorPixel(){
    console.log("now");
    // live.style['background-color']="blue";
}

