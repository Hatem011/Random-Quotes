







var btnClick=document.getElementById("btnClick")
var text=document.getElementById("text")
var author=document.getElementById("author")
var quotes=[
    { author:"Mark lezbondex", Text: "“Be yourself; everyone else is already taken.”"},
 {  author:"Hanti Canti", Text: "“So many books, so little time.”"},
    {  author:"Albeto Daniel", Text: "“You only live once, but if you do it right, once is enough.”"},
{author:"Danilo Fabio", Text: "“You know you're in love when you can't fall asleep because reality is”"}
]
btnClick.addEventListener("click",function()
{
 var random=Math.round(Math.random()*quotes.length);
text.innerHTML=quotes[random].Text
author.innerHTML=quotes[random].author
})