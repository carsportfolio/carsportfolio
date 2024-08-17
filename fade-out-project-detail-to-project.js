document.addEventListener('DOMContentLoaded', function() {
    var myLink = document.getElementById('projectdetailtoprojectfadeout');

    if (myLink) {
        myLink.addEventListener('click', function() {
            event.preventDefault();
            document.getElementById('project-detailsfade').classList.remove('fade-in');
            document.getElementById('project-detailsfade').classList.add('fade-out');
            document.getElementById('footerproject-details').classList.remove('fade-in');
            document.getElementById('footerproject-details').classList.add('fade-out');
            
            setTimeout(function() {
            window.location.href = myLink.href;
            }, 500); 
        });
    }
});