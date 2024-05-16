//Roadmap

//Gavus duomenys is api. Uzpildyti vietovemis select elementa.
//1. gavus duomenis is api uzpildyti vietovemis select elementa
//2. gauti vietoviu json is api ServiceWorkerRegistrationconsolinti duomenis, isitikinti, kad juos gavome
 
 
 /*
const getPlaces= async()=>{
    const data = await fetch('https://api.meteo.lt/v1/places')
    .then(response=>{return response.json()})
    return data
    }
     
     
    //3. sukurti tiek option elementu kiek yra vietoviu
    const renderPlaces = async() =>{
        const data = await getPlaces();
        //console.log("is kitos funkcijos", data)
        for(let place of data){
            console.log(`${place.name} --- ${place.administrativeDivision}`)
            let option = document.createElement("option");
            option.textContent = `${place.name} --- ${place.administrativeDivision}`;
            // document.querySelector("select").appendChild(option);
            document.querySelector('datalist').appendChild(option);
        }
    }
     
    //4. i option elementa ideti vietoves pavadinima
    export default renderPlaces;
    */
    //antras darbas pasto kodas

    const form = ()=>{
        return `<div class="form-group mb-2">
        <input type="text" class="form-control term" placeholder="Jusu adresas">
        </div>
        <div class="form-group mb-2">
        <input type="text" class="form-control result" readonly>
        </div>
        <button type="submit" class="btn btn-primary mb-2">ieskoto kodo</button>
        `
    }
    export default form;