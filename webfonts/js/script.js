/* ==================== Typing animation =============================*/
var typed = new Typed(".typing", {
    strings:["","Developpeur web", "Web Designer", "Developpeur Application Web", "Developpeur Application Mobile"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

/* ===================== Form CONTACT =============================*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-mail'),
contactObj = document.getElementById('contact-objet'),
contactText = document.getElementById('contact-text'),
errorMessage = documet.getElementById('error-message');

const SendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' ||
        contactEmail.value === '' || 
        contactObj.value === '' || 
        contactText.value === ''
        ) {
        errorMessage.textContent = 'Veuillez remplir tous les champs'; 
    }
    else{
        emailjs.sendForm('','','#contact-form','').then(() => {
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message envoye';


            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000)
        }, (error) => {
            alert('OOPS! SOMETHING WENT WRONG...', error);
        });

        contactName.value = '';
        contactEmail.value = '';
        contactObj.value = '';
        contactText.value = '';
    }
}

contactForm.addEventListener('submit', SendEmail);
