let side1=document.querySelector('.side1')
let side2=document.querySelector('.side2')
let refresh=document.querySelector('.refresh')
let color=document.querySelector('.color')
let roleit=document.querySelector('.roleit')
let hold=document.querySelector('.hold')
let images=document.querySelector('.image')
let winner1=document.querySelector('.winner1')
let winner=document.querySelector('.winner')
let s1=document.querySelector('.s1')
let s2=document.querySelector('.s2')
let c1=document.querySelector('.c1')
let c2=document.querySelector('.c2')
var x,y,z,bgColor,scores,currentscore,ap,playing;


function abc(){
    x=Math.floor(Math.random()*256);
    y=Math.floor(Math.random()*256);
    z=Math.floor(Math.random()*256);
    bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}



    

color.addEventListener('click',function() {
    abc();
    document.querySelector("body").style.background=bgColor;
    
})

refresh.addEventListener('click',function(){
    init();
})

const init =function(){
s1.innerHTML=0;
    s2.innerHTML=0;
    c1.innerHTML=0;
    c2.innerHTML=0;
    scores = [0, 0,0];
  currentscore = 0;
  ap = 1;
  playing = true;
  side1.classList.add('activeplayer');
  side2.classList.remove('activeplayer');
  images.classList.remove('hide');
  document.querySelector('.winner1').classList.add('hide');
         document.querySelector('.winner').classList.add('hide');

}
init();



roleit.addEventListener('click',function(){
   
    if(playing){
    var n=Math.trunc(Math.random()*6+1)
    console.log(n)
    images.src=`/img/dice-${n}.png`;
    if(!(n==1 || n==6))
    {
     currentscore=currentscore+n;
     document.querySelector(`.c${ap}`).innerHTML=currentscore;   
    }else{
        switchscreen();
    }}
});

const switchscreen=function (){
    
    document.querySelector(`.c${ap}`).innerHTML=0;
    currentscore=0;
    ap= ap=== 1?2:1;
    console.log('exit ap',ap)
    
};

hold.addEventListener('click',function () 
{
    if(playing){
        scores[ap]+=currentscore;
        document.querySelector(`.s${ap}`).innerHTML=scores[ap];
    if(scores[ap] >=20){
         document.querySelector('.winner1').classList.remove('hide');
         document.querySelector('.winner').classList.remove('hide');
         document.querySelector('.winner').innerHTML=`player ${ap}`;
         document.querySelector('.image').classList.add('hide');
    }}
    
})