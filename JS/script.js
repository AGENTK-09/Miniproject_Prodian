const cardmain = document.querySelector('.cardmain');

async function fetchdata(){ 
    try {
        const res = await fetch('data.json');
        if (!res.ok) {
            console.log('Response not found');
            return;  // Exit if there's an issue with the response
        }
        const someData = await res.json();
        
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

// Fetch the data once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchdata);








// fetch("data.json").then((res) => res.json())
//     .then((data) => console.log(data))
//         .catch((error) => console.error("Unable to fetch data", error))


// fetchdata(); 

// function displayproducts(products){
//     const container = document.getElementsByClassName("card"); //get container where we want to insert the prod
//     container.innerHTML = ''; // to clear the container for inserting other new content

//     products.forEach((product) => {
//         const productHTML = 
//             `<div class="col-md-4">
//                 <div class="card mb-4">
//                     <img src="${product.img}" class="card-img-top" alt="${product.title}"></img>
//                     <div class="card-body">
//                         <h5 class="card-title">${product.title}</h5>
//                         <p class="card-text">${product.description}</p>
//                     </div>
//                     <div class="mb-5 d-flex justify-content-around">
//                         <h3>$${product.price}</h3>
//                         <a href="${product.url}" class="btn btn-primary">Buy Now</a>
//                     </div>
//                 </div>
//             </div>`;
    
//         container.insertAdjacentHTML('beforeend', productHTML);
//     });
// }

// document.addEventListener('DOMContentLoaded', fetchproducts);