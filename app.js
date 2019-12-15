const firstField = document.querySelector('#first');
const secondField = document.querySelector('#second');
firstField.addEventListener('click', makeLargeFirstLog);
secondField.addEventListener('click', makeLargeSecondLog);

function makeLargeFirstLog() {
    firstField.setAttribute('style', 'width: 385px; transition: 1.2s');
};
function makeLargeSecondLog() {
    secondField.setAttribute('style', 'width: 385px; transition: 1.2s');
};

document.getElementById('btn').addEventListener('submit', sendLogin);
function sendLogin(e) {
    console.log('Sended...');
    
    e.preventDefault();
};

document.getElementById('btn').addEventListener('mousedown', widthButton);
function widthButton() {
    alert("why it happend?")
    //document.getElementById('btn').style.width = '400px';
};
