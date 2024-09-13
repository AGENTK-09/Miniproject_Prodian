const cardmain = document.querySelector('.cardmain');
const searchBtn = document.querySelector('.search-btn')
const dataArray = [];

async function fetchdata(){ 
    try {
        const res = await fetch('data.json');
        if (!res.ok) {
            console.log('Response not found');
            return; 
        }
        const someData = await res.json();
        if(someData){
            dataArray.push(someData.data);
        }
        
        someData.data.map((data, id) => {
            const card = document.createElement('div');
            card.classList.add('cards');
            card.setAttribute('data-aos', 'fade-up');

            card.innerHTML = `
                    <div class="card mb-4">
                        <img src="${data.img}" class="card-img-top" alt="${data.title}"></img>
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.description}</p>
                        </div>
                        <div class="mb-5 d-flex justify-content-around">
                            <h3>${data.price}</h3>
                            <button class="btn btn-primary buy-btn" data-url="${data.url}">Buy Now</button>
                        </div>
                    </div>`;
            
            cardmain.appendChild(card);
        });
    
        const buttons = document.querySelectorAll('.buy-btn');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const url = event.target.getAttribute('data-url'); // Get the product URL from the button's data attribute
                window.location.href = url; // Redirect to the specific product URL
            });
        });
    
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('video').addEventListener('click', function() {
    const background = document.getElementById('bg-container');

    document.getElementById("over").style.position="fixed";
})

// Fetch the data once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchdata);

//search functionality
async function searchfunction(data){
    console.log(data);
    cardmain.innerHTML = '';
    data.map((data, id) => {
        const card = document.createElement('div');
        card.classList.add('cards');
        card.setAttribute('data-aos', 'fade-up');

        card.innerHTML = `
                <div class="card mb-4 key = ${id}">
                    <img src="${data.img}" class="card-img-top" alt="${data.title}"></img>
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                    </div>
                    <div class="mb-5 d-flex justify-content-around">
                        <h3>${data.price}</h3>
                        <button class="btn btn-primary buy-btn" data-url="${data.url}">Buy Now</button>
                    </div>
                </div>`;
        
        cardmain.appendChild(card);
})
}

function filtercards(){
    
    const input = document.querySelector('.input').value.toLowerCase();
    const filterValues = dataArray[0].filter(item => item.title.toLowerCase().includes(input));
    searchfunction(filterValues);
}

searchBtn.addEventListener('click', filtercards);














// document.getElementById('video').addEventListener('click', function () {
//     const overlay = document.getElementById('over');
//     const bgContainer = document.getElementById('background-container');
    
//     // Toggle overlay visibility and blur background
//     overlay.style.display = (overlay.style.display === 'block' ? 'none' : 'block');
//     bgContainer.classList.toggle('blurred');
// });

//search functionality




// fetch("data.json").then((res) => res.json())
//     .then((data) => console.log(data))
//         .catch((error) => console.error("Unable to fetch data", error))
