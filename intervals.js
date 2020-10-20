  
function intervalConstruction(arr) {

    let intervalsNameArr = [,,,,"m2","M2",,,, "m3", "M3",,,,, "P4",,,,, "P5",,,, "m6", "M6",,,, "m7", "M7",,,,, "P8"];
    let resultNoteArr = ["Cbb", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "E##", "Fbb", "Fb", "F", "F#", "F##", "Gbb", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#", "B##", "Cbb", "Cb", "C", "C#", "C##", "Dbb", "Db", "D", "D#", "D##", "Ebb", "Eb", "E", "E#", "E##", "Fbb", "Fb", "F", "F#", "F##", "Gbb", "Gb", "G", "G#", "G##", "Abb", "Ab", "A", "A#", "A##", "Bbb", "Bb", "B", "B#", "B##"];
    
    //check for the input data lenght
    if (arr.length > 3 || arr.length < 2) {

    return ("Illegal number of elements in input array");
    
    //code for finding the note in ascending order
   } else if (arr[2] !== "dsc"){

   let indexNote = resultNoteArr.indexOf(arr[1]);
   let indexFinalNote = indexNote + intervalsNameArr.indexOf(arr[0]);
   let resultNote = resultNoteArr[indexFinalNote];

   if(arr[0] === "P8"){
     return arr[1];
   }
   if(arr[0] === "P4" && arr[1][0] === "F"){
     return resultNote = resultNoteArr[indexFinalNote - 1];
   }
   if(arr[0] === "P4"){
     return resultNote;
   }
   if(resultNote[0] === "F"){
     return resultNote = resultNoteArr[indexFinalNote + 1];
   }
   if(arr[0] === "P5"){
     return resultNote;
   }
   if(resultNote[0] === "C"){
     return resultNote = resultNoteArr[indexFinalNote + 1];
   }
   if(arr[0] === "m2" || arr[0] === "M2"){
     return resultNote;
   }
   if(resultNote[0] === "G"){
     return resultNote = resultNoteArr[indexFinalNote + 1];
   }
   if(arr[0] === "m6" || arr[0] === "M6"){
     return resultNote;
   }
   if(resultNote[0] === "D"){
     return resultNote = resultNoteArr[indexFinalNote + 1];
   }
   if(resultNote[0] === "A" && (arr[0] === "m7" || arr[0] === "M7")){
     return resultNote = resultNoteArr[indexFinalNote + 1];
   }
   console.log (resultNote);

  //code for finding the note in descending order
   }else if([arr[2] === "dsc"]){

    let newResultNoteArr = resultNoteArr.reverse();
    let indexNote = newResultNoteArr.indexOf(arr[1]);
    let indexFinalNote = indexNote + intervalsNameArr.indexOf(arr[0]);
    let resultNote = newResultNoteArr[indexFinalNote];

    if(arr[0] === "P8"){
     return arr[1];
  }
    if(arr[0] === "P5" && (arr[1] === "Fb" || arr[1] === "F" || arr[1] === "Fbb" || arr[1] === "F#" || arr[1] === "F##")) {
     return resultNote = newResultNoteArr[indexFinalNote + 1];
  }
     if(arr[0] === "P4" && (arr[1] === "Bb" || arr[1] === "B" || arr[1] === "Bbb" || arr[1] === "B#" || arr[1] === "B##")){
     return resultNote = newResultNoteArr[indexFinalNote - 1];
  }
     if((arr[0] === "m7" || arr[0] === "M7") && (arr[1] === "Ab" || arr[1] === "A" || arr[1] === "Abb" || arr[1] === "A#" || arr[1] === "A##")){
     return resultNote = newResultNoteArr[indexFinalNote + 1];
  }
     if((arr[0] === "m7" || arr[0] === "M7" || arr[0] === "M3" || arr[0] === "m3") && (arr[1] === "Fb" || arr[1] === "F" || arr[1] === "Fbb" || arr[1] === "F#" || arr[1] === "F##")) {
     return resultNote = newResultNoteArr[indexFinalNote + 1];
  }
     if(arr[0] === "P4" || arr[0] === "P5"){
     return resultNote;
  }
     if(resultNote[0] === "B" || resultNote[0] === "E"){
     return resultNote = newResultNoteArr[indexFinalNote + 1];
  }
      if(arr[0] === "m2" || arr[0] === "M2"){
      return resultNote;
  }
      if(resultNote[0] === "A"){
      return resultNote = newResultNoteArr[indexFinalNote + 1];
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

    //code for finding the note in ascending order
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

    console.log (resultInterval);
    
    //code for finding the note in ascending order
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
