const btn = document.querySelector('.button')

btn.style.color = '#111111'
btn.onmouseover = ()=>{

    document.querySelector('body').style.transition = '.5s'
    document.querySelector('body').style.background = '#111111'
    btn.style.color = '#cccccc'

}
btn.onmouseout = ()=>{

    document.querySelector('body').style.background = 'white'
    btn.style.color = '#111111'

}