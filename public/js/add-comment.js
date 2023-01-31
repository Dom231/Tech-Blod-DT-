async function newFormHandler(event) {
  event.preventDefault();
  const comment = document.querySelector('#comment').value;
  ;
  
  // Send fetch request to add a new dish
  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
     comment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/api/comment/');
  } else {
    alert('Failed to add comment');
  }
}

document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
  