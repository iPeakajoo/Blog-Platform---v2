const statistic = document.getElementById('statistic');

let sta = ''

async function getstatistics() {
const res = await fetch('./json/statistics.json');
const json = await res.json();

const data = json.statistics
  
    sta +=   `totalBlogs ${data.totalBlogs} | totalViews ${data.totalViews}`

  statistic.innerHTML = sta
}
getstatistics()
