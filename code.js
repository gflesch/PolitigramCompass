setScreen("welcomeScreen");
for(var n = 0; n < 73; n++){
  var username = getProperty("pfp" + n,"image");
  console.log(n + " " + username.substring(0,username.length-4));
}

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
var ans49 = 0;
var ans50 = 0;
var ans51 = 0;
var ans52 = 0;
var ans53 = 0;
var ans54 = 0;
var ans55 = 0;
var ans56 = 0;
var ans57 = 0;
var ans58 = 0;
var ans59 = 0;
var ans60 = 0;
var ans61 = 0;
var ans62 = 0;
var ans63 = 0;
var ans64 = 0;
var xValue = 0;
var xPosition = 0;
var xCoord = 0;
var yValue = 0;
var yPosition = 0;
var yCoord = 0;
var zValue = 0;
var zPosition = 0;
var zCoord = 0;
var distance;
var distances = [];
var maxDistance;
var maxIndex;
var sortedDistances = [];
var usernames = ["teen.politics.official","charlemagnes_corner","rightwingism","leftistbaby","progressive.politico","feldsteinphilosophy","southern_leftist","tread.not","teen.politics.official","social_liberals","max_stirner_fanpage","makeliberalismclassicalagain","deafpatriot","angryamericans","libertylover2","refoundingfather","ancomcatz","broken.bones.and.civilizations","kiwimutualist","anpacball","individualist.libertarian","virginiaforbiden","right_wing_imperial","anarchistunity","texansocialdem","liberallibertarian","visionary.arabia","social.dem.official","palmetto_state_bluedog","newlibertymovement","lippie.liberty","massachusite","lib_confederalism","soc.leftist","2038_movement","american.edgelord.v2","american_leoism","soc.leftist","anarcho.garfieldism","anarchy.is.liberty","ancap_or_death","ancap_society","the.eco.socialist","biblicalamericanpolitics","campus_conservative_","cristero.mexico","cuban.progressive","demsocialistcolony","identityeurope","libertarian.unity","libertiansocialist.sf","major_tomrade","marxist_luxemburgist","mexicanlibertarian","mister.american","neoreactionism","not_a_domestic_terrorist","refoundingfather","sonofgotaland","the.geopolitical.forecaster","thechicanoancomsynista","toronto_socialist","trotskium","wokerevolution","realisticleftist","leftistcommentary","mass_liberty","american_nationalist.party","new.libertarianism","missourian_ancaps","art.n.politics","the.driptator","soviet.chronicles_"];
var sortedUsernames = [];
var pfpXCoord = 0;
var pfpYCoord = 0;
var pfpZCoord = 0;
var xCoords = [1.5,0.5,1.1,-10,-2.88,2.5,-3.88,8.88,-4,-2.88,-9,6.25,6.4,7.5,8.6,9,-10,-9,-4.13,-0.2,-0.25,-0.38,-0.13,4,-4.58,1.88,8.13,-3,3,10,-3.75,-4.63,-2.9,-10,-1.58,2.25,1.17,-10,-4.33,7.8,9,5.17,-9.67,0.67,4.83,-2.17,-3.17,-6.17,3,-4.5,-9,-9.75,-9.83,6.5,5.33,10,5.42,7.33,-0.08,-2.92,-10,-9,-10,-2.92,-5.75,-9,5,6,5.2,6.75,-9,1.5,-7];
//             0   1   2    3   4    5    6    7     8  9    10 11   12  13  14  15 16 17 18     19   20    21    22  23 24    25   26   27 28 29 30  31     32   33
var yCoords = [-8.38,7.6,7.0,0,-0.63,1.13,-1.38,-2.50,-3.2,-5.13,-7.75,-7.13,-7.2,-8.13,-8.13,-7.0,10,-8.38,-8.6,-9.1,-10,2,4.13,-9,-2,-7.75,7.88,-3,-1.25,-10,-8.7,3.5,-7,4,-3.5,-9.8,1.8,4,-8.4,-10,-10,-7.7,-7.9,-2.8,-3.4,5.3,-1.6,-1.1,5.4,-8,-8.2,-8.2,-1,-9.3,-7.25,6.2,-6.2,-1,5.2,-3.5,-10,-4,-1.88,-1.5,-3.6,-5.88,-7,-0.88,-10,-10,-2,-6,4];
//             0     1   2   3  4    5     6     7     8    9     10    11    13   14   14     15  16  17   18    19   20 21 22  23  24 25   26    27  28   29 30   31  32 33
var zCoords = [-9,9.5,9,-10,-8,0.25,-3.63,4.5,-8,-8,-10,4,-4.63,-6,4,5.5,-10,-10,-9,-9,0,-5.25,8.5,0,-8,-7,7.63,-5,-0.38,-6,-9,0.13,-7.1,-9.63,-5.8,-0.1,3.6,-9.63,-6.2,0,0,-1.9,-9.3,2.4,3.2,5.9,-3.9,-7.6,5.7,-3,-9,-9.2,-9.5,3.1,1.9,7.4,-3.8,5,7.6,-0.6,-5,-9.6,-2.5,-7.4,-4.5,-10,4,4,0,-6.5,-10,-2,0];
//              0 1   2  3   4  5  6    7    8  9  10 11 12   13   15  16  17  18 19 20 21    22  23 24 25 26  27  28   29 30 
//                                                              14                                                           31   32     33     34  35    36  37    38  3940 41   42  43  44  45  46    47  48  49  50 51  52   53  54  55  56  57   58 59  60  61 62   63    64   65  66  676869 70   71 72
var canXCoords = [1.8,-0.6,-4,2,2,1.3,0.9,-2.2,-0.1,0.8,-1.1,3.4];
var canYCoords = [1.1,-0.5,-2.6,3.5,2.2,2.7,-0.3,0.7,1.5,1,3.7];
var canZCoords = [-1.5,-4,-8,0.25,-3,-3,-7.6,-2,-3,-6.9,7];
var canNames = ["Amy Klobuchar","Tulsi Gabbard","Mike Gravel","Joe Biden","Cory Brooker","Kamala Harris","Bernie Sanders","Andrew Yang","Pete Butigieg","Elizabeth Warren","Donald Trump"];                            
var sortedCanNames = [];
var canDistances = [];
var sortedCanDistances = [];
var candidateXCoord = 0;
var candidateYCoord = 0;
var candidateZCoord = 0;
var canDistance;
var maxCanDistance;
var maxCanIndex;
var count = -1;
function calculatePfpDistances(){
  for (var i = 0; i < 65; i++) {
    pfpXCoord =xCoords[i];
    pfpYCoord =yCoords[i];
    pfpZCoord =zCoords[i];
    distance =Math.pow((Math.pow((xCoord-pfpXCoord),2)+Math.pow((yCoord-pfpYCoord),2) + Math.pow((zCoord-zCoords[i]),2)),0.5);
    appendItem(distances,distance);
  }
  for (var k = 0; k < 65; k++) {
    console.log(distances);
    maxDistance = distances[0];
    for (var j = 1; j < distances.length; j++) {
      if(maxDistance < distances[j]){
        maxDistance = distances[j];
        maxIndex = j;
      }
    }
    if(maxDistance == distances[0]){
      maxIndex = 0;
    }
    console.log("maxIndex: " + maxIndex);
    insertItem(sortedDistances,0,maxDistance);
    insertItem(sortedUsernames,0,usernames[maxIndex]);
    removeItem(distances,maxIndex);
    removeItem(usernames,maxIndex);
  }
}
function displayPfpMatches(){
  for (var l = 0; l < 10; l++) {
   setText("percent" + l,Math.round(100-(2.88675134595*sortedDistances[l])) + "%");
   setText("username" + l,sortedUsernames[l]);
   setProperty("percent" + l,"text-color",rgb(sortedDistances[l]*10,(1/sortedDistances[l])*255,0));
   /* showElement("lpfp"+l);
   setPosition("lpfp"+l,160,50+(l*40)); */
   console.log(sortedDistances);
   console.log(sortedUsernames);
  }
}
function calculateCandidateDistances(){
  for (var i = 0; i < 11; i++) {
    candidateXCoord = canXCoords[i];
    candidateYCoord = canYCoords[i];
    candidateZCoord = canZCoords[i];
    canDistance = Math.pow((Math.pow((xCoord-candidateXCoord),2)+Math.pow((yCoord-candidateYCoord),2) + Math.pow((zCoord-candidateZCoord),2)),0.5);
    appendItem(canDistances,canDistance);
  }
  for (var k = 0; k < 11; k++) {
    maxCanDistance = canDistances[0];
    for (var j = 1; j < canDistances.length; j++) {
      if(maxCanDistance < canDistances[j]){
        maxCanDistance = canDistances[j];
        maxCanIndex = j;
      }
    }
    if(maxCanDistance == canDistances[0]){
      maxCanIndex = 0;
    }
    console.log("maxCanIndex: " + maxCanIndex);
    insertItem(sortedCanDistances,0,maxCanDistance);
    insertItem(sortedCanNames,0,canNames[maxCanIndex]);
    removeItem(canDistances,maxCanIndex);
    removeItem(canNames,maxCanIndex);
  }
}
function displayCandidateMatches(){
  for (var l = 0; l < 10; l++) {
   setText("percent" + l,Math.round(100-(2.88675134595*sortedCanDistances[l])) + "%");
   setText("username" + l,sortedCanNames[l]);
   setProperty("percent" + l,"text-color",rgb(sortedCanDistances[l]*10,(1/sortedCanDistances[l])*255,0));
   /* showElement("lpfp"+l);
   setPosition("lpfp"+l,160,50+(l*40)); */
  }
}
function endTest(){
  calculatePlacement("x");
  calculatePlacement("y");
  calculatePlacement("z");
  plotResults();
}
function calculatePlacement(variable){
  if (variable === "x"){
  xValue = (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 + ans9 + ans10 + ans11 + ans12 - ans13 - ans14 - ans15 - ans16 - ans17 - ans18 - ans19 - ans20 - ans21 - ans22 - ans23 - ans24)/12;
  xPosition = xValue*16+155;
  xCoord = (xValue).toFixed(2);
  }
  if (variable === "y"){
  yValue = (ans25 + ans26 + ans27 + ans28 + ans29 + ans30 + ans31 + ans32 + ans33 + ans34 - ans35 - ans36 - ans37 - ans38 - ans39 - ans40 - ans41 - ans42 - ans43 - ans44)/10;
  yPosition = yValue*16+195;
  yCoord = (-(yValue)).toFixed(2);
  }
  if (variable === "z"){
  zValue = (ans45 + ans46 + ans47 + ans48 + ans49 + ans50 + ans51 + ans52 + ans53 + ans54 - ans55 - ans56 - ans57 - ans58 - ans59 - ans60 - ans61 - ans62 - ans63 - ans64)/10;
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
function previousQuestion(){
  if(num > 1){
  num = num - 1;
  var num2 = num + 1;
  var previousSlider = "slider" + num2;
  var previousQuest = "text_area" + num2;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
    hideElement(previousSlider);
    hideElement(previousQuest);
    console.log(currentSlider);
    showElement(currentSlider);
    console.log(currentQuest);
    showElement(currentQuest);
  }
}
function hidePfps(){
  for (var z = 0; z < zCoords.length; z++) {
    hideElement("pfp"+z);
  }
}
function showPfps(){
  for (var q = 0; q < zCoords.length; q++) {
    showElement("pfp"+q);
  }
}

onEvent("button1","click",function(){
  setScreen("gameScreen");
  setStyle("numline", "z-index: -10");
  showElement("button6");
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
  moveForward(5);
  ans1 = getNumber("slider1");
  nextQuestion();

  
});
onEvent("slider2","change",function(){
  moveForward(5);
  ans2 = getNumber("slider2");
  nextQuestion();
  
});
onEvent("slider3","change",function(){
  moveForward(5);
  ans3 = getNumber("slider3");
  nextQuestion();
  
});
onEvent("slider4","change",function(){
  moveForward(5);
  ans4 = getNumber("slider4");
  nextQuestion();
  });
onEvent("slider5","change",function(){
  moveForward(5);
  ans5 = getNumber("slider5");
  nextQuestion();
  });
onEvent("slider6","change",function(){
  moveForward(5);
  ans6 = getNumber("slider6");
  nextQuestion();
  });
onEvent("slider7","change",function(){
  moveForward(5);
  ans7 = getNumber("slider7");
  nextQuestion();
  });
onEvent("slider8","change",function(){
  moveForward(5);
  ans8 = getNumber("slider8");
  nextQuestion();
  });
onEvent("slider9","change",function(){
  moveForward(5);
  ans9 = getNumber("slider9");
  nextQuestion();
  
});
onEvent("slider10","change",function(){
  moveForward(5);
  ans10 = getNumber("slider10");
  nextQuestion();
  
});
onEvent("slider11","change",function(){
  moveForward(5);
  ans11 = getNumber("slider11");
  nextQuestion();
  
});
onEvent("slider12","change",function(){
  moveForward(5);
  ans12 = getNumber("slider12");
  nextQuestion();
  
});
onEvent("slider13","change",function(){
  moveForward(5);
  ans13 = getNumber("slider13");
  nextQuestion();
  
});
onEvent("slider14","change",function(){
  moveForward(5);
  ans14 = getNumber("slider14");
  nextQuestion();
  
});
onEvent("slider15","change",function(){
  moveForward(5);
  ans15 = getNumber("slider15");
  nextQuestion();
  });
onEvent("slider16","change",function(){
  moveForward(5);
  ans16 = getNumber("slider16");
  nextQuestion();
  
});
onEvent("slider17","change",function(){
  moveForward(5);
  ans17 = getNumber("slider17");
  nextQuestion();
  
});
onEvent("slider18","change",function(){
  moveForward(5);
  ans18 = getNumber("slider18");
  nextQuestion();
  
});
onEvent("slider19","change",function(){
  moveForward(5);
  ans19 = getNumber("slider19");
  nextQuestion();
  
});
onEvent("slider20","change",function(){
  moveForward(5);
  ans20 = getNumber("slider20");
  nextQuestion();
  
});
onEvent("slider21","change",function(){
  moveForward(5);
  ans21 = getNumber("slider21");
  nextQuestion();
  
});
onEvent("slider22","change",function(){
  moveForward(5);
  ans22 = getNumber("slider22");
  nextQuestion();
  
});
onEvent("slider23","change",function(){
  moveForward(5);
  ans23 = getNumber("slider23");
  nextQuestion();
  
});
onEvent("slider24","change",function(){
  moveForward(5);
  ans24 = getNumber("slider24");
  nextQuestion();
  
});
onEvent("slider25","change",function(){
  moveForward(5);
  ans25 = getNumber("slider25");
  nextQuestion();
  
});
onEvent("slider26","change",function(){
  moveForward(5);
  ans26 = getNumber("slider26");
  nextQuestion();
  
});
onEvent("slider27","change",function(){
  moveForward(5);
  ans27 = getNumber("slider27");
  nextQuestion();
  
});
onEvent("slider28","change",function(){
  moveForward(5);
  ans28 = getNumber("slider28");
  nextQuestion();
  
});
onEvent("slider29","change",function(){
  moveForward(5);
  ans29 = getNumber("slider29");
  nextQuestion();
  
});
onEvent("slider30","change",function(){
  moveForward(5);
  ans30 = getNumber("slider30");
  nextQuestion();
  
});
onEvent("slider31","change",function(){
  moveForward(5);
  ans31 = getNumber("slider31");
  nextQuestion();
  
});
onEvent("slider32","change",function(){
  moveForward(5);
  ans32 = getNumber("slider32");
  nextQuestion();
  
});
onEvent("slider33","change",function(){
  moveForward(5);
  ans33 = getNumber("slider33");
  nextQuestion();
  
});
onEvent("slider34","change",function(){
  moveForward(5);
  ans34 = getNumber("slider34");
  nextQuestion();
  
});
onEvent("slider35","change",function(){
  moveForward(5);
  ans35 = getNumber("slider35");
  nextQuestion();
  
});
onEvent("slider36","change",function(){
  moveForward(5);
  ans36 = getNumber("slider36");
  nextQuestion();
  
});
onEvent("slider37","change",function(){
  moveForward(5);
  ans37 = getNumber("slider37");
  nextQuestion();
  
});
onEvent("slider38","change",function(){
  moveForward(5);
  ans38 = getNumber("slider38");
  nextQuestion();
  
});
onEvent("slider39","change",function(){
  moveForward(5);
  ans39 = getNumber("slider39");
  nextQuestion();
  
});
onEvent("slider40","change",function(){
  moveForward(5);
  ans40 = getNumber("slider40");
  nextQuestion();
  
});
onEvent("slider41","change",function(){
  moveForward(5);
  ans41 = getNumber("slider41");
  nextQuestion();
  
});
onEvent("slider42","change",function(){
  moveForward(5);
  ans42 = getNumber("slider42");
  nextQuestion();
  
});
onEvent("slider43","change",function(){
  moveForward(5);
  ans43 = getNumber("slider43");
  nextQuestion();
  
});
onEvent("slider44","change",function(){
  moveForward(5);
  ans44 = getNumber("slider44");
  nextQuestion();
  
});
onEvent("slider45","change",function(){
  moveForward(5);
  ans45 = getNumber("slider45");
  nextQuestion();
  
});
onEvent("slider46","change",function(){
  moveForward(5);
  ans46 = getNumber("slider46");
  nextQuestion();
  
});
onEvent("slider47","change",function(){
  moveForward(5);
  ans47 = getNumber("slider47");
  nextQuestion();
  
});
onEvent("slider48","change",function(){
  moveForward(5);
  ans48 = getNumber("slider48");
  nextQuestion();
  
});
onEvent("slider49","change",function(){
  moveForward(5);
  ans49 = getNumber("slider49");
  nextQuestion();
  
});
onEvent("slider50","change",function(){
  moveForward(5);
  ans50 = getNumber("slider50");
  nextQuestion();
  
});
onEvent("slider51","change",function(){
  moveForward(5);
  ans51 = getNumber("slider51");
  nextQuestion();
  
});
onEvent("slider52","change",function(){
  moveForward(5);
  ans52 = getNumber("slider52");
  nextQuestion();
  
});
onEvent("slider53","change",function(){
  moveForward(5);
  ans53 = getNumber("slider53");
  nextQuestion();
  
});
onEvent("slider54","change",function(){
  moveForward(5);
  ans54 = getNumber("slider54");
  nextQuestion();
  
});
onEvent("slider55","change",function(){
  moveForward(5);
  ans55 = getNumber("slider55");
  nextQuestion();
  
});
onEvent("slider56","change",function(){
  moveForward(5);
  ans56 = getNumber("slider56");
  nextQuestion();
  
});
onEvent("slider57","change",function(){
  moveForward(5);
  ans57 = getNumber("slider57");
  nextQuestion();
  
});
onEvent("slider58","change",function(){
  moveForward(5);
  ans58 = getNumber("slider58");
  nextQuestion();
  
});
onEvent("slider59","change",function(){
  moveForward(5);
  ans59 = getNumber("slider59");
  nextQuestion();
  
});
onEvent("slider60","change",function(){
  moveForward(5);
  ans60 = getNumber("slider60");
  nextQuestion();
  
});
onEvent("slider61","change",function(){
  moveForward(5);
  ans61 = getNumber("slider61");
  nextQuestion();
  
});
onEvent("slider62","change",function(){
  moveForward(5);
  ans62 = getNumber("slider62");
  nextQuestion();
  
});
onEvent("slider63","change",function(){
  moveForward(5);
  ans63 = getNumber("slider63");
  nextQuestion();
  
});
onEvent("slider64","change",function(){
  moveForward(5);
  ans64 = getNumber("slider64");
  showElement("button2");
  hideElement("slider64");
  });
onEvent("button2","click",function(){
  hidePfps();
  setScreen("testResults");
  setStyle("dot", "z-index: 10");
  hide();
  endTest();
});
onEvent("button3", "click", function(){
  setScreen("creditsScreen");
});
onEvent("button4", "click", function(){
  setText("text_area65","Results also consider z coordinates. \n Usernames will take you to their page.");
  calculatePfpDistances();
  setScreen("testResults2");
  displayPfpMatches();
  distance;
  distances = [];
  maxDistance;
  maxIndex;
  sortedDistances = [];
  usernames = ["teen.politics.official","charlemagnes_corner","rightwingism","leftistbaby","progressive.politico","feldsteinphilosophy","southern_leftist","tread.not","teen.politics.official","social_liberals","max_stirner_fanpage","makeliberalismclassicalagain","deafpatriot","angryamericans","libertylover2","refoundingfather","ancomcatz","broken.bones.and.civilizations","kiwimutualist","anpacball","individualist.libertarian","virginiaforbiden","right_wing_imperial","anarchistunity","texansocialdem","liberallibertarian","visionary.arabia","social.dem.official","palmetto_state_bluedog","newlibertymovement","lippie.liberty","massachusite","lib_confederalism","soc.leftist","2038_movement","american.edgelord.v2","american_leoism","soc.leftist","anarcho.garfieldism","anarchy.is.liberty","ancap_or_death","ancap_society","the.eco.socialist","biblicalamericanpolitics","campus_conservative_","cristero.mexico","cuban.progressive","demsocialistcolony","identityeurope","libertarian.unity","libertiansocialist.sf","major_tomrade","marxist_luxemburgist","mexicanlibertarian","mister.american","neoreactionism","not_a_domestic_terrorist","refoundingfather","sonofgotaland","the.geopolitical.forecaster","thechicanoancomsynista","toronto_socialist","trotskium","wokerevolution","realisticleftist","leftistcommentary","mass_liberty","american_nationalist.party","new.libertarianism","missourian_ancaps","art.n.politics","the.driptator","soviet.chronicles_"];
  pfpXCoord = 0;
  pfpYCoord = 0;
  pfpZCoord = 0;
  count = 0;
});
onEvent("button7", "click", function(){
  setText("text_area65","Results also consider z coordinates.");
  calculateCandidateDistances();
  setScreen("testResults2");
  displayCandidateMatches();
  sortedCanNames = [];
  canNames = ["Amy Klobuchar","Tulsi Gabbard","Mike Gravel","Joe Biden","Cory Brooker","Kamala Harris","Bernie Sanders","Andrew Yang","Pete Butigieg","Elizabeth Warren","Donald Trump"];
  canDistances = [];
  sortedCanDistances = [];
  candidateXCoord = 0;
  candidateYCoord = 0;
  candidateZCoord = 0;
  canDistance;
  maxCanDistance;
  maxCanIndex;
  count = 1;
});
onEvent("button5", "click", function(){
  setScreen("testResults");
  if(count == 0){
    sortedUsernames = [];
  }
});
onEvent("radio_button1","click",function(){
  showElement("symbols");
  hideElement("images");
  hideElement("labels");
  hidePfps();
  hideElement("candidates");
});
onEvent("radio_button2","click",function(){
  showElement("images");
  hideElement("symbols");
  hideElement("labels");
  hidePfps();
  hideElement("candidates");
});
onEvent("radio_button4","click",function(){
  hideElement("images");
  hideElement("symbols");
  showElement("labels");
  hidePfps();
  hideElement("candidates");
});
onEvent("radio_button5","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  showPfps();
  hideElement("candidates");
});
onEvent("radio_button3","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  hidePfps();
  showElement("candidates");
});
onEvent("username0","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[0] + "/");
  }
});
onEvent("username1","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[1] + "/");
  }
});
onEvent("username2","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[2] + "/");
  }
});
onEvent("username3","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[3] + "/");
  }
});
onEvent("username4","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[4] + "/");
  }
});
onEvent("username5","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[5] + "/");
  }
});
onEvent("username6","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[6] + "/");
  }
});
onEvent("username7","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[7] + "/");
  }
});
onEvent("username8","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[8] + "/");
  }
});
onEvent("username9","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[9] + "/");
  }
});
onEvent("pfp0","mouseover",function(){
  setText("text_area67",usernames[0] + "'s results: (" + xCoords[0] + "," + yCoords[0] + "," + zCoords[0] + ")");
});
onEvent("pfp1","mouseover",function(){
  setText("text_area67",usernames[1] + "'s results: (" + xCoords[1] + "," + yCoords[1] + "," + zCoords[1] + ")");
});
onEvent("pfp2","mouseover",function(){
  setText("text_area67",usernames[2] + "'s results: (" + xCoords[2] + "," + yCoords[2] + "," + zCoords[2] + ")");
});
onEvent("pfp3","mouseover",function(){
  setText("text_area67",usernames[3] + "'s results: (" + xCoords[3] + "," + yCoords[3] + "," + zCoords[3] + ")");
});
onEvent("pfp4","mouseover",function(){
  setText("text_area67",usernames[4] + "'s results: (" + xCoords[4] + "," + yCoords[4] + "," + zCoords[4] + ")");
});
onEvent("pfp5","mouseover",function(){
  setText("text_area67",usernames[5] + "'s results: (" + xCoords[5] + "," + yCoords[5] + "," + zCoords[5] + ")");
});
onEvent("pfp6","mouseover",function(){
  setText("text_area67",usernames[6] + "'s results: (" + xCoords[6] + "," + yCoords[6] + "," + zCoords[6] + ")");
});
onEvent("pfp7","mouseover",function(){
  setText("text_area67",usernames[7] + "'s results: (" + xCoords[7] + "," + yCoords[7] + "," + zCoords[7] + ")");
});
onEvent("pfp8","mouseover",function(){
  setText("text_area67",usernames[8] + "'s results: (" + xCoords[8] + "," + yCoords[8] + "," + zCoords[8] + ")");
});
onEvent("pfp9","mouseover",function(){
  setText("text_area67",usernames[9] + "'s results: (" + xCoords[9] + "," + yCoords[9] + "," + zCoords[9] + ")");
});
onEvent("pfp10","mouseover",function(){
  setText("text_area67",usernames[10] + "'s results: (" + xCoords[10] + "," + yCoords[10] + "," + zCoords[10] + ")");
});
onEvent("pfp11","mouseover",function(){
  setText("text_area67",usernames[11] + "'s results: (" + xCoords[11] + "," + yCoords[11] + "," + zCoords[11] + ")");
});
onEvent("pfp12","mouseover",function(){
  setText("text_area67",usernames[12] + "'s results: (" + xCoords[12] + "," + yCoords[12] + "," + zCoords[12] + ")");
});
onEvent("pfp13","mouseover",function(){
  setText("text_area67",usernames[13] + "'s results: (" + xCoords[13] + "," + yCoords[13] + "," + zCoords[13] + ")");
});
onEvent("pfp14","mouseover",function(){
  setText("text_area67",usernames[14] + "'s results: (" + xCoords[14] + "," + yCoords[14] + "," + zCoords[14] + ")");
});
onEvent("pfp15","mouseover",function(){
  setText("text_area67",usernames[15] + "'s results: (" + xCoords[15] + "," + yCoords[15] + "," + zCoords[15] + ")");
});
onEvent("pfp16","mouseover",function(){
  setText("text_area67",usernames[16] + "'s results: (" + xCoords[16] + "," + yCoords[16] + "," + zCoords[16] + ")");
});
onEvent("pfp17","mouseover",function(){
  setText("text_area67",usernames[17] + "'s results: (" + xCoords[17] + "," + yCoords[17] + "," + zCoords[17] + ")");
});
onEvent("pfp18","mouseover",function(){
  setText("text_area67",usernames[18] + "'s results: (" + xCoords[18] + "," + yCoords[18] + "," + zCoords[18] + ")");
});
onEvent("pfp19","mouseover",function(){
  setText("text_area67",usernames[19] + "'s results: (" + xCoords[19] + "," + yCoords[19] + "," + zCoords[19] + ")");
});
onEvent("pfp20","mouseover",function(){
  setText("text_area67",usernames[20] + "'s results: (" + xCoords[20] + "," + yCoords[20] + "," + zCoords[20] + ")");
});
onEvent("pfp21","mouseover",function(){
  setText("text_area67",usernames[21] + "'s results: (" + xCoords[21] + "," + yCoords[21] + "," + zCoords[21] + ")");
});
onEvent("pfp22","mouseover",function(){
  setText("text_area67",usernames[22] + "'s results: (" + xCoords[22] + "," + yCoords[22] + "," + zCoords[22] + ")");
});
onEvent("pfp23","mouseover",function(){
  setText("text_area67",usernames[23] + "'s results: (" + xCoords[23] + "," + yCoords[23] + "," + zCoords[23] + ")");
});
onEvent("pfp24","mouseover",function(){
  setText("text_area67",usernames[24] + "'s results: (" + xCoords[24] + "," + yCoords[24] + "," + zCoords[24] + ")");
});
onEvent("pfp25","mouseover",function(){
  setText("text_area67",usernames[25] + "'s results: (" + xCoords[25] + "," + yCoords[25] + "," + zCoords[25] + ")");
});
onEvent("pfp26","mouseover",function(){
  setText("text_area67",usernames[26] + "'s results: (" + xCoords[26] + "," + yCoords[26] + "," + zCoords[26] + ")");
});
onEvent("pfp27","mouseover",function(){
  setText("text_area67",usernames[27] + "'s results: (" + xCoords[27] + "," + yCoords[27] + "," + zCoords[27] + ")");
});
onEvent("pfp28","mouseover",function(){
  setText("text_area67",usernames[28] + "'s results: (" + xCoords[28] + "," + yCoords[28] + "," + zCoords[28] + ")");
});
onEvent("pfp29","mouseover",function(){
  setText("text_area67",usernames[29] + "'s results: (" + xCoords[29] + "," + yCoords[29] + "," + zCoords[29] + ")");
});
onEvent("pfp30","mouseover",function(){
  setText("text_area67",usernames[30] + "'s results: (" + xCoords[30] + "," + yCoords[30] + "," + zCoords[30] + ")");
});
onEvent("pfp31","mouseover",function(){
  setText("text_area67",usernames[31] + "'s results: (" + xCoords[31] + "," + yCoords[31] + "," + zCoords[31] + ")");
});
onEvent("pfp32","mouseover",function(){
  setText("text_area67",usernames[32] + "'s results: (" + xCoords[32] + "," + yCoords[32] + "," + zCoords[32] + ")");
});
onEvent("pfp33","mouseover",function(){
  setText("text_area67",usernames[33] + "'s results: (" + xCoords[33] + "," + yCoords[33] + "," + zCoords[31] + ")");
});
onEvent("pfp34","mouseover",function(){
  setText("text_area67",usernames[34] + "'s results: (" + xCoords[34] + "," + yCoords[34] + "," + zCoords[34] + ")");
});
onEvent("pfp35","mouseover",function(){
  setText("text_area67",usernames[35] + "'s results: (" + xCoords[35] + "," + yCoords[35] + "," + zCoords[35] + ")");
});
onEvent("pfp36","mouseover",function(){
  setText("text_area67",usernames[36] + "'s results: (" + xCoords[36] + "," + yCoords[36] + "," + zCoords[36] + ")");
});
onEvent("pfp37","mouseover",function(){
  setText("text_area67",usernames[37] + "'s results: (" + xCoords[37] + "," + yCoords[37] + "," + zCoords[37] + ")");
});
onEvent("pfp38","mouseover",function(){
  setText("text_area67",usernames[38] + "'s results: (" + xCoords[38] + "," + yCoords[38] + "," + zCoords[38] + ")");
});
onEvent("pfp39","mouseover",function(){
  setText("text_area67",usernames[39] + "'s results: (" + xCoords[39] + "," + yCoords[39] + "," + zCoords[39] + ")");
});
onEvent("pfp40","mouseover",function(){
  setText("text_area67",usernames[40] + "'s results: (" + xCoords[40] + "," + yCoords[40] + "," + zCoords[40] + ")");
});
onEvent("pfp41","mouseover",function(){
  setText("text_area67",usernames[41] + "'s results: (" + xCoords[41] + "," + yCoords[41] + "," + zCoords[41] + ")");
});
onEvent("pfp42","mouseover",function(){
  setText("text_area67",usernames[42] + "'s results: (" + xCoords[42] + "," + yCoords[42] + "," + zCoords[42] + ")");
});
onEvent("pfp43","mouseover",function(){
  setText("text_area67",usernames[43] + "'s results: (" + xCoords[43] + "," + yCoords[43] + "," + zCoords[43] + ")");
});
onEvent("pfp44","mouseover",function(){
  setText("text_area67",usernames[44] + "'s results: (" + xCoords[44] + "," + yCoords[44] + "," + zCoords[44] + ")");
});
onEvent("pfp45","mouseover",function(){
  setText("text_area67",usernames[45] + "'s results: (" + xCoords[45] + "," + yCoords[45] + "," + zCoords[45] + ")");
});
onEvent("pfp46","mouseover",function(){
  setText("text_area67",usernames[46] + "'s results: (" + xCoords[46] + "," + yCoords[46] + "," + zCoords[46] + ")");
});
onEvent("pfp47","mouseover",function(){
  setText("text_area67",usernames[47] + "'s results: (" + xCoords[47] + "," + yCoords[47] + "," + zCoords[47] + ")");
});
onEvent("pfp48","mouseover",function(){
  setText("text_area67",usernames[48] + "'s results: (" + xCoords[48] + "," + yCoords[48] + "," + zCoords[48] + ")");
});
onEvent("pfp49","mouseover",function(){
  setText("text_area67",usernames[49] + "'s results: (" + xCoords[49] + "," + yCoords[49] + "," + zCoords[49] + ")");
});
onEvent("pfp50","mouseover",function(){
  setText("text_area67",usernames[50] + "'s results: (" + xCoords[50] + "," + yCoords[50] + "," + zCoords[50] + ")");
});
onEvent("pfp51","mouseover",function(){
  setText("text_area67",usernames[51] + "'s results: (" + xCoords[51] + "," + yCoords[51] + "," + zCoords[51] + ")");
});
onEvent("pfp52","mouseover",function(){
  setText("text_area67",usernames[52] + "'s results: (" + xCoords[52] + "," + yCoords[52] + "," + zCoords[52] + ")");
});
onEvent("pfp53","mouseover",function(){
  setText("text_area67",usernames[53] + "'s results: (" + xCoords[53] + "," + yCoords[53] + "," + zCoords[53] + ")");
});

onEvent("pfp54","mouseover",function(){
  setText("text_area67",usernames[54] + "'s results: (" + xCoords[54] + "," + yCoords[54] + "," + zCoords[54] + ")");
});
onEvent("pfp55","mouseover",function(){
  setText("text_area67",usernames[55] + "'s results: (" + xCoords[55] + "," + yCoords[55] + "," + zCoords[55] + ")");
});
onEvent("pfp56","mouseover",function(){
  setText("text_area67",usernames[56] + "'s results: (" + xCoords[56] + "," + yCoords[56] + "," + zCoords[56] + ")");
});
onEvent("pfp57","mouseover",function(){
  setText("text_area67",usernames[57] + "'s results: (" + xCoords[57] + "," + yCoords[57] + "," + zCoords[57] + ")");
});
onEvent("pfp58","mouseover",function(){
  setText("text_area67",usernames[58] + "'s results: (" + xCoords[58] + "," + yCoords[58] + "," + zCoords[58] + ")");
});
onEvent("pfp59","mouseover",function(){
  setText("text_area67",usernames[59] + "'s results: (" + xCoords[59] + "," + yCoords[59] + "," + zCoords[59] + ")");
});
onEvent("pfp60","mouseover",function(){
  setText("text_area67",usernames[60] + "'s results: (" + xCoords[60] + "," + yCoords[60] + "," + zCoords[60] + ")");
});
onEvent("pfp61","mouseover",function(){
  setText("text_area67",usernames[61] + "'s results: (" + xCoords[61] + "," + yCoords[61] + "," + zCoords[61] + ")");
});
onEvent("pfp62","mouseover",function(){
  setText("text_area67",usernames[62] + "'s results: (" + xCoords[62] + "," + yCoords[62] + "," + zCoords[62] + ")");
});
onEvent("pfp63","mouseover",function(){
  setText("text_area67",usernames[63] + "'s results: (" + xCoords[63] + "," + yCoords[63] + "," + zCoords[63] + ")");
});
onEvent("pfp64","mouseover",function(){
  setText("text_area67",usernames[64] + "'s results: (" + xCoords[64] + "," + yCoords[64] + "," + zCoords[64] + ")");
});
onEvent("pfp65","mouseover",function(){
  setText("text_area67",usernames[65] + "'s results: (" + xCoords[65] + "," + yCoords[65] + "," + zCoords[65] + ")");
});
onEvent("pfp66","mouseover",function(){
  setText("text_area67",usernames[66] + "'s results: (" + xCoords[66] + "," + yCoords[66] + "," + zCoords[66] + ")");
});
onEvent("pfp67","mouseover",function(){
  setText("text_area67",usernames[67] + "'s results: (" + xCoords[67] + "," + yCoords[67] + "," + zCoords[67] + ")");
});
onEvent("pfp68","mouseover",function(){
  setText("text_area67",usernames[68] + "'s results: (" + xCoords[68] + "," + yCoords[68] + "," + zCoords[68] + ")");
});
onEvent("pfp69","mouseover",function(){
  setText("text_area67",usernames[69] + "'s results: (" + xCoords[69] + "," + yCoords[69] + "," + zCoords[69] + ")");
});
onEvent("pfp70","mouseover",function(){
  setText("text_area67",usernames[70] + "'s results: (" + xCoords[70] + "," + yCoords[70] + "," + zCoords[70] + ")");
});
onEvent("pfp71","mouseover",function(){
  setText("text_area67",usernames[71] + "'s results: (" + xCoords[71] + "," + yCoords[71] + "," + zCoords[71] + ")");
});
onEvent("pfp72","mouseover",function(){
  setText("text_area67",usernames[72] + "'s results: (" + xCoords[72] + "," + yCoords[72] + "," + zCoords[72] + ")");
});
onEvent("button6","click",function(){
  previousQuestion();
  moveBackward(5);
});