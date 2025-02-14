export class Game {
    constructor(canvas, resourceManager, questManager) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.resourceManager = resourceManager;
        this.questManager = questManager;
        
        this.player = {
            x: 0,
            y: 0,
            speed: 5
        };
        
        this.gameLoop = this.gameLoop.bind(this);
        this.setupEventListeners();
    }

    start() {
        this.resizeCanvas();
        requestAnimationFrame(this.gameLoop);
    }

    resizeCanvas() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());
        
        window.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                case 'w':
                    this.player.y -= this.player.speed;
                    break;
                case 'ArrowDown':
                case 's':
                    this.player.y += this.player.speed;
                    break;
                case 'ArrowLeft':
                case 'a':
                    this.player.x -= this.player.speed;
                    break;
                case 'ArrowRight':
                case 'd':
                    this.player.x += this.player.speed;
                    break;
            }
        });
    }

    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(this.gameLoop);
    }

    update() {
        // Update game logic here
    }

    render() {
        // Clear canvas
        this.ctx.fillStyle = '#2d2d2d';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw player
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.fillRect(this.player.x, this.player.y, 32, 32);
    }
}