// TODO: Clean this shitty code up.
function toggleRadio(id) {
    var inputElement = document.getElementById(id);
    var labelElement = document.querySelector('label[for="' + inputElement.id + '"]');
    if (labelElement) {
        labelElement.toggleAttribute('hidden');
    }
}

document.getElementById('__sidebars_1').addEventListener('click', () => {
    const sidebars = document.querySelectorAll('.md-sidebar');
    sidebars.forEach(sidebar => {
        sidebar.classList.toggle('hidden'); 
    });
    toggleRadio('__sidebars_1');
    toggleRadio('__sidebars_2');
});
document.getElementById('__sidebars_2').addEventListener('click', () => {
    const sidebars = document.querySelectorAll('.md-sidebar');
    sidebars.forEach(sidebar => {
        sidebar.classList.toggle('hidden'); 
    });
    toggleRadio('__sidebars_1');
    toggleRadio('__sidebars_2');
});

// Initial state (optional)
//const sidebars = document.querySelectorAll('.md-sidebar');
//sidebars.forEach(sidebar => {
//    sidebar.classList.add('hidden'); 
//});
