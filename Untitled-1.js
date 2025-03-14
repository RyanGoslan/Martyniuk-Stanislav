
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(posts => {
        console.log('Отримані пости:', posts);
      })
      .catch(error => {
        console.error('Помилка при отриманні постів:', error);
      });
  }
  
  function createPost() {
    const postData = {
      title: 'Новий пост',
      body: 'Це тіло нового поста',
      userId: 1
    };
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fake-token-example',
        'Accept': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(newPost => {
        console.log('Створений пост:', newPost);
      })
      .catch(error => {
        console.error('Помилка при створенні поста:', error);
      });
  }
  
  async function getPostsAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const posts = await response.json();
      console.log('Отримані пости (async):', posts);
      return posts;
    } catch (error) {
      console.error('Помилка при отриманні постів (async):', error);
    }
  }
  
  async function createPostAsync() {
    try {
      const postData = {
        title: 'Новий пост (async)',
        body: 'Це тіло нового поста, створеного через async/await',
        userId: 1
      };
  
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer fake-token-example',
          'Accept': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const newPost = await response.json();
      console.log('Створений пост (async):', newPost);
      return newPost;
    } catch (error) {
      console.error('Помилка при створенні поста (async):', error);
    }
  }
  
  async function getUsersWithPosts() {
    try {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!usersResponse.ok) {
        throw new Error(`HTTP error! Status: ${usersResponse.status}`);
      }
      
      const users = await usersResponse.json();
      console.log('Отримані користувачі:', users);
      
      for (const user of users) {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        
        if (!postsResponse.ok) {
          throw new Error(`HTTP error! Status: ${postsResponse.status}`);
        }
        
        const posts = await postsResponse.json();
        console.log(`Пости користувача ${user.name}:`, posts);
      }
      
      const postPromises = users.map(user => 
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(posts => {
            return { user, posts };
          })
      );
      
      const usersWithPosts = await Promise.all(postPromises);
      console.log('Користувачі з постами (паралельно):', usersWithPosts);
      
      return usersWithPosts;
    } catch (error) {
      console.error('Помилка при отриманні користувачів та постів:', error);
    }
  }