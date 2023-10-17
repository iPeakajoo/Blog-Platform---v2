fetch(' ./json/blog.json')
  .then(response => response.json())
  .then(data =>
    data.blogs.forEach(blog => {
    console.log(blog);
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>${blog.title}</h2>
    <p>${blog.category}</p>
    <p>${blog.content}</p>
    <p>${blog.author}</p>
    <p>${blog.views}</p>
    `;
    document.getElementById('blogs').appendChild(div);
  }));

  


