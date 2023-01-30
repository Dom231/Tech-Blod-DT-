async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const post = document.querySelector('#post').value;
  ;
  // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.

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

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  