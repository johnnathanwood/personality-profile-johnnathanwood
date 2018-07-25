function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

console.log(loadData("Agree"));


const data = loadData("Agree")

const placeContent = document.getElementById("");
const Agree = data

function buildAgree(information){
    placeContent.innerHTML +=
        `<div class="">
            <h2>"People like me"</h2>
           
        </div>`
    let div = document.querySelector("")
    for (let i = 0; i < information.length; i++) {
        div.innerHTML +=
            `<div class="home">
                <img src="${information[i].image}" alt="">
                <h2>${information[i].type}</h2>
                <ul>
                    <li>Agree: ${information[i].agree}</li>
                    <li>Disagree: ${information[i].disagree}</li>
                    <li>Why: ${information[i].why}</li>
                </ul>
            </div>` 
    }
}
;
