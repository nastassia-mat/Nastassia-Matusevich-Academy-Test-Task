  
function intervalConstruction(arr) {

    let intervalsNameArr = [,,,,"m2","M2",,,, "m3", "M3",,,,"P4",,,,,"P5",,,,"m6","M6",,,,"m7","M7",,,,,,];
    let resultNoteArr = ["Cbb", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "E##", "Fb", "F", "F#", "F##", "Gbb", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#", "B##", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "Fbb", "Fb", "F", "F#", "F##", "Gbb", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#"];
   
    if (arr.length > 3 || arr.length < 2) {

    return ("Illegal number of elements in input array");
   
 //code for finding the note in ascending order
    }else if (arr[2] !== "dsc"){

   let indexNote = resultNoteArr.indexOf(arr[1]);
   let indexFinalNote = indexNote + intervalsNameArr.indexOf(arr[0]);
   let resultNote = resultNoteArr[indexFinalNote];

   if(arr[0] === "P8"){
     return arr[1];
   }
      return resultNote;

  //code for finding the note in descending order
   }else if([arr[2] === "dsc"]){

   let newResultNoteArr = resultNoteArr.reverse();
   let indexNote = newResultNoteArr.indexOf(arr[1]);
   let indexFinalNote = indexNote + intervalsNameArr.indexOf(arr[0]);
   let resultNote = newResultNoteArr[indexFinalNote];

   if(arr[0] === "P8"){
     return arr[1];
  }
     return resultNote;
  }
  }


function intervalIdentification(arr) {

    let intervalsFinalNameArr = [,,,,"m2","M2",,,, "m3", "M3",,,,"P4",,,,,"P5",,,,"m6","M6",,,,"m7","M7",,,,,,];
    let resultNoteArr = ["Cbb", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "Fbb", "Fb", "F", "F#", "F##", "Gbb", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#", "Cbb", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "Fbb", "Fb", "F", "F#", "F##", "Gbb", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#"];

    //this array contains the names of the notes that were not included in the previous one (B## and E##)
    if((arr[0] === ("B##" || "E##")) || (arr[1] === ("B##" || "E##"))){
      resultNoteArr = ["B##", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "E##", "Fb", "F", "F#", "F##", "B##", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#", "Cbb", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "E##", "Fb", "F", "F#", "F##", "Gbb", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#"];
    }
    
    //check for the input data lenght
    if (arr.length > 3 || arr.length < 2) {

    return ("Cannot identify the interval");

    //code for finding the interval in ascending order
    }else if (arr[2] !== "dsc"){
    
    let indexInterval = resultNoteArr.indexOf(arr[1]) - resultNoteArr.indexOf(arr[0]);

    if(resultNoteArr.indexOf(arr[1]) < resultNoteArr.indexOf(arr[0])){
       indexInterval = 33 - (resultNoteArr.indexOf(arr[0]) - resultNoteArr.indexOf(arr[1]));
    }

    let resultInterval = intervalsFinalNameArr[indexInterval];

    if(arr[0] === arr[1]){
      return resultInterval = "P8";
    }
    if(resultInterval == undefined){
      return ("Cannot identify the interval");
    }

    return resultInterval;
    
    //code for finding the interval in descending order
    }else if([arr[2] === "dsc"]){

    let newResultNoteArr = resultNoteArr.reverse();
    let indexInterval = newResultNoteArr.indexOf(arr[1]) - newResultNoteArr.indexOf(arr[0]);
    if(newResultNoteArr.indexOf(arr[1]) < newResultNoteArr.indexOf(arr[0])){
       indexInterval = 33 - (newResultNoteArr.indexOf(arr[0]) - newResultNoteArr.indexOf(arr[1]));
    }
    let resultInterval = intervalsFinalNameArr[indexInterval];
    if(arr[0] === arr[1]){
      return resultInterval = "P8";
    }
    if(resultInterval == undefined){
      return ("Cannot identify the interval");
    }
    return resultInterval;
  }
}
