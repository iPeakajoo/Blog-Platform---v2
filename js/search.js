// search json file

const search = document.getElementById("search");
const matchList = document.getElementById("match-list");
const SearchBtn = document.getElementById("SearchBtn");

let output3 = "";
async function getblog4() {
  const res = await fetch("./json/blog.json");
  const json = await res.json();

  json.blogs.forEach((item) => {
    output3 += `<li id='${item.id}'>${item.title}
                  </br> ${item.author}
                  </br> ${item.category}
                  </br> ${item.content}
                  </br> <a href="article.html?id=${item.id}">Read more</a>
                  </br> ${item.views}</li>`;
  });
  matchList.innerHTML = output3;
}
getblog4();

SearchBtn.addEventListener("click", () => {
  let output4 = "";
  let keyword = "";
  async function Searchblog() {
    const res = await fetch("./json/blog.json");
    const json = await res.json();

    keyword = search.value;

    const search_Blogs = (keyword, blogs) => {
      return blogs.filter((blog) =>
        blog.title.toLowerCase().includes(keyword.toLowerCase())
      );
    };

    const match = search_Blogs(keyword, json.blogs);

    // แสดงผลการค้นหาคำที่ได้

    match.forEach((item) => {
      output4 += `<li id='${item.id}'>${item.title}
              </br> ${item.author}
              </br> ${item.category}
              </br> ${item.content}
              </br> <a href="article.html?id=${item.id}">Read more</a>
              </br> ${item.views}</li>`;
    });

    matchList.innerHTML = output4;
  }
  Searchblog();
});
