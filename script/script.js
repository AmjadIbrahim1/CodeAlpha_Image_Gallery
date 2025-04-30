// Nav
let btnHeaderSearchIcon = document.getElementById("Header-Search-Icon")
let btnHeaderSearch = document.getElementById("Header-Search")
btnHeaderSearchIcon.addEventListener("click",()=>{btnHeaderSearch.focus()})
var foctFlag=0
btnHeaderSearch.addEventListener("focus",()=>{
    btnHeaderSearch.style.border="1px solid #EECD5C"
    btnHeaderSearch.style.borderLeft="0px solid transparent"
    btnHeaderSearchIcon.style.border="1px solid #EECD5C"
})
document.addEventListener("click", (event) => {
    if (!btnHeaderSearch.contains(event.target) && !btnHeaderSearchIcon.contains(event.target)) {
        btnHeaderSearch.style.border = "";
        btnHeaderSearchIcon.style.border = "";
    }
});


