const modal = document.querySelector('.modal')
const btn = document.querySelector('.modal-link')
const closebtn = document.querySelector('.leave-btn')
const linkreg = document.querySelector('.trans-link')
const reg = document.querySelector('.modalreg')
const lonklog = document.querySelector('.trans-linkreg')
const closebtnreg = document.querySelector('.leave-btnreg')


btn.addEventListener('click', () => {
  modal.style.display = 'block';
})

closebtn.addEventListener('click', () => {
  modal.style.display = 'none';
})

closebtnreg.addEventListener('click', () => {
  reg.style.display = 'none';
})

linkreg.addEventListener('click', () => {
  modal.style.display = 'none';
  reg.style.display = 'block';
})

lonklog.addEventListener('click', () => {
  reg.style.display = 'none';
  modal.style.display = 'block';
})