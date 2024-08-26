document.addEventListener('DOMContentLoaded', function() {
    var projectLink = document.querySelector('.fixed-bottom-left');

    if (projectLink) {
        projectLink.addEventListener('click', function() {

            var jumbledProjects = JSON.parse(sessionStorage.getItem('jumbledProjects'));

            var currentProject = window.location.pathname.split('/').pop();

            var currentIndex = jumbledProjects.indexOf(currentProject);
            if (currentIndex === -1) {
                console.error('Current project not found in jumbledProjects');
                return;
            }
            var nextIndex = (currentIndex - 1 + jumbledProjects.length) % jumbledProjects.length;
            var nextProject = jumbledProjects[nextIndex];

            window.location.href = nextProject;
        });
    } else {
        console.log('didnt click button - left'); 
    }
});
