let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//casa marrom
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'SaddleBrown';
ctx.strokeStyle = 'SaddleBrown';
ctx.fillRect(150,140,100,120);
ctx.strokeRect(150,140,100,120);
 ctx.closePath();

//porta da casa

 ctx.beginPath()
ctx.fillStyle = "black";
ctx.fillRect (190,210,20,50);
 ctx.closePath();

// janelas casa
 ctx.beginPath();
ctx.fillStyle = "#61BBFB";
ctx.fillRect(210,170,35,35);
ctx.fillStyle = "#61BBFB";
ctx.fillRect(155,170,35,35);
ctx.closePath();

// SOL
ctx.beginPath();
ctx.fillStyle = "Yellow";
ctx.strokeStyle = "Yellow"
ctx.arc(290, 60, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath;

//Concreto
ctx.beginPath();
ctx.fillStyle = "Grey"
ctx.fillRect(0,260,400,350);
ctx.closePath();

//Arvores
ctx.beginPath();
ctx.fillStyle = "SaddleBrown"
ctx.fillRect(40,210,20,50)
ctx.fillStyle = "SaddleBrown"
ctx.fillRect(340,280,20,50);
ctx.closePath();

//Folhas arvores 1
ctx.beginPath();
ctx.fillStyle = "Green";
ctx.strokeStyle = "Green"
ctx.arc(350, 250, 35, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Folhas  arvores 2
ctx.beginPath();
ctx.fillStyle = "Green";
ctx.strokeStyle = "Green"
ctx.arc(50, 200, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//Telhado

ctx.beginPath();
ctx.fillStyle = "red";
ctx.moveTo(150, 140);   // canto esquerdo do topo da casa
ctx.lineTo(250, 140);   // canto direito do topo da casa
ctx.lineTo(200, 80);    // ponta do telhado (meio em cima)
ctx.closePath();
ctx.fill();

//cachoeira

ctx.beginPath();
ctx.fillStyle = "#598CFA";
ctx.fillRect(0, 260, 45, 200);  // x, y, largura, altura

ctx.fillStyle = "#598CFA";
ctx.fillRect(40, 360, 150, 50);  // x, y, largura, altura
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#598CFA"
ctx.strokeStyle = "#598CFA"
ctx.arc (5,270,40,0,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#598CFA"
ctx.strokeStyle = "#598CFA"
ctx.arc (190,400,40,0,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();





