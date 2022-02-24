const toggle = document.querySelector('.toggle')

const card = document.querySelector('.container-cards')

toggle.addEventListener('change', function () {
  card.classList.toggle('show-monthly')
})
