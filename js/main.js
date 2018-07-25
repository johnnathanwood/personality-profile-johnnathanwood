const Profile= {
  Agree: 
    {
    agree1: "Open Minded and Flexible",
    agree2: "Very Creative",
    agree3: "Idealistic",

  }

  ,

  Disagree:
  {
      disagree1: "Difficult to Get to Know", 
      disagree2: "Too Altruistic",
      disagree3: "Impractical",
  },

// why: ["I see myself as a person everyone knows", "I dont think of myself as selfish", "I have control over my imagination"],
  Why:
  {
      why1: "Difficult to Get to Know", 
      why2: "Too Altruistic",
      why3: "Impractical",
  },

}

function setData(nameTag, jsObject){
let stringifiedObject = JSON.stringify(jsObject);
localStorage.setItem(nameTag, stringifiedObject);
}

setData("Agree","Disagree","Why",Profile);


function loadData(nameTag){
  let stringifiedObject = localStorage.getItem(nameTag);
  let parsedObject = JSON.parse(stringifiedObject);
  return parsedObject;
}




