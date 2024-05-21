// feach json file////////////

// document.addEventListener('DOMContentLoaded', function() {

//     fetch('./discord_data.json')
//         .then(response => response.json())
//         .then(data => {
//             data.data.forEach(item => {
                
//                 var title = item.title;
//                 var description = item.description;
//                 var online = item.online;
//                 var members = item.members;
//                 var imageURL = item.image; 
                
//                 var itemContainer = document.createElement('div');
//                 itemContainer.classList.add('items');

//                 var leftSide = document.createElement('div');
//                 leftSide.classList.add('left-side');

//                 var imageContainer = document.createElement('div');
//                 imageContainer.classList.add('image-container');

//                 var img = document.createElement('img');
//                 img.src = imageURL; 
//                 img.classList.add('item-image');
//                 img.alt = 'item-image'; 

//                 imageContainer.appendChild(img);
//                 leftSide.appendChild(imageContainer);

//                 var rightSide = document.createElement('div');
//                 rightSide.classList.add('right-side');

//                 var h6Title = document.createElement('h6');
//                 h6Title.textContent = title;

//                 var pDescription = document.createElement('p');
//                 pDescription.textContent = description;

//                 var spanOnline = document.createElement('span');
//                 spanOnline.textContent = 'Online: ' + online;

//                 var spanMembers = document.createElement('span');
//                 spanMembers.textContent = 'Members: ' + members;

//                 rightSide.appendChild(h6Title);
//                 rightSide.appendChild(pDescription);
//                 rightSide.appendChild(spanOnline);
//                 rightSide.appendChild(spanMembers);

//                 itemContainer.appendChild(leftSide);
//                 itemContainer.appendChild(rightSide);

//                 document.querySelector('.bottom-right').appendChild(itemContainer);
//             });
//         })
//         .catch(error => console.error('Error fetching JSON:', error));
// });




document.addEventListener('DOMContentLoaded', function() {

    fetch('./discord_data.json')
    .then(response => response.json())
    .then(data => {
        // Render data for "All" category by default
        renderData(data.data);

        const categoryButtons = document.querySelectorAll('.bottom-left a');
        categoryButtons.forEach(button => {
            const category = button.dataset.category.toLowerCase();
            const count = getCategoryCount(data.data, category);
            button.querySelector('.explore-count').textContent = count;
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));




    const categoryButtons = document.querySelectorAll('.bottom-left a');
    const dropdown = document.querySelectorAll(".category-dropdown a")

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category.toLowerCase();
            fetch('./discord_data.json')
                .then(response => response.json())
                .then(data => {
                    
                    let filteredData;
                    if (category === 'all') {
                        filteredData = data.data;
                    } else {
                        filteredData = data.data.filter(item => item.category.toLowerCase() === category);
                    }
                    renderData(filteredData);


    

                     const countSpan = button.querySelector('.explore-count');
                     countSpan.textContent = filteredData.length;

                     const resultFoundSpan = document.querySelector('.result-found .no-of-results');
                     resultFoundSpan.textContent = filteredData.length;
                })
                .catch(error => console.error('Error fetching JSON:', error));
        });
    });


    // dropdownbutton////////


    dropdown.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category.toLowerCase();
            fetch('./discord_data.json')
                .then(response => response.json())
                .then(data => {
                    
                    let filteredData;
                    if (category === 'all') {
                        filteredData = data.data;
                    } else {
                        filteredData = data.data.filter(item => item.category.toLowerCase() === category);
                    }
                    renderData(filteredData);


    

                     const countSpan = button.querySelector('.explore-count');
                     countSpan.textContent = filteredData.length;

                     const resultFoundSpan = document.querySelector('.result-found .no-of-results');
                     resultFoundSpan.textContent = filteredData.length;
                })
                .catch(error => console.error('Error fetching JSON:', error));
        });
    });

    function renderData(data) {
        const resultContainer = document.querySelector('.bottom-content');
        resultContainer.innerHTML = '';

        data.forEach(item => {
            const { title, description, online, members, image } = item;

            const itemContainer = document.createElement('div');
            itemContainer.classList.add('items');

            const leftSide = document.createElement('div');
            leftSide.classList.add('left-side');

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = image; 
            img.classList.add('item-image');
            img.alt = 'item-image'; 

            imageContainer.appendChild(img);
            leftSide.appendChild(imageContainer);

            const rightSide = document.createElement('div');
            rightSide.classList.add('right-side');

            const h6Title = document.createElement('h6');
            h6Title.textContent = title;

            const pDescription = document.createElement('p');
            pDescription.textContent = description;

            const spanOnline = document.createElement('span');
            spanOnline.textContent = 'Online: ' + online;

            const spanMembers = document.createElement('span');
            spanMembers.textContent = 'Members: ' + members;

            rightSide.appendChild(h6Title);
            rightSide.appendChild(pDescription);
            rightSide.appendChild(spanOnline);
            rightSide.appendChild(spanMembers);

            itemContainer.appendChild(leftSide);
            itemContainer.appendChild(rightSide);

            resultContainer.appendChild(itemContainer);
        });
    }



    function getCategoryCount(data, category) {
        return category === 'all' ? data.length : data.filter(item => item.category.toLowerCase() === category).length;
    }
});


// When active, the background color changes//////////

document.addEventListener('DOMContentLoaded', function() {
    const Active = document.querySelectorAll('.bottom-left a');

    Active.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            Active.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

});


// dropdown categories////////

document.addEventListener("DOMContentLoaded", function() {
    var categoryButton = document.getElementById("category-button");
    var categoryDropdown = document.getElementById("category-dropdown");

    categoryButton.addEventListener("click", function(event) {
        event.preventDefault();
        categoryDropdown.classList.toggle("show");
    });
});












