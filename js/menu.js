function openNav() {
    document.getElementById('nav_bg').style.display = "block";
    document.getElementById('mysidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}
function closeNav() {
    document.getElementById('nav_bg').style.display = "none";
    document.getElementById('mysidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
}