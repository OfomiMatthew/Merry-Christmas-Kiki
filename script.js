// // Get the emoji container
// const emojiContainer = document.getElementById('emoji-container');

// // Array of emojis to use
// const emojis = ['❤️', '🎄', '🎅'];

// // Function to generate a random position
// function getRandomPosition() {
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;
//     return { x, y };
// }

// // Function to create an emoji
// function createEmoji(x, y) {
//     const emoji = document.createElement('div');
//     emoji.className = 'emoji';
//     emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
//     emoji.style.left = `${x}px`;
//     emoji.style.top = `${y}px`;
//     emojiContainer.appendChild(emoji);

//     // Remove the emoji after animation
//     setTimeout(() => {
//         emoji.remove();
//     }, 1500);
// }

// // Add event listener for clicks
// document.body.addEventListener('click', (e) => {
//     const { x, y } = getRandomPosition();
//     createEmoji(e.clientX, e.clientY);
// });

// Get the emoji container
const emojiContainer = document.getElementById('emoji-container');

// Array of Christmas-themed emojis
const emojis = ['❤️', '🎄', '🎅', '❄️', '✨', '🎁', '🔔', '🦌', '🌟', '☃️'];

// Function to create an emoji with a spiral effect
function createSpiralEmojis(x, y) {
    const emojiCount = 10; // Number of emojis in the spiral
    const radiusIncrement = 20; // Distance between spirals
    const angleIncrement = (2 * Math.PI) / emojiCount; // Angle between each emoji

    for (let i = 0; i < emojiCount; i++) {
        const angle = i * angleIncrement; // Current angle
        const radius = i * radiusIncrement; // Spiral radius

        // Calculate position of each emoji
        const emojiX = x + Math.cos(angle) * radius;
        const emojiY = y + Math.sin(angle) * radius;

        // Create the emoji
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${emojiX}px`;
        emoji.style.top = `${emojiY}px`;

        // Append to the container
        emojiContainer.appendChild(emoji);

        // Remove the emoji after animation
        setTimeout(() => {
            emoji.remove();
        }, 2000); // Duration before removal
    }
}

// Add event listener for clicks
document.body.addEventListener('click', (e) => {
    createSpiralEmojis(e.clientX, e.clientY);
});
