var container = document.getElementById("container");
var no_of_grids = 16
var onGridMouseHover = function(ev){
    ev.target.classList.add("hover");
    // ev.target.removeEventListener("mouseover",onGridMouseHover);
    ev.target.style.backgroundColor = getRandomRGB();
    var current = ev.target.style.opacity;
    console.log(current);
    ev.target.style.opacity = (current < 1)? Number(current) + 0.1 : 1;
    console.log(ev.target.style.opacity);
};
var onGridMouseLeave = function(ev){
    ev.target.classList.remove("hover");
}
var addMouseHoverPinkuu = function(){
    container.addEventListener("mouseover",onGridMouseHover);
    container.addEventListener("mouseout",onGridMouseLeave);
};
// addMouseHoverPinkuu();

function generateGrid(){
    var side = 960 / no_of_grids;
    for(i=0;i<no_of_grids*no_of_grids ;i++){
        var div = document.createElement("div"); // The second option param is rarely used
        div.className = "grid";
        div.style.height = `${side}px`;
        div.style.width = `${side}px`;
        div.addEventListener("mouseover",onGridMouseHover);
        container.append(div);
    }
}
generateGrid();

// Header
var header = document.getElementById("header");
var headerContent = "Number of grids per row"
header.querySelector("#no-of-grid").innerText = headerContent + no_of_grids;
header.querySelector("#inputbutton").addEventListener("click",()=>{
    var input = Number(prompt("Enter number of squares per row (max:100)"));
    if(input > 0 && input < 100){ //or use isNaN()
        no_of_grids = input;
        container.innerHTML = "";
        generateGrid();
    }
})

function getRandomRGB(){
    function rand(){
        return Math.random()*256;
    }
    return `rgb(${rand()},${rand()},${rand()})`;
}