const curriculum = document.querySelector('#curriculum');
import mypdf from '../assets/cv.pdf';

const a = document.createElement('a');

const i = document.createElement('i');
i.classList.add('fas');
i.classList.add('fa-download');

const span = document.createElement('span');
span.textContent =  'Baixar meu currículo';

a.appendChild(i);
a.appendChild(span);

a.href = mypdf;
a.download = 'CV-Pedro.pdf';

curriculum.appendChild(a);