AOS.init();
const quotes=document.getElementById("quotes")
const author=document.getElementById("author")
const newQ=document.getElementById("newQ")
let realData="";
let quotesData="";
const getNewQuotes=()=>{
    let random=Math.floor(Math.random()*20)
    quotesData=realData[random];
    quotes.innerHTML=`${quotesData.text}`
    if(quotesData.author==null){
        author.innerHTML='unknown'
    }else{
        author.innerHTML=`${quotesData.author}`
    }
    
}
const getQuotes=async()=>{
    const api="https://type.fit/api/quotes";
    try{
        let data=await fetch(api)
        realData=await data.json();
        getNewQuotes();
        // console.log(realData);
    }catch(error){}
}
newQ.addEventListener('click',getQuotes)
// getQuotes();