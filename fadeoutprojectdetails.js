document.addEventListener('DOMContentLoaded', function() {
    var linkIds = ['projectfade1', 'projectfade2', 'projectfade3', 'projectfade4', 'projectfade5'];

    for (var i = 0; i < linkIds.length; i++) {
        var linkId = linkIds[i];
        var linkElement = document.getElementById(linkId);

        if (linkElement !== null) {
            linkElement.addEventListener('click', function(event) {
                event.preventDefault();

                var link = event.target.closest('a');
                if (link && link.href) {
                    var myLinkHref = link.href;

                    document.getElementById('projects').classList.remove('fade-in');
                    document.getElementById('projects').classList.add('fade-out');
                    document.getElementById('footerproject').classList.remove('fade-in');
                    document.getElementById('footerproject').classList.add('fade-out');
                    
                    setTimeout(function() {
                        window.location.href = myLinkHref;
                    }, 500); 
                }
            });
        }
    }
});
