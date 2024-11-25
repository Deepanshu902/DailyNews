const container = document.querySelector(".container");


async function fetchData(){
    try{
    let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a61963f22fc84863aad4d395bc17fac5")
    let data = await response.json()
    console.log(data);
    
        for(let item of data.articles){
            const card = document.createElement("div"); 
            card.classList.add("news-card");
            
           
            card.innerHTML = `
              <div class="news-image-container">
                <img src="${item.urlToImage}" alt="News Image" />
              </div>
              <div class="news-content">
                <div class="news-title">${item.title}</div>
                <div class="news-description">${item.description || item.content || ""}</div>
                 <a href="${item.url}" target="_blank" class="view-button">Read More</a>
              </div>
            `;
            
            
            container.appendChild(card);                
        }
        }
    catch(error){
        console.error(error)
    }
}

fetchData()