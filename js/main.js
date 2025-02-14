import { Game } from './game.js';
import { UIManager } from './ui.js';
import { ResourceManager } from './resources.js';
import { QuestManager } from './quests.js';

class EcoQuest {
    constructor() {
        this.game = null;
        this.uiManager = new UIManager();
        this.resourceManager = new ResourceManager();
        this.questManager = new QuestManager();
        
        this.init();
    }

    init() {
        // Initialize event listeners
        document.getElementById('start-game').addEventListener('click', () => this.startGame());
        document.getElementById('how-to-play').addEventListener('click', () => this.showTutorial());
        
        // Initialize game systems
        this.game = new Game(
            document.getElementById('game-canvas'),
            this.resourceManager,
            this.questManager
        );
    }

    startGame() {
        this.uiManager.showScreen('game-screen');
        this.game.start();
        this.resourceManager.initializeResources();
        this.questManager.startInitialQuest();
    }

    showTutorial() {
        // Implement tutorial logic
    }
}

// Start the game when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    new EcoQuest();
});