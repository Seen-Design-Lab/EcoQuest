export class QuestManager {
    constructor() {
        this.currentQuest = null;
        this.quests = [
            {
                id: 'intro',
                title: 'Welcome to EcoQuest',
                description: 'Your town needs your help! Choose your first action to begin your journey.',
                choices: [
                    {
                        text: 'Clean up the local park',
                        reward: { water: 10, seeds: 5 },
                        consequence: 'positive'
                    },
                    {
                        text: 'Plant new trees',
                        reward: { water: 5, seeds: 10 },
                        consequence: 'positive'
                    }
                ]
            }
            // Add more quests here
        ];
    }

    startInitialQuest() {
        this.startQuest('intro');
    }

    startQuest(questId) {
        const quest = this.quests.find(q => q.id === questId);
        if (quest) {
            this.currentQuest = quest;
            this.showQuestDialog(quest);
        }
    }

    showQuestDialog(quest) {
        const dialog = document.getElementById('quest-dialog');
        const title = document.getElementById('quest-title');
        const description = document.getElementById('quest-description');
        const choices = document.getElementById('quest-choices');

        title.textContent = quest.title;
        description.textContent = quest.description;
        
        choices.innerHTML = '';
        quest.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => this.makeChoice(choice));
            choices.appendChild(button);
        });

        dialog.classList.remove('hidden');
    }

    makeChoice(choice) {
        // Handle choice consequences
        document.getElementById('quest-dialog').classList.add('hidden');
    }
}