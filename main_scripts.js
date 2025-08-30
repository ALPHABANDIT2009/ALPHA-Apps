// Wait for site to load
window.addEventListener('load', function () {





    // Draggable elements

    // Games tab
    function dragElement(e){var t=0,n=0,o=0,d=0;function l(l){(l=l||window.event).preventDefault(),t=o-l.clientX,n=d-l.clientY,o=l.clientX,d=l.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function m(){document.onmouseup=null,document.onmousemove=null,document.getElementById("window_ID_games").classList.remove("Dragged_State"),document.getElementById("window_bar_ID_games").classList.remove("Dragged_State")}document.getElementById("window_bar_ID_games").onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,d=e.clientY,document.onmouseup=m,document.getElementById("window_ID_games").classList.add("Dragged_State"),document.getElementById("window_bar_ID_games").classList.add("Dragged_State"),document.onmousemove=l}}dragElement(document.getElementById("window_ID_games"));
   
})

//App Functions
function test_app_load() {
      window.open("https://www.youtube.com/embed/pxEV1A5mTYM", "Test_App", "height=300,width=540");
}



// Game Apps
function emulator_load() {
 window.open("Apps/Emulator JS/4.2.3/index.html", "Test_App", "height=500,width=600");
}