
function changelink(){
    let name=document.getElementById("gen");
    let atag =document.getElementById('l');
    if(name.value=='female'){
    atag.setAttribute('href','female.html')
    }else if(name.value=='male'){
        atag.setAttribute('href','male.html')
    }else{
        atag.setAttribute('href','https://www.iskcon.org/')
    }
}
