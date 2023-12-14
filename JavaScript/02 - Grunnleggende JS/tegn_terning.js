function drawDice(value) {
    const canvas = document.getElementById('diceCanvas');
    const ctx = canvas.getContext('2d');
    
    const width = canvas.width;
    const height = canvas.height;

    // Scale factors based on canvas size (assuming a base size of 200x200 for the dice)
    const scaleX = width / 200;
    const scaleY = height / 200;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw the square with scaled size and position
    ctx.fillStyle = '#000000';  // Black color
    ctx.fillRect(10 * scaleX, 10 * scaleY, 180 * scaleX, 180 * scaleY);

    // Function to draw the dice dots with scaled size and position
    function drawDot(x, y) {
        ctx.beginPath();
        ctx.arc(x * scaleX, y * scaleY, 10 * scaleX, 0, Math.PI * 2, true);  // Create a circle with scaled radius and position
        ctx.fillStyle = '#FFFFFF';  // White color
        ctx.fill();
    }

    // Draw dots based on dice value with scaled positions
    if (value === 1 || value === 3 || value === 5) {
        drawDot(100, 100);  // Center dot
    }
    if (value > 1) {
        drawDot(50, 50);    // Top-left dot
        drawDot(150, 150);  // Bottom-right dot
    }
    if (value > 3) {
        drawDot(150, 50);   // Top-right dot
        drawDot(50, 150);   // Bottom-left dot
    }
    if (value === 6) {
        drawDot(50, 100);   // Middle-left dot
        drawDot(150, 100);  // Middle-right dot
    }
}