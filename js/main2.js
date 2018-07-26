
function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

console.log(loadData("Agree"));
console.log(loadData("Disagree"));
console.log(loadData("Why"));


let myImage = new Image(1280, 500);
myImage.src = 'tennessee.jpg';
document.body.appendChild(myImage);




