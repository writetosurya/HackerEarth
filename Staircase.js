function staircase(n) {
  var height = n;

  for (var i=0 ; i < height; i++) {
    var row= "";

    for (var j=0 ; j < height; j++) {
      if (i + j > height - 2 ) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}


staircase(6)
