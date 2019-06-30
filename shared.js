var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

selectPlanButtons.forEach(button => {
    button.addEventListener('click', () => {
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
});

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    if (backdrop) {
        backdrop.classList.remove('open');
    }
    if (modal) {
        modal.classList.remove('open');
    }
}