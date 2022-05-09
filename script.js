'use strict';

//sellecting classes to manipulate
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function to close model
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//function to open moda
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// to open modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);
}

//to close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//to close modal using Esc button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
