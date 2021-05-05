const loadingDiv = document.querySelector('#loading');
const body = document.querySelector('body');

const sleep = (timeMs) => {
    return new Promise(resolve => setTimeout(resolve, timeMs));
}

const closeWindow = async () => {
    body.style.overflow = 'hidden';
    await sleep(3000);
    loadingDiv.style.opacity = '0';
    body.style.overflow = 'initial';
    await sleep(1000);
    loadingDiv.style.display = 'none';
}

closeWindow();



