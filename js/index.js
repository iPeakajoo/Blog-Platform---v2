// อ่านข้อมูลจากไฟล์ blog.json และแสดงผล Popular Blogs Section โดยเรียงจากมากไปน้อยตามจำนวน views
const list = document.getElementById('list');

let output = ''

async function getblog() {
const res = await fetch('./json/blog.json');
const json = await res.json();

  json.blogs.sort(function(a, b) {
    return b.views -a.views ;
  });

  json.blogs.forEach(item => {

  output +=   
              `<div class="card col-lg-3 col-md-4 col-sm-1"  style="width: 18rem;">
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.content}</p>
                <p class="card-text">view ${item.views}</p>
                <a href="article.html?id=${item.id}" class="btn btn-primary">Read more</a>
                </div>
                </div>
            `
  });

  list.innerHTML = output
}
getblog()




