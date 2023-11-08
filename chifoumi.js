const affichage = document.getElementById("result");
const score = document.getElementById("score");
let array_score = [];

const miples = ['pierre', 'ciseaux', 'papier'];

//const data = 0

const game = (data) => {
    const iaGame = Math.floor(Math.random()*3);
    if(iaGame === data) {
        return ["match nul", miples[data],miples[iaGame], null];
        }
        else if((data === 0 && iaGame === 1)||(data === 1 && iaGame === 2)||(data === 2 && iaGame === 0))  {
            return ["vous avez gagné", miples[data], miples[iaGame], true];
        } else {
            return ["Vous avez perdu", miples[data], miples[iaGame], false];
        }

    }

const dataObject = [{id: 'rock', param: 0}, {id: 'paper', param: 1}, {id: 'cissor', param: 2}];

for(let i = 0; i < dataObject.length; i++){
 
    document.getElementById(dataObject[i].id).addEventListener('click', function(){
        const result = game(dataObject[i].param);
        array_score.push(result[3]);
        affichage.innerText = `${result[0]} en jouant ${result[1]} contre ${result[2]}`;
        console.log(array_score);
        console.log(array_score.sort(true));
    });
}

