var smoke_anim = setInterval( function(){
  var smoke_img = document.getElementById("smoke_bg");
  var smoke_top = smoke_img.offsetTop;
  if (smoke_top >= 0){
    smoke_top = -420;
  } else {
      smoke_top += 210;
  }
  // console.log(smoke_top);
  smoke_img.style.top = smoke_top + "px";
  }, 2000);