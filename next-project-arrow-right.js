document.addEventListener('DOMContentLoaded', function() {
    var projectLink = document.querySelector('.fixed-bottom-right');

    if (projectLink) {
        projectLink.addEventListener('click', function() {
            console.log('Button clicked');

            var jumbledProjects = JSON.parse(sessionStorage.getItem('jumbledProjects'));
            console.log('Jumbled Projects:', jumbledProjects);

            var currentProject = window.location.pathname.split('/').pop();
            console.log('Current Project:', currentProject);

            var currentIndex = jumbledProjects.indexOf(currentProject);
            if (currentIndex === -1) {
                console.error('Current project not found in jumbledProjects');
                return;
            }
            var nextIndex = (currentIndex + 1) % jumbledProjects.length;
            var nextProject = jumbledProjects[nextIndex];

            window.location.href = nextProject;
        });
    } else {
        console.log('didnt click button - right'); 
    }
});
