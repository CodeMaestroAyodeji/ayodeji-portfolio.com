const cardList = document.getElementById('cardList');  
const prevBtn = document.getElementById('prevBtn');  
const nextBtn = document.getElementById('nextBtn');  
const indicatorsContainer = document.getElementById('indicators');  

// Sample blog data  
const blogData = [  
    {  
        title: 'Blog 1 Title',  
        date: 'January 29, 2025',  
        comments: 5,  
        description: 'Short description for Blog 1.',  
        image: 'https://via.placeholder.com/250x200',  
        link: 'https://example.com/blog1'  
    },  
    {  
        title: 'Blog 2 Title',  
        date: 'January 29, 2025',  
        comments: 3,  
        description: 'Short description for Blog 2.',  
        image: 'https://via.placeholder.com/250x200',  
        link: 'https://example.com/blog2'  
    },  
    {  
        title: 'Blog 3 Title',  
        date: 'January 29, 2025',  
        comments: 8,  
        description: 'Short description for Blog 3.',  
        image: 'https://via.placeholder.com/250x200',  
        link: 'https://example.com/blog3'  
    },  
    {  
        title: 'Blog 4 Title',  
        date: 'January 29, 2025',  
        comments: 4,  
        description: 'Short description for Blog 4.',  
        image: 'https://via.placeholder.com/250x200',  
        link: 'https://example.com/blog4'  
    },  
    {  
        title: 'Blog 5 Title',  
        date: 'January 29, 2025',  
        comments: 6,  
        description: 'Short description for Blog 5.',  
        image: 'https://via.placeholder.com/250x200',  
        link: 'https://example.com/blog5'  
    },  
    {  
        title: 'Blog 6 Title',  
        date: 'January 29, 2025',  
        comments: 2,  
        description: 'Short description for Blog 6.',  
        image: 'https://via.placeholder.com/250x200',  
        link: 'https://example.com/blog6'  
    }  
];  

const cardsToShow = 4;  
let currentIndex = 0;  

// Function to create blog cards  
function createBlogCards() {  
    cardList.innerHTML = '';  

    for (let i = currentIndex; i < currentIndex + cardsToShow && i < blogData.length; i++) {  
        const blogCard = document.createElement('a');  
        blogCard.className = 'blog_card';  
        blogCard.href = blogData[i].link;  
        blogCard.target = '_blank';  
        blogCard.rel = 'noopener noreferrer';  

        const cardImg = document.createElement('img');  
        cardImg.src = blogData[i].image;  
        cardImg.alt = blogData[i].title;  
        cardImg.className = 'card_img';  

        const blogContent = document.createElement('div');  
        blogContent.className = 'blog_content';  

        const dateComments = document.createElement('div');  
        dateComments.className = 'date_comments';  

        const blogDate = document.createElement('h4');  
        blogDate.textContent = blogData[i].date;  

        const blogComments = document.createElement('h4');  
        blogComments.textContent = `${blogData[i].comments} Comments`;  

        const blogTitle = document.createElement('h3');  
        blogTitle.textContent = blogData[i].title;  

        const blogDesc = document.createElement('p');  
        blogDesc.textContent = blogData[i].description;  

        dateComments.appendChild(blogDate);  
        dateComments.appendChild(blogComments);  

        blogContent.appendChild(dateComments);  
        blogContent.appendChild(blogTitle);  
        blogContent.appendChild(blogDesc);  

        blogCard.appendChild(cardImg);  
        blogCard.appendChild(blogContent);  

        cardList.appendChild(blogCard);  
    }  

    updateButtons();
}  

// Function to update button visibility  
function updateButtons() {  
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';  
    nextBtn.style.display = currentIndex + cardsToShow >= blogData.length ? 'none' : 'block';  
}  

// Event listeners  
prevBtn.addEventListener('click', () => {  
    if (currentIndex > 0) {  
        currentIndex -= cardsToShow;  
        createBlogCards();  
    }  
});  

nextBtn.addEventListener('click', () => {  
    if (currentIndex + cardsToShow < blogData.length) {  
        currentIndex += cardsToShow;  
        createBlogCards();  
    }  
});  

// Initialize the blog section  
createBlogCards();  
