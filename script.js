// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const searchBtn = document.getElementById('search-btn');
    const searchDiv = document.getElementById('search');
    const searchClose = document.getElementById('search-close');
    const loginBtn = document.getElementById('logo'); // Assuming logo is used to trigger login form
    const loginDiv = document.getElementById('login');

    // Function to toggle visibility
    function toggleVisibility(element) {
        element.style.display = element.style.display === 'none' || element.style.display === '' ? 'block' : 'none';
    }

    // Add click event to search button
    searchBtn.addEventListener('click', () => {
        toggleVisibility(searchDiv);
    });

    // Add click event to search close button
    searchClose.addEventListener('click', () => {
        searchDiv.style.display = 'none';
    });

    // Add click event to login button
    loginBtn.addEventListener('click', () => {
        toggleVisibility(loginDiv);
    });
});
