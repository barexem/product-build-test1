document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    }

    // Theme toggle logic
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });

    generateBtn.addEventListener('click', () => {
        generateNumbers();
    });

    function generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        displayNumbers(Array.from(numbers).sort((a, b) => a - b));
    }

    function displayNumbers(numbers) {
        numbersContainer.innerHTML = '';
        for (const number of numbers) {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'number';
            numberDiv.textContent = number;
            numbersContainer.appendChild(numberDiv);
        }
    }
});
