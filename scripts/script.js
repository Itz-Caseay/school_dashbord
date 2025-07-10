/* Dont touch anything here please */

function date() {
    alert('Recaptcha not available for the moment');
}

const menu = document.getElementById('menu');
const navLinks = document.getElementById('navLinks');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('left-nav');
});

document.getElementById('menu').addEventListener('click', function() {
            document.getElementById('navLinks').style.display = 'block';
        });

        document.getElementById('navLinks').addEventListener('click', function(){
            document.getElementById('navLinks').style.display = 'none';
        });
        