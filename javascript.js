function Nav() {
	 var x = document.getElementById("nav-items");
	 if (x.className === "nav-bar") {
		x.className += " responsive";
	} else {
		x.className = "nav-bar";
	 }
}
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("slide");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
//
function Show(id)
{
	document.getElementById(id).style.display='block';
	document.getElementById('about').style.display='none';
}
function Hide(id)
{
	document.getElementById(id).style.display='none';
	document.getElementById('about').style.display='block';
}

function showhide(id)
{
        if (document.getElementById('BD').style.display == 'none') {
          document.getElementById('BD').style.display = 'block';
          document.getElementById(id).style.display = 'none';
        }
        else {
          document.getElementById('BD').style.display = 'none';
          document.getElementById(id).style.display = 'block';
		  
        }
}
 
function show(id)
{ 
		
		if (document.getElementById(id).style.display == 'none') 
		{
          document.getElementById('about us').style.display = 'none'; 
          document.getElementById(id).style.display = 'block';
        }
        else {
          document.getElementById('about us').style.display = 'block';  
          document.getElementById(id).style.display = 'none';
		  
        }
}

function showtutorial(id)
{
		document.getElementById('payment-cont').style.display='none';
		document.getElementById(id).style.display='block'
}
function hidetutorial(id)
{
		document.getElementById('payment-cont').style.display='block';
		document.getElementById(id).style.display='none'
}
 