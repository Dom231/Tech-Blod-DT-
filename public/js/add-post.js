async function newFormHandler(event) {
    event.preventDefault();
    const dish_name = document.querySelector('#dish_name').value;
    const description = document.querySelector('#description').value;
    const guest_name = document.querySelector('#guest_name').value;

    // Send fetch request to add a new dish
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add post');
    }
  }
  
  document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);