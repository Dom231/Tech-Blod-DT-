async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const post = document.querySelector('#post').value;
  ;
  
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
    document.location.replace('/api/post');
  } else {
    alert('Failed to add post');
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  