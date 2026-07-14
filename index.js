// 1. Define the API endpoint to get the posts
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// 2. Main function to fetch and display the random posts
async function displayRandomPosts() {
  try {
    // Fetch the raw data from the API
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Convert the API response to JSON
    const posts = await response.json();

    // Shuffle the posts randomly and grab the first 5
    const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 5);

    // Get your exact 'post-list' element from index.html
    const postList = document.getElementById('post-list');
    
    if (!postList) {
      console.error("Could not find the <ul id='post-list'> element in your HTML.");
      return;
    }

    // Clear any loading text or placeholder items inside the <ul>
    postList.innerHTML = '';

    // Loop through our selected random posts and create list items
    randomPosts.forEach(post => {
      const listItem = document.createElement('li');
      
      // We wrap the post content cleanly inside the list item <li>
      listItem.innerHTML = `
        <div class="post-card">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
      
      // Append the new <li> to our <ul> list
      postList.appendChild(listItem);
    });

  } catch (error) {
    console.error('Error fetching or rendering the posts:', error);
  }
}

// 3. Run the function as soon as the DOM is ready
window.addEventListener('DOMContentLoaded', displayRandomPosts);// Write your code here!
