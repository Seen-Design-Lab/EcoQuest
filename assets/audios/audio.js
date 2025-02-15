class AudioManager
{
    constructor ()
    {
        this.bgMusic = document.getElementById( 'bg-music' );
        this.bgMusic.volume = 0.3; // Set initial volume to 30%
    }

    init ()
    {
        // Try to play immediately
        this.playBackground().catch( () =>
        {
            // If failed, try various user interaction events
            const events = [ 'click', 'touchstart', 'keydown' ];
            const playOnInteraction = () =>
            {
                this.playBackground();
                // Remove all event listeners once played
                events.forEach( event =>
                    document.removeEventListener( event, playOnInteraction )
                );
            };

            events.forEach( event =>
                document.addEventListener( event, playOnInteraction, { once: true } )
            );
        } );
    }

    async playBackground ()
    {
        try
        {
            await this.bgMusic.play();
            console.log( 'Background music started' );
        } catch ( error )
        {
            console.warn( 'Auto-play failed:', error );
        }
    }
}

// Initialize when DOM is ready
document.addEventListener( 'DOMContentLoaded', () =>
{
    const audioManager = new AudioManager();
    audioManager.init();
} );