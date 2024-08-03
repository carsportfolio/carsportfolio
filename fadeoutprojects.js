document.addEventListener('DOMContentLoaded', function() {
    var myLink = document.getElementById('aboutlinkfadeout');

    if (myLink) {
        myLink.addEventListener('click', function() {
            event.preventDefault();
            document.getElementById('projects').classList.remove('fade-in');
            document.getElementById('projects').classList.add('fade-out');
            document.getElementById('footerproject').classList.remove('fade-in');
            document.getElementById('footerproject').classList.add("fade-out");
            
            setTimeout(function() {
            window.location.href = myLink.href;
            }, 500);
        });
    }
});