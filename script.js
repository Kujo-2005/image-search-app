const accessKey = "CjxTG35kxpM4OTpvotyO76VpyA28lXkHfpt7dsKm51E";
let formE1 = document.querySelector("form");
let inputElement = document.getElementById("search-id");
let searchResults = document.querySelector(".result-area");
let showMoreBttn = document.getElementById("showMore-bttn");
let inputValue = " ";
let page = 1;

async function searchImage(){
    inputValue = inputElement.value;  
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;
    console.log(url);
    const response = await fetch(url);
    const data  = await response.json();
    const results = data.results;
    if(page === 1){
        searchResults.innerHTML = "";
    }
    results.map((result)=>{
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("results");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";
        imgLink.textContent = result.alt_description;
        imgWrapper.appendChild(image);
        imgWrapper.appendChild(imgLink);
        searchResults.appendChild(imgWrapper);
    });
    


    
    page++;

    if (page>1){
        showMoreBttn.style.display = "block";
    }
    console.log(page);
}

formE1.addEventListener("submit",(event) => {
    event.preventDefault();
    page = 1;
    searchImage();
});
showMoreBttn.addEventListener("click",()=>{
    searchImage();
})