window.onload = function(){
	main();
}

function main(){
	fillNumbers();
}

function fillNumbers(){
	var j = 5;
	var usedNum = [];
	for(i=1;i<=25;i++){
		if(i!=13){
			if(i%j!=0) document.getElementById('square'+i).innerHTML = (i%j)*15-randomGenerator();
			else document.getElementById('square'+i).innerHTML = 75-randomGenerator();
		} else {
			document.getElementById('square'+i).innerHTML = "FREE";
		}
		usedNum.push(document.getElementById('square'+i).innerHTML);
	}
}

function randomGenerator(){
	return Math.round(Math.random()*15);             
}

function reload(){
	fillNumbers();
}
function readmore(e){
	e.preventDefault();
	if(document.getElementById('anc').innerHTML == "Read More"){
		document.getElementById('rules').style.height = "300px";
		document.getElementById('rules').style.overflow = "none";
		document.getElementById('anc').innerHTML = "Read Less";
	}
	else if(document.getElementById('anc').innerHTML == "Read Less"){
		document.getElementById('rules').style.height = "30px";
		document.getElementById('rules').style.overflow = "hidden";
		document.getElementById('anc').innerHTML = "Read More";
	}
}