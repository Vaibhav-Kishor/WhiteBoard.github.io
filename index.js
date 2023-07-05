 // Selecting Canvas and change its width and height 
 let canvasBoard = document.querySelector("canvas");
 canvasBoard.height = window.innerHeight;
 canvasBoard.width = window.innerWidth;

 let tool = canvasBoard.getContext("2d");

 // Tool selection 
 let rectTool = document.querySelector("#square");
 let lineTool = document.querySelector("#line");

 let cTool = "rectTool";

 // Tool change logic
 rectTool.addEventListener("click",function(e){
     cTool = "rectTool";
 })
 lineTool.addEventListener("click",function(e){
     cTool = "lineTool"
 })



 // Tool execution
 let body = document.querySelector("body");
 let intialX,intialY,finalX,finalY;

 body.addEventListener("mousedown", function(e){
     intialX = e.clientX;
     intialY = e.clientY;
 })
 body.addEventListener("mouseup",function(e){
     finalX = e.clientX;
     finalY = e.clientY;

     let width = finalX-intialX;
     let height = finalY-intialX;
     
     if(cTool =="rectTool"){
         tool.strokeRect(intialX,intialY,width,height);
     }
     else{
         tool.beginPath();
         tool.moveTo(intialX,intialY);
         tool.lineTo(finalX,finalY);
         tool.stroke();
         console.log("pending");
     }
 })

 