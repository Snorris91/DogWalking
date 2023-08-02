import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const walkersId = clickTarget.dataset.walkerkey
        
        for (const walker of walkers) {
            if (walker.id === parseInt(walkersId)){
                window.alert(`${walker.name} is servicing this city`)
            }
            
        }

    }   
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-walkerKey="${walker.id}">${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

