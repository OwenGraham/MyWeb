var observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true)
        document.querySelector('#welcomeText').animate([{opacity: 0}, {opacity: 1}], 2000,)
}, {threshold: [0]});

var testy = document.querySelector('#welcome');
observer.observe(testy);