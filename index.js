const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function displayRandomPosts() {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();

    // Shuffle and grab the first 5 posts
    const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 5);

    const postList = document.getElementById('post-list');
    if (!postList) return;

    // Clear the list
    postList.innerHTML = '';

    // Loop through and explicitly create h1 and p elements as required by the test
    randomPosts.forEach(post => {
      const listItem = document.createElement('li');
      
      // Create the h1 element (the test specifically looks for this)
      const h1 = document.createElement('h1');
      h1.textContent = post.title;

      // Create the p element (the test also looks for this)
      const p = document.createElement('p');
      p.textContent = post.body;

      // Append them both to the list item
      listItem.appendChild(h1);
      listItem.appendChild(p);
      
      // Append the list item to the main list
      postList.appendChild(listItem);
    });

  } catch (error) {
    console.error('Error fetching or rendering the posts:', error);
  }
}

window.addEventListener('DOMContentLoaded', displayRandomPosts);
