document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('X-button');
    const element = document.getElementById('project-infofade');

    button.addEventListener('click', function() {
        if (element.classList.contains('button-before')) {
            element.classList.remove('button-before');
            element.classList.add('button-after');
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        } else {
            element.classList.remove('button-after');
            element.classList.add('button-before');
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }
    });
});
