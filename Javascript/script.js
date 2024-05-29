const hd = document.getElementById("hide-header")
const od = document.getElementById("open-header")
let x = 0
function hide() {
    x++
    if (x % 2) {
        od.style.display = 'block'
            hd.innerHTML = 'Gizlət ˄'
    } else {
        od.style.display = 'none'
        hd.innerHTML = 'Daha çox filtr ˅'
    }
}

    const kredit = document.getElementById("valyuta-kredit")
    const barter = document.getElementById("valyuta-barter")
    function Kredit(){
        kredit.classList.toggle('button-color')
    }

    function Barter(){
        barter.classList.toggle('button-color')
    }

    const hamisi = document.getElementById("third-header-buttons-first")
    const middle = document.getElementById("third-header-buttons-middle")
    const last = document.getElementById("third-header-buttons-last")
        hamisi.style.backgroundColor = '#ca1016'
        hamisi.style.color = '#FFF'
    function veziyyetHam(){
        hamisi.style.backgroundColor = '#ca1016'
        hamisi.style.color = '#FFF'
        middle.style.backgroundColor = '#FFF'
        middle.style.color = '#8d94ad'
        last.style.backgroundColor = '#FFF'
        last.style.color = '#8d94ad'
    }
    function veziyyetMid(){
        middle.style.backgroundColor = '#ca1016'
        middle.style.color = '#FFF'
        hamisi.style.backgroundColor = '#FFF'
        hamisi.style.color = '#8d94ad'
        last.style.backgroundColor = '#FFF'
        last.style.color = '#8d94ad'
    }
    function veziyyetLast(){
        middle.style.backgroundColor = '#FFF'
        middle.style.color = '#8d94ad'
        hamisi.style.backgroundColor = '#FFF'
        hamisi.style.color = '#8d94ad'
        last.style.backgroundColor = '#ca1016'
        last.style.color = '#FFF'
    }

    const li = document.querySelectorAll('.li')
    function buttonVal(z){
        for (let i = 0; i < li.length; i++) {
            if(i+1 == z){
                li[i].classList.toggle('button-color')
            }
        }
    }