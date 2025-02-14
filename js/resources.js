export class ResourceManager {
    constructor() {
        this.resources = {
            water: 0,
            seeds: 0,
            energy: 100
        };
        
        this.maxResources = {
            water: 100,
            seeds: 50,
            energy: 100
        };
    }

    initializeResources() {
        this.updateUI();
    }

    addResource(type, amount) {
        this.resources[type] = Math.min(
            this.resources[type] + amount,
            this.maxResources[type]
        );
        this.updateUI();
    }

    useResource(type, amount) {
        if (this.resources[type] >= amount) {
            this.resources[type] -= amount;
            this.updateUI();
            return true;
        }
        return false;
    }

    updateUI() {
        document.getElementById('water-count').textContent = this.resources.water;
        document.getElementById('seed-count').textContent = this.resources.seeds;
        document.getElementById('energy-count').textContent = this.resources.energy;
    }
}