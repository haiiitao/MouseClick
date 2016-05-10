/**
 * 
 */
// Create the canvas  
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");  

//Background
var bgReady = false;
var bgImage = new Image();  
bgImage.onload = function () 
{  
	bgReady = true;
};  
bgImage.src = "background.jpg";

// spawn array
var spawnSpots = new Array();
spawnSpots[0] = new Array(335, 210);
spawnSpots[1] = new Array(150, 120);
spawnSpots[2] = new Array(335, 120);
spawnSpots[3] = new Array(110, 305);
spawnSpots[4] = new Array(120, 210);
spawnSpots[5] = new Array(335, 310);
spawnSpots[6] = new Array(535, 125);
spawnSpots[7] = new Array(535, 210);
spawnSpots[8] = new Array(555, 315);

//GameObject
var shrew =
{
	x: spawnSpots[0][0], y: spawnSpots[0][1]
}

var ObjectReady = false;
var ObjectImage = new Image();  
ObjectImage.onload = function () 
{  
	ObjectReady = true;
};  
ObjectImage.src = "shrewimage.png";

var HammerReady = false;
var HammerImage = new Image();  
HammerImage.onload = function () 
{  
	HammerReady = true;
};  
HammerImage.src = "hammer.png";

var SetPos = function()
{
	var index = Math.floor(Math.random() * spawnSpots.length);
	shrew.x = spawnSpots[index][0];
	shrew.y = spawnSpots[index][1];
}
var score = 0;
var render = function()
{
	if(bgReady)
	{
		ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height);
	}
	if(ObjectReady)
	{
		SetPos();
		ctx.drawImage(ObjectImage, shrew.x, shrew.y, ObjectImage.width, ObjectImage.height);
	}
	
	// Score  
    ctx.fillStyle = "#030000";  
    ctx.font = "20px Arial";   
    ctx.fillText("Score: " + score.toString(), 200, 100);  
};

var obj=document.documentElement;
obj.mouseStart={};

window.onload = function()
{
	var oDiv=document.getElementById("div1");
	obj.onclick = function(e)
	{
		oEvent=e||event;
		obj.mouseStart.x=oEvent.clientX;
		obj.mouseStart.y=oEvent.clientY;
		if(obj.mouseStart.x >= shrew.x && obj.mouseStart.x <= shrew.x + ObjectImage.width)
		{
			if(obj.mouseStart.y >= shrew.y && obj.mouseStart.y <= shrew.y + ObjectImage.height)
			{
				ctx.drawImage(HammerImage, obj.mouseStart.x - 10, obj.mouseStart.y - 10, HammerImage.width, HammerImage.height);
				score ++;
			}
		}
		oDiv.innerHTML="x:"+obj.mouseStart.x+"y:"+obj.mouseStart.y;
	};
};

//Let's play this game!    
setInterval(render, 500);