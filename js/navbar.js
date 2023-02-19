function togglesidebar(){
    var displaytype = document.getElementById("SideBarOuter");
    if (displaytype.style.display=='none') {
        displaytype.style.display='block';
    }
    else{
        displaytype.style.display='none';
    }
}