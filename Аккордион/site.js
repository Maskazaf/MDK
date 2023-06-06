let tabs = document.querySelectorAll('.tab');

tabs.forEach(function(tab) {
    let link = tab.querySelector('.link a');
    let text = tab.querySelector('.text');

link.addEventListener('click', function(e)  {
    e.preventDefault();

if (tab.classList.contains('active')) {
    text.style.display = 'none';
    tab.classList.remove('active');
}
else {
    tabs.forEach(function(tab)  {
        tab.classList.remove('active');
        tab.querySelector('.text').style.display = 'none';
    });

    text.style.display = 'block';
    tab.classList.add('active');
}
});
});