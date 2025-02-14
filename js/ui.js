export class UIManager {
    constructor() {
        this.screens = {
            'menu-screen': document.getElementById('menu-screen'),
            'game-screen': document.getElementById('game-screen')
        };
    }

    showScreen(screenId) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.add('hidden');
        });
        
        const screenToShow = this.screens[screenId];
        if (screenToShow) {
            screenToShow.classList.remove('hidden');
        }
    }

    updateScore(score) {
        document.getElementById('score').textContent = score;
    }

    showMessage(message, type = 'info') {
        // Implement message display logic
    }
}