
const URL ='https://dog.ceo/api/breeds/list/all';
const select =document.getElementById('select')
const btn=document.querySelector('.add')
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        console.log(breedsArray);

        for (let i = 0; i < breedsArray.length; i++){
            const option = document.createElement('option')
            option.value = breedsArray[i]
            option.innerText = breedsArray[i]
            select.appendChild(option)
        }
    })




function addS(){


    
    let url = `https://dog.ceo/api/breed/${select.value}/images/random`
    
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        const img = document.createElement('img')
        img.src = data.message
        img.alt = 'Dog'
        console.log(data.message);
    document.querySelector('.dogs').appendChild(img)
    })

}

btn.addEventListener('click', addS)