// Seleciona o canvas e o contexto
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// Cria o objeto bola (mesmo modelo da aula)
let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),

    desenha: function() {
        this.img.src = 'img/escudo_timao.png'; // imagem exemplo
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2 * this.raio, 2 * this.raio);
        ctx.closePath();
    }
};

// Função de animação
function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bola.desenha();
    requestAnimationFrame(animacao);
}
animacao();

// Movimento do mouse (igual ao exemplo da aula)
document.addEventListener('mousemove', function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    // Atualiza a posição da bola com base no mouse
    bola.x = x_mouse - bola.raio;
    bola.y = y_mouse - bola.raio;
});
