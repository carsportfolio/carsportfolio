document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById('backButton');

    if (backButton) {
        backButton.addEventListener('click', function() {
            sessionStorage.setItem('restoreCurrentOrder', 'true');
            var backSection = sessionStorage.getItem('backSection');
            if (backSection) {
                window.location.href = 'index.html#' + backSection;
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    var projectIds = ['projectfade1', 'projectfade2', 'projectfade3', 'projectfade4', 'projectfade5'];

    projectIds.forEach(function(projectId) {
        var projectElement = document.getElementById(projectId);

        if (projectElement) {
            projectElement.addEventListener('click', function() {
                sessionStorage.setItem('backSection', projectId);
            });
        }
    });
});
