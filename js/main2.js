
function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

console.log(loadData("Agree"));
console.log(loadData("Disagree"));
console.log(loadData("Why"));