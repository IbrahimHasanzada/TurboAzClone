let markalarMobile = [
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F18%2F16%2F53%2F52%2Fc0231997-84f3-4e49-8a46-15d634db7502%2Fmercedes-benz-9%4054x.png",
        markaM: "Mercedes"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F18%2F16%2F50%2F49%2F936b5858-fc12-4591-b7b0-5ab6185901f1%2F1280px-KIA_logo3.svg%4054x.png",
        markaM: "Kia"
    },
    {
        img: "https://turbo.azstatic.com/media/W1siZiIsIjIwMTMvMDYvMTQvMjAvNDMvMzMvNDM0L0ZvcmQucG5nIl0sWyJwIiwidGh1bWIiLCI2MHgiXV0?sha=9e1ad2ef45808800 ",
        markaM: "Ford"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F17%2F12%2F28%2F04%2Fabffa099-dd57-486e-8757-3b88f47124c9%2Fabarth%4034x.png",
        markaM: "Abarth"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F17%2F12%2F28%2F29%2F5a6e2d2a-2232-4f33-9ab8-cd716dbb6986%2Facura%4034x.png",
        markaM: "Acura"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2022%2F07%2F07%2F15%2F18%2F11%2F73ce83ae-d4ad-4600-9fc9-6d2ab316b65c%2Fc.moto.png",
        markaM: "C.Moto"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F17%2F12%2F31%2F01%2F39a381ca-8820-4b18-ae84-32664c4d9e22%2Faudi_-%20logo-100x62%4034x.png",
        markaM: "Audi"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2022%2F02%2F08%2F14%2F43%2F59%2F5bc81407-77dd-4445-9252-8fcee0de4ac7%2Fbestune-logo-600x1100-show.png",
        markaM: "Bestune"
    },
    {
        img: "https://turbo.azstatic.com/media/W1siZiIsIjIwMTMvMDYvMTQvMjAvNDIvNTQvMTMzL0ZlcnJhcmlfMi5wbmciXSxbInAiLCJ0aHVtYiIsIjYweCJdXQ?sha=61a859628643e840",
        markaM: "Ferrari"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2022%2F02%2F08%2F14%2F45%2F21%2F189c8a7c-2376-4ae5-87af-879e105efe62%2Fhongqi-logo-2018-800x600.png",
        markaM: "Honggi"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F17%2F14%2F57%2F27%2F2658dcab-e47b-49b8-bfd7-da790add4b2e%2Fjaguar%4034x.png",
        markaM: "Jaguar"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F17%2F16%2F29%2F57%2F4ef4451e-a476-46e7-b9c6-551e012f24f5%2FPAZ%4034x.png",
        markaM: "Paz"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F17%2F16%2F56%2F23%2F0df96f44-68e6-425b-9eff-a877b62fb6b1%2FPorsche_logo.png",
        markaM: "Porsche"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F18%2F16%2F54%2F44%2F9d109024-d1c6-436c-a735-865be0b23edc%2Ftoyota%20copy%203%4054x.png",
        markaM: "Toyota"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F17%2F12%2F28%2F49%2F7910541b-3fd3-4466-9208-884f241719e6%2Falfa%4034x.png",
        markaM: "Fusion"
    },
    {
        img: "https://turbo.azstatic.com/uploads/makelogo/2021%2F05%2F18%2F16%2F53%2F06%2F2e705e42-c1df-42d2-bcdb-9abebbf92241%2FGroup%2015%4054x.png",
        markaM: "Chevrolet"
    },
]

const carsMobile = document.getElementById("open-header-cars")
const opHeader = document.querySelector("#open-mobile-header")
const sites = document.getElementById("saytlar")
const main = document.getElementById("cars-place")
const searchModelInp = document.getElementById("searchCarsModel")
function Goster(){
    markalarMobile.map((item, i) => {
        carsMobile.innerHTML +=
            `<div onclick="showCarsModel(${i})" id="marka-names" value="${item.markaM}">
            
                <img id="marka-logo" src="${item.img}"  alt="marka-logo" />
            
            <h3>${item.markaM}</h3>
        </div>`
    })

}
Goster()
function allMarka() {
    sites.style.display = 'none'
    opHeader.style.display = 'block'
    main.style.display = 'none'
}
function leave() {
    sites.style.display = 'block'
    opHeader.style.display = 'none'
    main.style.display = 'block'
}

function showCarsModel(a) {
    const markaTap = document.querySelectorAll("#marka-names h3")
    leave()
    carsCard.innerHTML = ''
    let filtered = cars
    for (let i = 0; i < markaTap.length; i++) {
        if(a == i){
        filtered = filtered.filter((item) => {
            if (markaTap[i].innerHTML == item.brand) {
                carsCard.innerHTML += ShowCards(item)
            }
        })
        break
    }
    }
    
}
function searchModel(){
    carsMobile.innerHTML = ''
    markalarMobile.map((item, i) => {
        if(item.markaM.toLocaleLowerCase().includes(searchModelInp.value)){
            carsMobile.innerHTML +=
        `<div onclick="showCarsModel(${i})" id="marka-names" value="${item.markaM}">
        
            <img id="marka-logo" src="${item.img}"  alt="marka-logo" />
        
        <h3>${item.markaM}</h3>
    </div>`
        }
    })
    
}

const first = document.getElementById("filtir-button-second-child-first-element")
const second = document.getElementById("filtir-button-second-child-second-element")
const third = document.getElementById("filtir-button-second-child-last-element")

function colFirst(){
    first.classList.toggle('colorDeyis')
}
function colSecond(){
    second.classList.toggle('colorDeyis')
    first.style.backgroundColor = '#fff'
    first.style.color = '#000'
}
function colThird(){
    third.classList.toggle('colorDeyis')
    first.style.backgroundColor = '#fff'
    first.style.color = '#000'
}
