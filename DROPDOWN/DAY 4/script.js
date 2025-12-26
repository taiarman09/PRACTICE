let menulist=document.getElementById("menuList")

function togglemenu(){

    if(menulist.style.maxHeight=="0px"){
        menulist.style.maxHeight="300px"
    }
    else{
        menulist.style.maxHeight="0px"
    }
}