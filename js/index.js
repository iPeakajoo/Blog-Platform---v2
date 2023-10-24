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

  output +=   `<li id='${item.id}'>${item.title}
              </br> ${item.author}
              </br> ${item.category}
              </br> ${item.content}
              </br> ${item.views}</li>`
  });

  list.innerHTML = output
}
getblog()




