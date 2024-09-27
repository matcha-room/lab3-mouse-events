const mousePositionElement = document.getElementById('mouse-position');
const cheese = document.getElementById('cheese');
const cat = document.getElementById('cat');
const sigma = document.getElementById('sigma');

cheese.ondragstart = function() { return false; };
cat.ondragstart = function() { return false; };

// Track mouse position and display it
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    mousePositionElement.textContent = `${x}, ${y}`;
});

// Log event object to console
cheese.addEventListener('click', (event) => {
    console.log(event);

// Move the animated element to the click position
    cat.style.top = `${event.clientY - 25}px`;
    cat.style.left = `${event.clientX - 25}px`;

    sigma.textContent = "Uh oh! Kitty wants to eat you too! 😦";
});

// Add a double-click event to trigger a scale animation
cheese.addEventListener('dblclick', () => {
        cat.classList.add('double-click-animation');

        // Remove the class after animation to reset
        setTimeout(() => {
        cat.classList.remove('double-click-animation');
    }, 500);
});
