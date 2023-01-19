function openNav () {
    document.getElementById("miMenu").style.width = "250px";
    document.getElementById("imagen").style.display = "block";
    document.getElementById("cerrar").style.display="initial";
}
function closeNav () {
    document.getElementById("miMenu").style.width = "40px";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("cerrar").style.display="none";
}



// the modal 

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("imagen");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeimg")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
  }

