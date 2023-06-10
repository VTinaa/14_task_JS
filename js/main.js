
let items_gen = document.querySelectorAll('.drop_down>li')
let arrows = document.querySelectorAll('.drop_down>li span:last-child')
let items = document.querySelectorAll('.items')
let items_info = document.querySelectorAll('.drop_down ul:last-child li')
let blocks = document.querySelectorAll('.more')
for (let i = 0; i < items_gen.length; i++) {
    items_gen[i].addEventListener('click', () => {
        items_gen[i].nextElementSibling.classList.toggle('none');

        console.log(items_gen[i].lastElementChild)
        items_gen[i].lastElementChild.classList.toggle('rotete_arr')

    })
    arrows[i].addEventListener('mouseenter', () => {
        if (!items_gen[i].nextElementSibling.classList.contains('none')) return;
        arrows[i].classList.remove('rotete_arr')
    })
    arrows[i].addEventListener('mouseleave', () => {
        if (!items_gen[i].nextElementSibling.classList.contains('none')) return;

        arrows[i].classList.add('rotete_arr')
    })
}
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseenter', () => {
        items[i].classList.add('move_item')
    })
    items[i].addEventListener('mouseleave', () => {
        items[i].classList.remove('move_item')
    })
}

for (let i = 0; i < items_info.length; i++) {
    items_info[i].addEventListener('click',()=>{
        blocks[i].classList.remove('none')
    })
    blocks[i].addEventListener('click',()=>{
        blocks[i].classList.add('none')
    })
}