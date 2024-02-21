let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usermarks=document.querySelector("#userscore");
const compmarks=document.querySelector("#compscore");
const btn = document.querySelector("#reset");

const generateCompChoice = () => {
    const options=["rock","paper","scissors"];
      //generate anything from rock ,  paper , scissors
     const randindex=Math.floor( Math.random() *3);  
     return options[randindex];          //gives random number from 0 to 2
}

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText="Game was Draw. Play again :<";
    msg.style.backgroundColor="#3F88C5";
}
const showWinner = (userwin,userChoice,compchoice)=>{
    if(userwin){
        userScore++;
        usermarks.innerText=userScore;
        console.log("you win!");
        msg.innerText = `You Win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="#2B7F2E";
    }
    else {
        compScore++;
        compmarks.innerText=compScore;
        console.log("you lose!");
        msg.innerText = `You lost. ${userChoice} beats your ${compchoice}`;
        msg.style.backgroundColor="#F49E4C";
       
    }
};
const playGame = (userChoice) =>{
         console.log("user choice = ",userChoice );
         let compchoice = generateCompChoice();
         console.log("computer choice =" ,compchoice);
         //generate the computer choice now 


         if(userChoice==compchoice){
               drawGame();
         }
         else{
            let userwin=true;
           if(userChoice==="rock"){
            //scissors,paper
                  userwin =compchoice==="paper" ? false : true;
           } else if (userChoice==="paper"){
            //rock , scissors
            userwin=compchoice==="scissors"?false:true;
           }
           else {
            //rock ,paper
           userwin= compchoice==="rock" ?false:true;
           }
              showWinner(userwin,userChoice,compchoice);
         }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid = choice.getAttribute("id");
        console.log(`choice clicked is ${choiceid}`)
        playGame(choiceid);
    });
});

const resetbtn = () => {
       usermarks.innerText=0;
       compmarks.innerText=0;
       msg.innerText="Play Your Game";
       msg.style.backgroundColor="#081b31";

}
btn.addEventListener("click",resetbtn);