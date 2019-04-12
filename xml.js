function loadXml(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "highscore.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var scores,score, i, xmlDoc, txt, child;
  xmlDoc = xml.responseXML;
  txt = "";
  scores = xmlDoc.getElementsByTagName("score");
  for (i = 0; i< scores.length; i++) {
    name=scores[i].getElementsByTagName("name").item(0).innerHTML;
    score=scores[i].getElementsByTagName("value").item(0).innerHTML;
    console.log(name+": "+score);

    txt += name+": "+score + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}

function writeXml(){
//  document.getElementById("demo").innerHTML = playerName.value+ " " +playerScore.value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         myFunctionSend(this);
     }
  };
  xhttp.open("GET", "highscore.xml", true);
  xhttp.send();

  function myFunctionSend(xml) {
      var xmlDoc = xml.responseXML;
      var x = xmlDoc.getElementsByTagName("scores")[0].childNodes[0];
      console.log(x);
      x.insertData(0,"<name>Test</name><value>300</value>");
      document.getElementById("demo").innerHTML =x.data;
  }
}

/**  score=scores[0].childNodes[i]
  console.log(score);
  child=score;*/
