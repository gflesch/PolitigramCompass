setScreen("welcomeScreen");
var num = 0;
var ans1 = 0;
var ans2 = 0;
var ans3 = 0;
var ans4 = 0;
var ans5 = 0;
var ans6 = 0;
var ans7 = 0;
var ans8 = 0;
var ans9 = 0;
var ans10 = 0;
var ans11 = 0;
var ans12 = 0;
var ans13 = 0;
var ans14 = 0;
var ans15 = 0;
var ans16 = 0;
var ans17 = 0;
var ans18 = 0;
var ans19 = 0;
var ans20 = 0;
var ans21 = 0;
var ans22 = 0;
var ans23 = 0;
var ans24 = 0;
var ans25 = 0;
var ans26 = 0;
var ans27 = 0;
var ans28 = 0;
var ans29 = 0;
var ans30 = 0;
var ans31 = 0;
var ans32 = 0;
var ans33 = 0;
var ans34 = 0;
var ans35 = 0;
var ans36 = 0;
var ans37 = 0;
var ans38 = 0;
var ans39 = 0;
var ans40 = 0;
var ans41 = 0;
var ans42 = 0;
var ans43 = 0;
var ans44 = 0;
var ans45 = 0;
var ans46 = 0;
var ans47 = 0;
var ans48 = 0;
var xValue = 0;
var xPosition = 0;
var xCoord = 0;
var yValue = 0;
var yPosition = 0;
var yCoord = 0;
var zValue = 0;
var zPosition = 0;
var zCoord = 0;
function endTest(){
  calculatePlacement("x");
  calculatePlacement("y");
  calculatePlacement("z");
  plotResults();
}
function calculatePlacement(variable){
  if (variable === "x"){
  xValue = (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 - ans9 - ans10 - ans11 - ans12 - ans13 - ans14 - ans15 - ans16)/8;
  xPosition = xValue*16+155;
  xCoord = (xValue).toFixed(2);
  }
  if (variable === "y"){
  yValue = (ans17 + ans18 + ans19 + ans20 + ans21 + ans22 + ans23 + ans24 - ans25 - ans26 - ans27 - ans28 - ans29 - ans30 - ans31 - ans32)/8;
  yPosition = yValue*16+195;
  yCoord = (-(yValue)).toFixed(2);
  }
  if (variable === "z"){
  zValue = (ans33 + ans34 + ans35 + ans36 + ans37 + ans38 + ans39 + ans40 - ans41 - ans42 - ans43 - ans44 - ans45 - ans46 - ans47 - ans48)/8;
  zPosition = zValue*16+160;
  zCoord = (zValue).toFixed(2); 
  }
}
function plotResults(){
  write("Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setPosition("dot",xPosition,yPosition);
  setPosition("bar",zPosition,364);
}
function nextQuestion(){
  num = num + 1;
  var num1 = num - 1;
  var previousSlider = "slider" + num1;
  var previousQuest = "text_area" + num1;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
  if(num > 1){
  hideElement(previousSlider);
  hideElement(previousQuest);
  }
  console.log(currentSlider);
  showElement(currentSlider);
  console.log(currentQuest);
  showElement(currentQuest);
}
onEvent("button1","click",function(){
  setScreen("gameScreen");
  setStyle("numline", "z-index: -10");
  hide();
  penUp();
  moveTo(0,-3);
  penDown();
  penWidth(15);
  penColor("white");
  turnRight();
  nextQuestion();
});
onEvent("slider1","change",function(){
  moveForward(7);
  ans1 = getNumber("slider1");
  nextQuestion();
});
onEvent("slider2","change",function(){
  moveForward(7);
  ans2 = getNumber("slider2");
  nextQuestion();
});
onEvent("slider3","change",function(){
  moveForward(7);
  ans3 = getNumber("slider3");
  nextQuestion();
});
onEvent("slider4","change",function(){
  moveForward(7);
  ans4 = getNumber("slider4");
  nextQuestion();
});
onEvent("slider5","change",function(){
  moveForward(7);
  ans5 = getNumber("slider5");
  nextQuestion();
});
onEvent("slider6","change",function(){
  moveForward(7);
  ans6 = getNumber("slider6");
  nextQuestion();
});
onEvent("slider7","change",function(){
  moveForward(7);
  ans7 = getNumber("slider7");
  nextQuestion();
});
onEvent("slider8","change",function(){
  moveForward(7);
  ans8 = getNumber("slider8");
  nextQuestion();
});
onEvent("slider9","change",function(){
  moveForward(7);
  ans9 = getNumber("slider9");
  nextQuestion();
});
onEvent("slider10","change",function(){
  moveForward(7);
  ans10 = getNumber("slider10");
  nextQuestion();
});
onEvent("slider11","change",function(){
  moveForward(7);
  ans11 = getNumber("slider11");
  nextQuestion();
});
onEvent("slider12","change",function(){
  moveForward(7);
  ans12 = getNumber("slider12");
  nextQuestion();
});
onEvent("slider13","change",function(){
  moveForward(7);
  ans13 = getNumber("slider13");
  nextQuestion();
});
onEvent("slider14","change",function(){
  moveForward(7);
  ans14 = getNumber("slider14");
  nextQuestion();
});
onEvent("slider15","change",function(){
  moveForward(7);
  ans15 = getNumber("slider15");
  nextQuestion();
});
onEvent("slider16","change",function(){
  moveForward(7);
  ans16 = getNumber("slider16");
  nextQuestion();
});
onEvent("slider17","change",function(){
  moveForward(7);
  ans17 = getNumber("slider17");
  nextQuestion();
});
onEvent("slider18","change",function(){
  moveForward(7);
  ans18 = getNumber("slider18");
  nextQuestion();
});
onEvent("slider19","change",function(){
  moveForward(7);
  ans19 = getNumber("slider19");
  nextQuestion();
});
onEvent("slider20","change",function(){
  moveForward(7);
  ans20 = getNumber("slider20");
  nextQuestion();
});
onEvent("slider21","change",function(){
  moveForward(7);
  ans21 = getNumber("slider21");
  nextQuestion();
});
onEvent("slider22","change",function(){
  moveForward(7);
  ans22 = getNumber("slider22");
  nextQuestion();
});
onEvent("slider23","change",function(){
  moveForward(7);
  ans23 = getNumber("slider23");
  nextQuestion();
});
onEvent("slider24","change",function(){
  moveForward(7);
  ans24 = getNumber("slider24");
  nextQuestion();
});
onEvent("slider25","change",function(){
  moveForward(7);
  ans25 = getNumber("slider25");
  nextQuestion();
});
onEvent("slider26","change",function(){
  moveForward(7);
  ans26 = getNumber("slider26");
  nextQuestion();
});
onEvent("slider27","change",function(){
  moveForward(7);
  ans27 = getNumber("slider27");
  nextQuestion();
});
onEvent("slider28","change",function(){
  moveForward(7);
  ans28 = getNumber("slider28");
  nextQuestion();
});
onEvent("slider29","change",function(){
  moveForward(7);
  ans29 = getNumber("slider29");
  nextQuestion();
});
onEvent("slider30","change",function(){
  moveForward(7);
  ans30 = getNumber("slider30");
  nextQuestion();
});
onEvent("slider31","change",function(){
  moveForward(7);
  ans31 = getNumber("slider31");
  nextQuestion();
});
onEvent("slider32","change",function(){
  moveForward(7);
  ans32 = getNumber("slider32");
  nextQuestion();
});
onEvent("slider33","change",function(){
  moveForward(7);
  ans33 = getNumber("slider33");
  nextQuestion();
});
onEvent("slider34","change",function(){
  moveForward(7);
  ans34 = getNumber("slider34");
  nextQuestion();
});
onEvent("slider35","change",function(){
  moveForward(7);
  ans35 = getNumber("slider35");
  nextQuestion();
});
onEvent("slider36","change",function(){
  moveForward(7);
  ans36 = getNumber("slider36");
  nextQuestion();
});
onEvent("slider37","change",function(){
  moveForward(7);
  ans37 = getNumber("slider37");
  nextQuestion();
});
onEvent("slider38","change",function(){
  moveForward(7);
  ans38 = getNumber("slider38");
  nextQuestion();
});
onEvent("slider39","change",function(){
  moveForward(7);
  ans39 = getNumber("slider39");
  nextQuestion();
});
onEvent("slider40","change",function(){
  moveForward(7);
  ans40 = getNumber("slider40");
  nextQuestion();
});
onEvent("slider41","change",function(){
  moveForward(7);
  ans41 = getNumber("slider41");
  nextQuestion();
});
onEvent("slider42","change",function(){
  moveForward(7);
  ans42 = getNumber("slider42");
  nextQuestion();
});
onEvent("slider43","change",function(){
  moveForward(7);
  ans43 = getNumber("slider43");
  nextQuestion();
});
onEvent("slider44","change",function(){
  moveForward(7);
  ans44 = getNumber("slider44");
  nextQuestion();
});
onEvent("slider45","change",function(){
  moveForward(7);
  ans45 = getNumber("slider45");
  nextQuestion();
});
onEvent("slider46","change",function(){
  moveForward(7);
  ans46 = getNumber("slider46");
  nextQuestion();
});
onEvent("slider47","change",function(){
  moveForward(7);
  ans47 = getNumber("slider47");
  nextQuestion();
});
onEvent("slider48","change",function(){
  moveForward(7);
  ans48 = getNumber("slider48");
  hideElement("slider48");
  showElement("button2");
});
onEvent("button3", "click", function(){
  setScreen("creditsScreen");
});
onEvent("button2","click",function(){
  setScreen("testResults");
  setStyle("dot", "z-index: 10");
  hide();
  endTest();
});
onEvent("radio_button1","click",function(){
  showElement("symbols");
  hideElement("images");
  hideElement("labels");
  hideElement("donttread");
  hideElement("parties");
});
onEvent("radio_button2","click",function(){
  showElement("images");
  hideElement("symbols");
  hideElement("labels");
  hideElement("donttread");
  hideElement("parties");
});
onEvent("radio_button4","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("donttread");
  showElement("labels");
  hideElement("parties");
});
onEvent("radio_button5","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  hideElement("donttread");
  showElement("parties");
});
onEvent("radio_button3","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  hideElement("parties");
  showElement("donttread");
});