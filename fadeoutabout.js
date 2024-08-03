document.addEventListener('DOMContentLoaded', function() {
    var myLink = document.getElementById('projectlinkfadeout');

    if (myLink) {
        myLink.addEventListener('click', function() {
            event.preventDefault();
            document.getElementById('about').classList.remove('fade-in');
            document.getElementById('about').classList.add('fade-out');
            document.getElementById('contact').classList.remove('fade-in');
            document.getElementById('contact').classList.add('fade-out');
            document.getElementById('footer').classList.remove('fade-in');
            document.getElementById('footer').classList.add('fade-out');
            
            setTimeout(function() {
            window.location.href = myLink.href;
            }, 500); 
        });
    }
});