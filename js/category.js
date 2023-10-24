//อ่านข้อมูลจากไฟล์ blog.json และแสดงผลบล็อกตามหมวดหมู่ที่เลือก
const categoryList = document.getElementById('categoryList');
let categories = document.getElementById('categories')

let output2 = ''
 
// แสดงผลหมวดหมู่ทั้งหมด
async function getblog2() {
  const res = await fetch('./json/blog.json');
  const json = await res.json();

    json.blogs.forEach(item => {
      
      output2 +=   `<li id='${item.id}'>${item.title}
                  </br> ${item.author}
                  </br> ${item.category}
                  </br> ${item.content}
                  </br> <a href="article.html?id=${item.id}">Read more</a>
                  </br> ${item.views}</li>`
    
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
        output2 += `<li id='${item.id}'>${item.title}
                </br> ${item.author}
                </br> ${item.category}
                </br> ${item.content}
                </br> <a href="article.html?id=${item.id}">Read more</a>
                </br> ${item.views}</li>`
      }else if(catageries_fillter=="All"){
        output2 +=   `<li id='${item.id}'>${item.title}
                </br> ${item.author}
                </br> ${item.category}
                </br> ${item.content}
                </br> <a href="article.html?id=${item.id}">Read more</a>
                </br> ${item.views}</li>`
      }
    });
    categoryList.innerHTML = output2
  }
  getblog2(catageries_fillter);
}
);

