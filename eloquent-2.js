2.1 
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

2.2 
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz"; 
    else if (n % 5 == 0)
      output += "Buzz";
     console.log(output || n);
   }  

2.3
var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
	for (var x = 0; x < size; x++) {
      if ((x + y) % 2) == 0)
      board += " ";
     else
       board += "#";
    }
  board += "/n"; 
}
console.log(board);