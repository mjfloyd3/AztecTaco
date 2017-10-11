
var modal = document.getElementById('modalcontent');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

closeBtn.addEventListener('click', closeModal);


function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}


setTimeout(openModal, 5000);

