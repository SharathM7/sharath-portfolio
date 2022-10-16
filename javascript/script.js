// typing
var typed = new Typed(".typing2", {
    strings:["","Web Developer","Front End Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed1 = new Typed(".typing", {
    strings:["","Web Developer","Front End Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// Active Nav

const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        for(let j=0; j<totalNavList; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
    })
}
const navToggleBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside"),
allSection = document.querySelectorAll(".main-content"),
totalSection = allSection.length;
navToggleBtn.addEventListener("click", () =>
{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open")
    }
}

window.addEventListener("scroll", () => {
    if(document.querySelector(".aside").classList.contains("open"))
    {
        document.querySelector(".aside").classList.remove("open");
    }
})