function home() {
    var home=document.getElementById('home');
    var close=document.getElementById('quit');
    var mob_menu=document.getElementById('mob_menu');
    mob_menu.style.display = 'block';
    close.style.display = 'block';
    home.style.display = 'none';
}
function quit() {
    var home=document.getElementById('home');
    var close=document.getElementById('quit');
    var mob_menu=document.getElementById('mob_menu');
    mob_menu.style.display='none';
    close.style.display='none';
    home.style.display='block';

}