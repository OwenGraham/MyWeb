var gallerySize = gallery.length;
var numColumns = Math.floor(gallerySize / 7);

var columns = [];
for (let i = 0; i < numColumns; i++){
    columns[i] = document.createElement("div");
    columns[i].className = "column";
    document.getElementById("row").appendChild(columns[i]);    
}

for (let i = 0; i < gallerySize - 1; i++) {
    var pic = document.createElement("img");
    pic.src = "/".concat(gallery[i].split('/')[1]);

    var thisColumn = Math.floor(i / 7);
    columns[thisColumn].appendChild(pic);
}


//change number of columns images are displayed in using buttons above grid
var viewButtons = document.getElementsByClassName("numColumns");
for (let i = 0; i < viewButtons.length; i++) {
    viewButtons[i].addEventListener("click", () => {layoutSelect(viewButtons[i].id)}); 
}

function layoutSelect(id){
    //display images in one column
    if (id == "oneCol"){
        for (let i = 0; i < numColumns; i++) {
            columns[i].style.flex = "100%";
        }
    }
    //display images in two columns
    else if (id == "twoCol"){
        for (let i = 0; i < numColumns; i++) {
            columns[i].style.flex = "40%";
        }
    }
    //display images in three columns
    else if (id == "threeCol"){
        for (let i = 0; i < numColumns; i++) {
            columns[i].style.flex = "20%";
        }
    }
}


//make all pictures but the currently hovered one slightly transparent
var galleryPics = document.getElementById("gallery").getElementsByTagName("img");

for (let i = 0; i < galleryPics.length; i++) {
    galleryPics[i].animate([{opacity: 0}, {opacity: 1}], 2000,);
}

//event listeners for interacting with gallery pictures
for (let i = 0; i < galleryPics.length; i++){
    const thisPic = galleryPics[i];
    thisPic.addEventListener("mouseover", () => {picHover(thisPic)});
    thisPic.addEventListener("mouseout", () => {picHoverOff()});   
    thisPic.addEventListener("click", () => {enlarge(thisPic)});  
}

//when user hovers over a picture all other pictures in gallery are made slightly transparent
function picHover(thisPic){
    for(let i = 0; i < galleryPics.length; i++){
        galleryPics[i].style.opacity = "75%";
    }
    thisPic.style.opacity = "100%";
}
function picHoverOff(){
    for(let i = 0; i < galleryPics.length; i++){
        galleryPics[i].style.opacity = "100%";
    }
}

//enlarge image over semi-opaque background when clicked
function enlarge(a){
    const bg = document.createElement("div");
    bg.id = "darkenBack";

    const pic = document.createElement("img");
    pic.id = "enlargedPic";
    pic.src = a.src;

    const close = document.createElement("button");
    close.id = "closeButton";
    close.textContent = "X";
    close.addEventListener("click", function(){
        bg.remove();
    });

    const nextPic = document.createElement("button");
    nextPic.id = "nextPic";
    nextPic.textContent = ">";
    nextPic.addEventListener("click", function(){
        var addressArray = pic.src.split("/");
        var relative = addressArray[addressArray.length - 2].concat("/" + addressArray[addressArray.length - 1]);

        for (let i = 0; i < gallerySize; i++) {
            if (gallery[i].split('\\')[1] === addressArray[addressArray.length - 1]) {
                if(i == gallerySize - 1)
                    bg.remove();
                else
                    pic.src = "/".concat(gallery[i + 1].split('/')[1]);
            }
        }
    });

    const prevPic = document.createElement("button");
    prevPic.id = "prevPic";
    prevPic.textContent = "<";
    prevPic.addEventListener("click", function(){
        var addressArray = pic.src.split("/");
        var relative = addressArray[addressArray.length - 2].concat("/" + addressArray[addressArray.length - 1]);

        for (let i = 0; i < gallerySize; i++) {
            if (gallery[i].split('\\')[1] === addressArray[addressArray.length - 1]) {
                if(i == gallerySize - 1)
                    bg.remove();
                else
                    pic.src = "/".concat(gallery[i - 1].split('/')[1]);
            }
        }
    });


    bg.appendChild(pic);
    bg.appendChild(close);
    bg.appendChild(nextPic);
    bg.appendChild(prevPic);
    document.getElementById("gallery").appendChild(bg);
}