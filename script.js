var images = ["https://image.shutterstock.com/image-vector/young-cheerful-woman-long-hair-260nw-1354276241.jpg", "https://i.pinimg.com/originals/f8/2f/ba/f82fbac7514f944aacc0257445c1f89e.jpg", "https://image.shutterstock.com/image-vector/cute-carrtoon-girl-shouws-pensiveillustrationvector-260nw-1907043577.jpg", "https://thumbs.dreamstime.com/b/cute-girl-cartoon-character-vector-illustration-eps-isolated-white-background-flat-cartoon-style-86722097.jpg"];
var names = ["Mom", "Dad", "Sister", "Me"];
var i = 0;

function update()

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0 
  } 