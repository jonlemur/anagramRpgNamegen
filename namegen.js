function generateNames()
{
    var myWord = document.getElementById("theWordid").value;
    // an array of the words letters
    var larray = [];
    var nwarr = [];
    

    for (i = 0; i < myWord.length; i++) { 
    larray[i]=myWord.charAt(i);
    }    
    
 for (j = 0; j < 12; j++) { 

    // the new shuffled word
    var newWord = "";

    shuffle(larray);
   

   for (i = 0; i < larray.length; i++) { 
    newWord += larray[i];
   }
   
   nwarr[j] = newWord;
   
 }

 document.getElementById("p1").innerHTML = nwarr[0];
 document.getElementById("p2").innerHTML = nwarr[1];
 document.getElementById("p3").innerHTML = nwarr[2];
 document.getElementById("p4").innerHTML = nwarr[3];
 document.getElementById("p5").innerHTML = nwarr[4];
 document.getElementById("p6").innerHTML = nwarr[5];
 document.getElementById("p7").innerHTML = nwarr[6];
 document.getElementById("p8").innerHTML = nwarr[7];
 document.getElementById("p9").innerHTML = nwarr[8];
 document.getElementById("p10").innerHTML = nwarr[9];
 document.getElementById("p11").innerHTML = nwarr[10];
 document.getElementById("p12").innerHTML = nwarr[11];
}







function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}