let question=document.getElementById("question")
let a=document.getElementById("a")
let b=document.getElementById("b")
let c=document.getElementById("c")
let d=document.getElementById("d")
let pre=document.getElementById("pre")
let next=document.getElementById("next")


let count=0

let quiz=[
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<scripting>",
        d: "<javascript>",
        currect: "a"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        a: "document.getElementByName(p).innerHTML = Hello World!",
        b: "document.getElementById(demo).innerHTML = Hello World",
        c: "#demo.innerHTML = Hello World!",
        d: "document.getElement(p).innerHTML = Hello World!",
        currect: "c"
    }
]

function show(){
    question.innerText=quiz[count].question
    a.innerText=quiz[count].a
    b.innerText=quiz[count].b
    c.innerText=quiz[count].c
    d.innerText=quiz[count].d
}
a
show()

next.addEventListener("click",()=>{
    if(count<quiz.length-1){
        count++;
        show()
    }
})


pre.addEventListener("click",()=>{
    if(count>0){
        count--;
        show()
    }
})

























// function show(){
//     question.innerText=quiz[count].question
//     a.innerText=quiz[count].a
//     b.innerText=quiz[count].b
//     c.innerText=quiz[count].c
//     d.innerText=quiz[count].d
// }


// show()

// next.addEventListener("click", ()=>{
//     if(count<quiz.length-1){
//         count++
//         show()
//     }
// })

// pre.addEventListener("click", ()=>{
//     if(count>0){
//         count--
//         show()
//     }
// })