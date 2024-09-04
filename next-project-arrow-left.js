document.addEventListener('DOMContentLoaded', function() {
    var projectLinkLeft = document.querySelector('.fixed-bottom-left');

    if (projectLinkLeft) {
        projectLinkLeft.addEventListener('click', function() {
            var jumbledProjects = JSON.parse(sessionStorage.getItem('jumbledProjects'));
            var currentProject = window.location.pathname.split('/').pop();
            var currentIndex = jumbledProjects.indexOf(currentProject);

            if (currentIndex === -1) {
                console.error('Current project not found in jumbledProjects');
                return;
            }

            var prevIndex = (currentIndex - 1 + jumbledProjects.length) % jumbledProjects.length;
            var prevProject = jumbledProjects[prevIndex];

            // Fade out the current project
            document.getElementById('project-detailsfade').classList.remove('fade-in');
            document.getElementById('project-detailsfade').classList.add('fade-out');
            document.getElementById('footerproject-details').classList.remove('fade-in');
            document.getElementById('footerproject-details').classList.add('fade-out');
            document.getElementById('project-infofade').classList.remove('fade-in');
            document.getElementById('project-infofade').classList.add('fade-out');

            setTimeout(function() {
                // Navigate to the previous project after fade-out
                window.location.href = prevProject;
            }, 500);
        });
    }

    // Fade in the new project on page load
    document.getElementById('project-detailsfade').classList.remove('fade-out');
    document.getElementById('project-detailsfade').classList.add('fade-in');
    document.getElementById('footerproject-details').classList.remove('fade-out');
    document.getElementById('footerproject-details').classList.add('fade-in');
    document.getElementById('project-infofade').classList.remove('fade-out');
    document.getElementById('project-infofade').classList.add('fade-in');
});
