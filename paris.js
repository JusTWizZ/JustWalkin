function Sonido(){
    var vid = document.getElementById("video2");
    var vid1 = document.getElementById("switch-label1")
    vid.setAttribute("src","https://www.youtube.com/embed/-ohLLf4-cgk?autoplay=1&mute=0&controls=0&start=60&playsinline=1&rel=0&showinfo=0&modestbranding:1&disablekb=0")
    vid1.setAttribute("onclick","Silenciar()");
}
function Silenciar(){
    var vid = document.getElementById("video2");
    var vid1 = document.getElementById("switch-label1")
    vid.setAttribute("src","https://www.youtube.com/embed/-ohLLf4-cgk?autoplay=1&mute=1&controls=0&start=60&playsinline=1&rel=0&showinfo=0&modestbranding:1&disablekb=0")
    vid1.setAttribute("onclick","Sonido()");
}
function SonidoMusica(){
    var vid = document.getElementById("musica");
    var vid1 = document.getElementById("switch-label")
    vid.muted = false;
    vid1.setAttribute("onclick","SilenciarMusica()");
}
function SilenciarMusica(){
    var vid = document.getElementById("musica");
    var vid1 = document.getElementById("switch-label")
    vid.muted = true;
    vid1.setAttribute("onclick","SonidoMusica()");
}