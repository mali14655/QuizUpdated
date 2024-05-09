// function to get details of student 
function formdata() {
  let form = document.forms["details"];
  let formdetails = new FormData(form);
  return formdetails;
}
// Correct answers in object
AnswerGeneral= {
  mcq1: "Founder",
  mcq2: "Pakistani",
  mcq3: "14th August",
  mcq4: "Islamabad",
  mcq5: "Paris",
};

EnglishAnswer= {
  mcq6: "Ate",
  mcq7: "He",
  mcq8: "Believe",
  mcq9: "With",
  mcq10: "Apple",
};

HtmlAnswer={
  mcq11: "Hypertext Markup Language",
  mcq12: "<a>",
  mcq13: "<p>",
  mcq14: "required",
  mcq15: "<ul>",
  
}

// storing the details in student object
document.querySelector("#Submit1").addEventListener("click", function () {
  event.preventDefault();
  student = {
    Name: formdata().get("name"),
    RollNO: formdata().get("rollno"),
    Batch: formdata().get("batch"),
    Section: formdata().get("section"),
  };
  
  // to delete values from inputs after click
  document.querySelector("#Rollno").value = "";
  document.querySelector("#Name").value = "";
  // document.querySelector("#Batch").value = "";  
  document.querySelector("#Section").value = "";
  
  document.querySelector(".details").style.display = "none";
  document.querySelector(".quiz1").style.display = "block";
});





// getting second form(mcqs) data
function form2data() {
  let form2 = document.forms["quizform"];
  let form2details = new FormData(form2);
  return form2details;
}

// For English
function form3data() {
  let form3 = document.forms["quizform1"];
  let form3details = new FormData(form3);
  return form3details;
}
function form4data() {
  let form4 = document.forms["quizform2"];
  let form4details = new FormData(form4);
  return form4details;
}





//  storing the ans in object selected by candidate
document.querySelector('#Submit3').addEventListener('click',function(){
  event.preventDefault();
  Englishanswer={
    mcq6: form3data().get("mcq6"),
    mcq7: form3data().get("mcq7"),
    mcq8: form3data().get("mcq8"),
    mcq9: form3data().get("mcq9"),
    mcq10: form3data().get("mcq10"),
    
  }
  document.querySelector("#mcq21").checked = false;
  document.querySelector("#mcq22").checked = false;
  document.querySelector("#mcq23").checked = false;
  document.querySelector("#mcq24").checked = false;
  document.querySelector("#mcq25").checked = false;
  document.querySelector("#mcq26").checked = false;
  document.querySelector("#mcq27").checked = false;
  document.querySelector("#mcq28").checked = false;
  document.querySelector("#mcq29").checked = false;
  document.querySelector("#mcq30").checked = false;
  document.querySelector("#mcq31").checked = false;
  document.querySelector("#mcq32").checked = false;
  document.querySelector("#mcq33").checked = false;
  document.querySelector("#mcq34").checked = false;
  document.querySelector("#mcq35").checked = false;
  document.querySelector("#mcq36").checked = false;
  document.querySelector("#mcq37").checked = false;
  document.querySelector("#mcq38").checked = false;
  document.querySelector("#mcq39").checked = false;
  document.querySelector("#mcq40").checked = false;
  document.querySelector(".quiz1").style.display = "none";
  document.querySelector(".quiz").style.display = "block";
})





//  storing the ans in object selected by candidate
document.querySelector("#Submit2").addEventListener("click", function () {
  event.preventDefault();
  
  QuizForm = {
    // Topic: form2data().get("Topic"),
    
    mcq1: form2data().get("mcq1"),
    mcq2: form2data().get("mcq2"),
    mcq3: form2data().get("mcq3"),
    mcq4: form2data().get("mcq4"),
    mcq5: form2data().get("mcq5"),
  };
  document.querySelector('#mcq1').checked = false;
  document.querySelector("#mcq2").checked = false;
  document.querySelector("#mcq3").checked = false;
  document.querySelector("#mcq4").checked = false;
  document.querySelector("#mcq5").checked = false;
  document.querySelector('#mcq6').checked = false;
  document.querySelector("#mcq7").checked = false;
  document.querySelector("#mcq8").checked = false;
  document.querySelector("#mcq9").checked = false;
  document.querySelector("#mcq10").checked = false;
  document.querySelector('#mcq11').checked = false;
  document.querySelector("#mcq12").checked = false;
  document.querySelector("#mcq13").checked = false;
  document.querySelector("#mcq14").checked = false;
  document.querySelector("#mcq15").checked = false;
  document.querySelector('#mcq16').checked = false;
  document.querySelector("#mcq17").checked = false;
  document.querySelector("#mcq18").checked = false;
  document.querySelector("#mcq19").checked = false;
  document.querySelector("#mcq20").checked = false;
  document.querySelector(".quiz").style.display = "none";
  
  document.querySelector(".quiz5").style.display = "block";
  
});


document.querySelector('#Submit4').addEventListener('click',function(){
  event.preventDefault();
  
  Htmlanswer = {
    // Topic: form2data().get("Topic"),
    
    mcq11: form4data().get("mcq11"),
    mcq12: form4data().get("mcq12"),
    mcq13: form4data().get("mcq13"),
    mcq14: form4data().get("mcq14"),
    mcq15: form4data().get("mcq15"),
  };
  document.querySelector('#mcq41').checked = false;
  document.querySelector("#mcq42").checked = false;
  document.querySelector("#mcq43").checked = false;
  document.querySelector("#mcq44").checked = false;
  document.querySelector("#mcq45").checked = false;
  document.querySelector('#mcq46').checked = false;
  document.querySelector("#mcq47").checked = false;
  document.querySelector("#mcq48").checked = false;
  document.querySelector("#mcq49").checked = false;
  document.querySelector("#mcq50").checked = false;
  document.querySelector('#mcq51').checked = false;
  document.querySelector("#mcq52").checked = false;
  document.querySelector("#mcq53").checked = false;
  document.querySelector("#mcq54").checked = false;
  document.querySelector("#mcq55").checked = false;
  document.querySelector('#mcq56').checked = false;
  document.querySelector("#mcq57").checked = false;
  document.querySelector("#mcq58").checked = false;
  document.querySelector("#mcq59").checked = false;
  document.querySelector("#mcq60").checked = false;
  
  
  
  
  
  // calculating marks
  let marks1 = 0;
  if (QuizForm.mcq1 == AnswerGeneral.mcq1) {
    marks1++;
  }
  if (QuizForm.mcq2 == AnswerGeneral.mcq2) {
    marks1++;
  }
  if (QuizForm.mcq3 == AnswerGeneral.mcq3) {
    marks1++;
  }
  if (QuizForm.mcq4 == AnswerGeneral.mcq4) {
    marks1++;
  }
  if (QuizForm.mcq5 == AnswerGeneral.mcq5) {
    marks1++;
  }
  
  let marks2=0;
  if(EnglishAnswer.mcq6==Englishanswer.mcq6){
    marks2++
  }
  if(EnglishAnswer.mcq7==Englishanswer.mcq7){
    marks2++
  }
  if(EnglishAnswer.mcq8==Englishanswer.mcq8){
    marks2++
  }
  if(EnglishAnswer.mcq9==Englishanswer.mcq9){
    marks2++
  }
  if(EnglishAnswer.mcq10==Englishanswer.mcq10){
    marks2++
  }
  
  let marks3=0;
  if(HtmlAnswer.mcq11==Htmlanswer.mcq11){
    marks3++;
  }
  if(HtmlAnswer.mcq12==Htmlanswer.mcq12){
    marks3++;
  }
  if(HtmlAnswer.mcq13==Htmlanswer.mcq13){
    marks3++;
  }
  if(HtmlAnswer.mcq14==Htmlanswer.mcq14){
    marks3++;
  }
  if(HtmlAnswer.mcq15==Htmlanswer.mcq15){
    marks3++;
  }
  
  // console.log(marks3)
  
  
  let marks=Math.trunc(((marks1+marks2+marks3)/15)*100);
  document.querySelector('.marks').innerHTML=marks;
  
  var descrp;
  var comment;
  if(marks>=50 && marks<=65){
    descrp="You need to improve yourself a bit";
    comment='Not Bad'
    
  }
  if(marks>65 && marks<=80){
    descrp="You are doing great but try to improve more";
    comment='Good Job'
    
  }
  if(marks>80 && marks<=100){
    descrp="You did it man!Sky is your limit keep going ";
    comment='Excellent'
    
  }
  if(marks<50){
    descrp="You need to work hard";
    comment='Fail'
    
  }

  let pic=formdata().get('pic')
  let picsrc=URL.createObjectURL(pic);
  document.querySelector('.stpic').innerHTML=`<img src="${picsrc}" alt="" class="img"></img>`;
  document.querySelector('#pic').value="";
  
  document.querySelector('.comment').innerHTML=comment;
  document.querySelector('.descrp').innerHTML=descrp;
  document.querySelector(".quiz5").style.display = "none";
  document.querySelector(".resultcard").style.display = "block";
  
  
  // Putting correct answers in the result card
  // document.querySelector(".cone").innerHTML = AnswerGeneral.mcq1;
  // document.querySelector(".ctwo").innerHTML = AnswerGeneral.mcq2;
  // document.querySelector(".cthree").innerHTML = AnswerGeneral.mcq3;
  // document.querySelector(".cfour").innerHTML = AnswerGeneral.mcq4;
  // document.querySelector(".cfive").innerHTML = AnswerGeneral.mcq5;
  
  // // putting selected answers in the result card
  // document.querySelector(".yone").innerHTML = QuizForm.mcq1;
  // document.querySelector(".ytwo").innerHTML = QuizForm.mcq2;
  // document.querySelector(".ythree").innerHTML = QuizForm.mcq3;
  // document.querySelector(".yfour").innerHTML = QuizForm.mcq4;
  // document.querySelector(".yfive").innerHTML = QuizForm.mcq5;
  
  //putting the details of student in the result card
  document.querySelector(".name").innerHTML = student.Name;
  document.querySelector('.rollno').innerHTML=student.RollNO;
  // document.querySelector(".batch").innerHTML = student.Batch;
  document.querySelector(".marks1").innerHTML = marks1;
  document.querySelector(".marks2").innerHTML = marks2;
  document.querySelector(".marks3").innerHTML = marks3;
  // document.querySelector(".heading1").innerHTML = QuizForm.Heading;
  // document.querySelector(".topic1").innerHTML = QuizForm.Topic;

  // to delete values from inputs after click
  // document.querySelector("#topic").value = "";
  
  
  // document.querySelector('.resultcard').style.display='block'
})





// document.querySelector(".okay").addEventListener("click",myfun) 
document.querySelector(".okay2").addEventListener("click",myfun)





function myfun () {
  document.querySelector(".details").style.display = "block";
  // document.querySelector(".result").style.display = "none";
  document.querySelector(".quiz").style.display = "none";
  document.querySelector('.resultcard').style.display='none'


  marks=0;
  marks1=0;
  marks2=0;
  marks3=0;

  
  // document.querySelector("#mcq6").value = "";
  // document.querySelector("#mcq7").value = "";
  // document.querySelector("#mcq8").value = "";
  // document.querySelector("#mcq9").value = "";
  // document.querySelector("#mcq10").value = "";
  
  // document.querySelector("#mcq11").value = "";
  // document.querySelector("#mcq12").value = "";
  // document.querySelector("#mcq13").value = "";
  // document.querySelector("#mcq14").value = "";
  // document.querySelector("#mcq15").value = "";
}

// document.querySelector('.ans').addEventListener('click',function(){
//   document.querySelector('.resultcard').style.display='none'
//   document.querySelector(".result").style.display = "block";
  
// })