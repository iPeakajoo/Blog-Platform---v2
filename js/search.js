// search json file

const search = document.getElementById("search");
const matchList = document.getElementById("match-list");
const SearchBtn = document.getElementById("SearchBtn");

let output3 = "";
async function getblog4() {
  const res = await fetch("./json/blog.json");
  const json = await res.json();

  json.blogs.forEach((item) => {
    output3 += `<div class="card col-lg-3 col-md-4 col-sm-1"  style="width: 18rem;">
    <img src="${item.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.content}</p>
    <p class="card-text">view ${item.views}</p>
    <a href="article.html?id=${item.id}" class="btn btn-primary">Read more</a>
    </div>
    </div>
`;
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
      output4 += `<div class="card col-lg-3 col-md-4 col-sm-1"  style="width: 18rem;">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.content}</p>
      <p class="card-text">view ${item.views}</p>
      <a href="article.html?id=${item.id}" class="btn btn-primary">Read more</a>
      </div>
      </div>
  `;
    });

    matchList.innerHTML = output4;
  }
  Searchblog();
});
