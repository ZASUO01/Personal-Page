import emailjs from 'emailjs-com';
const form = document.querySelector('#mail-form');

const handleSubmit = (e) => {
    e.preventDefault();
    const messageData = {
        name: form['name'].value,
        email: form['email'].value,
        message: form['message'].value
    }
    const template_id = 'template_1gor4wg';
    const service_id = 'service_uo1loz8';
    const user_id = 'user_tpORMwQw530dSNc8wXrAm';
    emailjs.send(service_id, template_id, messageData, user_id).then((res) => {
        alert('Mensagem enviada.');
        form['name'].value = '';
        form['email'].value = '';
        form['message'].value = '';
        window.scrollTo(0,0);
    }).catch((err) => {
        console.log(err.message);
    });
}

form.addEventListener('submit', (e) => {
    handleSubmit(e);
})



