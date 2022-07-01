const post = [
  { title: '', body: '' },
  { title: '', body: '' }
];


function Getpost() {
  setTimeout(() => {
    let post = '';
    post.forEach((post, index) => {
      post += `<h3>${post.title}</h3> <p>${post.body}</p>`
    });
    document.body.innerHTML = post;
  }, 1000)
}

Getpost();