//อ่านข้อมูลจากไฟล์ blog.json และแสดงผลบล็อกตามหมวดหมู่ที่เลือก
const categoryList = document.getElementById('categoryList');
let categories = document.getElementById('categories')

let output2 = ''
 
// แสดงผลหมวดหมู่ทั้งหมด
async function getblog2() {
  const res = await fetch('./json/blog.json');
  const json = await res.json();

    json.blogs.forEach(item => {
      
      output2 +=        `<div class="card col-lg-3 col-md-4 col-sm-1"  style="width: 18rem;">
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
              categoryList.innerHTML = output2
            }
getblog2();



// แสดงผลหมวดหมู่ที่เลือก

categories.addEventListener('change', () => {
  let catageries_fillter=categories.value;
  
  let output2 = ''

  async function getblog2(catageries_fillter) {
    const res = await fetch('./json/blog.json');
    const json = await res.json();

    json.blogs.forEach(item => {
      if (item.category == catageries_fillter) {
        output2 += `<div class="card col-lg-3 col-md-4 col-sm-1"  style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.content}</p>
        <p class="card-text">view ${item.views}</p>
        <a href="article.html?id=${item.id}" class="btn btn-primary">Read more</a>
        </div>
        </div>
    `
      }else if(catageries_fillter=="All"){
        output2 +=   `<div class="card col-lg-3 col-md-4 col-sm-1"  style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.content}</p>
        <p class="card-text">view ${item.views}</p>
        <a href="article.html?id=${item.id}" class="btn btn-primary">Read more</a>
        </div>
        </div>
    `
      }
    });
    categoryList.innerHTML = output2
  }
  getblog2(catageries_fillter);
}
);

