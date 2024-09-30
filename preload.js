document.addEventListener('DOMContentLoaded', function() {
    preloadPageUsingIframe('project1.html');
    preloadPageUsingIframe('project2.html');
    preloadPageUsingIframe('project3.html');
    preloadPageUsingIframe('project4.html');
    preloadPageUsingIframe('project5.html');
    preloadPageUsingIframe('project6.html');
    preloadPageUsingIframe('project7.html');
    preloadPageUsingIframe('project8.html');
    preloadPageUsingIframe('about.html');
});

function preloadPageUsingIframe(url) {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;

    iframe.onload = function() {
        console.log(`Page loaded via iframe: ${url}`);
    };

    iframe.onerror = function() {
        console.error(`Error loading page via iframe: ${url}`);
    };

    document.body.appendChild(iframe);
}

