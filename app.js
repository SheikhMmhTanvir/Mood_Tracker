let moods=[]

function addMood(){
    const input=document.getElementById("moodInput");
    const score = parseInt(input.value);
    if(!isNaN(score) && score>=-10 && score<=10){
        moods.push(score);
        input. vlaue= "";
        renderMoods();
    } else{
        alert("Please endter a valid number");
    }
}
// renderMood for showing inputed mood in screen
function renderMoods(highlight={}){
    const list= document.getElementById("moodEntris")
    list.innerHTML=""
    moods.forEach((mood, index)=>{
        const li=document.createElement("li")
        li.textContent=`Day ${index+1}: ${mood}`
        //
        list.appendChild(li)
    })
}
//apply kadane's Algorithm
function bestStack(){
    if(moods.length == 0) return;
    let maxSum= -Infinity, currentSum =0;
    let start=0, end=0, temstr=0;

    for(let i=0; i< moods.length; i++){
        currentSum+=moods[i];
        if(currentSum>maxSum)
        {
            maxSum=currentSum;
            start=temstr;
            end=i;
        }
        if(currentSum<0){
            currentSum=0;
            temstr=i+1;
        }
    }
    renderMoods({start, end});
    document.getElementById("bestStack").innerHTML=`Best streak from day ${start+1} to ${end+1} <br> Total Score is : ${maxSum}`;
}