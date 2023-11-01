const title= document.getElementById('title')

title.textContent= 'Fundamentals of JS'

const list1= document.querySelector('ul > li')
list1.innerText= 'Pepsi'

const list2= document.querySelector('ul :nth-child(2)')
list2.innerText= 'Coke'

const list= document.querySelectorAll('li')
list[3].textContent= 'Smirnoff'
list[4].textContent= 'Sitendo'
list[5].textContent= 'Simengbo'
list[2].textContent= 'Silifa'

const para= document.querySelector('p')
para.innerHTML= '<strong>Adeoluwa</strong> said <q><em>Dey Play My Fans</em></q>'

const title2= document.querySelector('#title')
title2.style.background= "#00f"
title2.style.textTransform= 'uppercase'
title2.style.fontStyle= 'italic'

document.getElementsByClassName('para')[0].style.fontSize= '2rem'
document.getElementsByTagName('p')[0].innerHTML= 'alcohol'