async function newFormHandler(event) {
  event.preventDefault();
  const comment = document.querySelector('#comment').value;
  const post_id = window.location.toString().split('/')[5];
  console.log(post_id)
  ;
  
  // Send fetch request to add a new dish
  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
     comment,
     post_id,
     
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add comment');
  }
}

document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
  