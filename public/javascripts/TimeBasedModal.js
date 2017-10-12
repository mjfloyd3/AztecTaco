
var modals = document.getElementById('modalcontent');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

closeBtn.addEventListener('click', closeModal);


function openModal(){
	modals.style.display = 'block';
}

function closeModal(){
	modals.style.display = 'none';
}


setTimeout(openModal, 4000);

