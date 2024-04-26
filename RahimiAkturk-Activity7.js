var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	var max = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
		if(max <= scores[i]){
			 max = scores[i];
		}
	}
	

	var count = 0;
	var resultsHTML = "<h2> Results </h2><p> Average score = " + average + "<br \> High score = ";

	for (var i = 0; i < scores.length; i++) {
		if (scores[i] == max) {
			count++;
			if (count > 1) {
				resultsHTML += ", ";
			}
			resultsHTML += names[i];
		}
	}

	resultsHTML += " with a score of " + max + "</p>";

	document.getElementById("results").innerHTML = resultsHTML;

}

function displayScores(){
	
	document.getElementById("scores_table").innerHTML = "<h2> Scores </h2>";
	
	document.getElementById("scores_table").innerHTML += "<tr><th id=\"tableHeader\"> Name </th><th id=\"tableHeader\"> Score </th></tr>";
	
	for(var i=0;i<scores.length;i++)
	{
		document.getElementById("scores_table").innerHTML += "<tr><td>"+names[i]+" </td><td>"+scores[i]+"</td></tr>";
		
	}

}

function addScore(){

	var name = document.getElementById("name").value;
	
	if(!isNaN(document.getElementById("score").value) && document.getElementById("score").value != ""){

		var score = parseInt(document.getElementById("score").value);
		if(name == "" || score < 0 || score > 100){
			window.alert("You must enter a name and a valid score");
		}
		else{
			names.push(name);
			scores.push(score);
		}
	}
	else{
		window.alert("You must enter a name and a valid score");
	}
	
	

}