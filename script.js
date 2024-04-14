document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('nextButton');
    const previousButton = document.getElementById('previousButton');

    if (nextButton) {
        nextButton.addEventListener('click', function () {
         window.location.href = 'nextpage.html'; // Redirect to the next page
        });
    }

    previousButton.addEventListener('click', function () {
        window.location.href = 'index.html'; // Redirect back to the previous page
    });
});
