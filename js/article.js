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
      output3 += `<li id='${item.id}'>${item.title}
              </br> ${item.author}
              </br> ${item.category}
              </br> ${item.content}
              </br> ${item.views}</li>`
    }
  });
  article.innerHTML = output3
}
getblog3()