const article = document.getElementById('article');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

let output3 = ''

//แสดงผลจาก id ที่เลือก
async function getblog3() {
  const res = await fetch('./json/blog.json');
  const json = await res.json();

  json.blogs.forEach(item => {
    if (item.id == id) {
      output3 += `<div class="card col-lg-3 col-md-4 col-sm-1"  style="width: 100%;">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.content}</p>
      <p class="card-text">view ${item.views}</p>
      
      </div>
      </div>
  `
    }
  });
  article.innerHTML = output3
}
getblog3()