const typingElement = document.querySelector('#type-sentence-container');

const sentencesList = [
    "programador.",
    "amante da tecnologia.",
    "fã de jogos antigos."
];


const sleep = (timeMs) => {
    return new Promise(resolve => setTimeout(resolve, timeMs));
}

const typeSentence = async (sentence, element, delay) => {
    const letters = sentence.split('');
    let charIndex = 0;
    while(charIndex < letters.length){
        await sleep(delay);
        element.innerHTML += letters[charIndex];
        charIndex++;
    }
    return
}

const deleteSentence = async (element, delay) => {
    const sentence = element.textContent;
    const letters = sentence.split('');
    while(letters.length > 0){
        await sleep(delay);
        letters.pop();
        element.innerHTML = letters.join('');
    }
}

const typeCarousel = async (sentenceList, element) => {
    let index = 0;
    while(true){
        await typeSentence(sentenceList[index], element, 100);
        await sleep(1500);
        await deleteSentence(element, 100);
        await sleep(500);
        index ++;
        if(index >= sentenceList.length) index = 0;
    }
}

const type = async () => {
    await typeCarousel(sentencesList, typingElement);
}

type();