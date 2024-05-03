window.onload = function() {
    const pages = {
        "Python": "python.html",
        "JavaScript": "js.html",
        "HTML": "html.html",
        "CSS": "css.html",
        "PHP": "php.html",
        "Java": "java.html",
        "C": "c.html"
    };

    Object.keys(pages).forEach(function(key) {
        let element = document.getElementById(key);
        if (element) { 
            element.onclick = function() {
                window.location.href = pages[key];
            };
        }
    });

    let more1 = document.getElementById('aboutmore');
    more1.onclick = function() {
        window.location.href ='about.html';
    };
    let more2 = document.getElementById('projectsmore');
    more2.onclick = function() {
        window.location.href ='projects.html';
    };
}                               
