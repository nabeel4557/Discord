// fetch('./discord_data.json')
//     .then(response => response.json())
//     .then(data => {
//         data.data.forEach(item => {
//             // Extract title and description from each item
//             var image = item.image
//             var title = item.title;
//             var description = item.description;

          
//         });
//     })
//     .catch(error => console.error('Error fetching JSON:', error));


// fetch('./discord_data.json')
//     .then(response => response.json())
//     .then(data => {
//         data.data.forEach(item => {
//             // Extract data from each item
//             var image = item.image;
//             var title = item.title;
//             var description = item.description;
//             var online = item.online;
//             var members = item.members;

//             // Select the elements inside the current item's right-side div
//             var rightSideDiv = document.querySelector('.right-side');
//             var dataLogo = rightSideDiv.querySelector('.data-logo');
//             var titleElement = rightSideDiv.querySelector('.title');
//             var descriptionElement = rightSideDiv.querySelector('.description');
//             var onlineElement = rightSideDiv.querySelector('.online');
//             var membersElement = rightSideDiv.querySelector('.members');

//             // Set the content of the selected elements
//             dataLogo.style.backgroundImage = `url(${item.logo})`; // Set logo as background image
//             titleElement.textContent = title;
//             descriptionElement.textContent = description;
//             onlineElement.textContent = `Online: ${online}`;
//             membersElement.textContent = `Members: ${members}`;
//         });
//     })
//     .catch(error => console.error('Error fetching JSON:', error));




// fetch('./discord_data.json')
//     .then(response => response.json())
//     .then(data => {
//         data.data.forEach(item => {
//             // Extract data from each item
//             // var image = item.image;
//             // var logo = item.logo;
//             var title = item.title;
//             var description = item.description;
//             var online = item.online;
//             var members = item.members;

//             // Find corresponding HTML elements and update their content
//             var itemContainer = document.createElement('div');
//             itemContainer.classList.add('items');

//             var leftSide = document.createElement('div');
//             leftSide.classList.add('left-side');

//             var imageContainer = document.createElement('div');
//             imageContainer.classList.add('image-container');

//             // var img = document.createElement('img');
//             // img.src = image;
//             // img.classList.add('item-image');
//             // img.alt = title;

//             // imageContainer.appendChild(img);
//             leftSide.appendChild(imageContainer);

//             var rightSide = document.createElement('div');
//             rightSide.classList.add('right-side');

//             var dataLogo = document.createElement('div');
//             dataLogo.classList.add('data-logo');

//             // var logoImg = document.createElement('img');
//             // logoImg.src = logo;
//             // logoImg.classList.add('logo');
//             // logoImg.alt = title;

//             // dataLogo.appendChild(logoImg);

//             var h6Title = document.createElement('h6');
//             h6Title.textContent = title;

//             var pDescription = document.createElement('p');
//             pDescription.textContent = description;

//             var spanOnline = document.createElement('span');
//             spanOnline.textContent = 'Online: ' + online;

//             var spanMembers = document.createElement('span');
//             spanMembers.textContent = 'Members: ' + members;

//             rightSide.appendChild(dataLogo);
//             rightSide.appendChild(h6Title);
//             rightSide.appendChild(pDescription);
//             rightSide.appendChild(spanOnline);
//             rightSide.appendChild(spanMembers);

//             itemContainer.appendChild(leftSide);
//             itemContainer.appendChild(rightSide);

//             document.body.appendChild(itemContainer);
//         });
//     })
//     .catch(error => console.error('Error fetching JSON:', error));





// fetch('./discord_data.json')
//     .then(response => response.json())
//     .then(data => {
//         data.data.forEach(item => {
//             // Extract data from each item
//             var title = item.title;
//             var description = item.description;
//             var online = item.online;
//             var members = item.members;

//             // Create elements and update their content
//             var itemContainer = document.createElement('div');
//             itemContainer.classList.add('items');

//             var rightSide = document.createElement('div');
//             rightSide.classList.add('right-side');

//             var h6Title = document.createElement('h6');
//             h6Title.textContent = title;

//             var pDescription = document.createElement('p');
//             pDescription.textContent = description;

//             var spanOnline = document.createElement('span');
//             spanOnline.textContent = 'Online: ' + online;

//             var spanMembers = document.createElement('span');
//             spanMembers.textContent = 'Members: ' + members;

//             rightSide.appendChild(h6Title);
//             rightSide.appendChild(pDescription);
//             rightSide.appendChild(spanOnline);
//             rightSide.appendChild(spanMembers);

//             itemContainer.appendChild(rightSide);

//             document.body.appendChild(itemContainer);
//         });
//     })
//     .catch(error => console.error('Error fetching JSON:', error));





// document.addEventListener('DOMContentLoaded', function() {

//     fetch('./discord_data.json')
//         .then(response => response.json())
//         .then(data => {
//             data.data.forEach(item => {
                
//                 var title = item.title;
//                 var description = item.description;
//                 var online = item.online;
//                 var members = item.members;

                
//                 var itemContainer = document.createElement('div');
//                 itemContainer.classList.add('items');

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

//                 itemContainer.appendChild(rightSide);

//                 document.body.appendChild(itemContainer);
//             });
//         })
//         .catch(error => console.error('Error fetching JSON:', error));
// })



document.addEventListener('DOMContentLoaded', function() {

    fetch('./discord_data.json')
        .then(response => response.json())
        .then(data => {
            data.data.forEach(item => {
                
                var title = item.title;
                var description = item.description;
                var online = item.online;
                var members = item.members;
                var imageURL = item.image; 
                
                var itemContainer = document.createElement('div');
                itemContainer.classList.add('items');

                var leftSide = document.createElement('div');
                leftSide.classList.add('left-side');

                var imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');

                var img = document.createElement('img');
                img.src = imageURL; 
                img.classList.add('item-image');
                img.alt = 'item-image'; 

                imageContainer.appendChild(img);
                leftSide.appendChild(imageContainer);

                var rightSide = document.createElement('div');
                rightSide.classList.add('right-side');

                var h6Title = document.createElement('h6');
                h6Title.textContent = title;

                var pDescription = document.createElement('p');
                pDescription.textContent = description;

                var spanOnline = document.createElement('span');
                spanOnline.textContent = 'Online: ' + online;

                var spanMembers = document.createElement('span');
                spanMembers.textContent = 'Members: ' + members;

                rightSide.appendChild(h6Title);
                rightSide.appendChild(pDescription);
                rightSide.appendChild(spanOnline);
                rightSide.appendChild(spanMembers);

                itemContainer.appendChild(leftSide);
                itemContainer.appendChild(rightSide);

                document.querySelector('.bottom-right').appendChild(itemContainer);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});


