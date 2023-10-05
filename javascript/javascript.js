/* let slideIndex = [1,1]; 
/* Class the members of each slideshow group with different CSS classes */
/* let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
} 

*/
const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

function getPageWidth(){
  var w = window.innerWidth;
  var h = window.innerHeight; 

  console.debug("ahhhhhhh");

  reduce(w,h)

  if (numerator >= denominator){
    document.getElementsByClass("project-details").style.columnCount=1;
    

  }
  else{
    document.getElementsByClass("project-details").style.columnCount=2;

  }
  
}

function reduce(numerator, denominator) {
  var a = numerator;
  var b = denominator;
  var c;
  while (b) {
      c = a % b; a = b; b = c;
  }
  return [numerator / a, denominator / a];
}