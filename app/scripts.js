// JavaScript code for My Blog App

// Function to load and display blog posts dynamically
function loadBlogPosts() {
    // Replace these sample data with actual blog post data
    const blogPosts = [
        {
            title: "Post 1",
            content: "This is the content of the first blog post. It's an example post.",
            date: "September 1, 2023",
        },
        {
            title: "Post 2",
            content: "This is the content of the second blog post. Another example post.",
            date: "September 5, 2023",
        },
    ];

    const postContainer = document.querySelector('.post-container');

    // Clear any existing posts
    postContainer.innerHTML = '';

    // Create and append post elements
    blogPosts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p class="date">${post.date}</p>
        `;
        postContainer.appendChild(postElement);
    });
}

// Load blog posts when the page loads
window.addEventListener('load', loadBlogPosts);

