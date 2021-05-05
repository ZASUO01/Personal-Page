const loadingDiv = document.querySelector('#loading');
const body = document.querySelector('body');

const sleep = (timeMs) => {
    return new Promise(resolve => setTimeout(resolve, timeMs));
}

const closeWindow = async () => {
    await sleep(3000);
    loadingDiv.style.opacity = '0';
    body.style.overflow = 'visible';
    await sleep(1000);
    loadingDiv.style.display = 'none';
}

closeWindow();



