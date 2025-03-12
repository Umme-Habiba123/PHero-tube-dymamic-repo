function loadCategories() {
  // fetch the data---
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //   convert promise to json---
    .then((res) => res.json())
    // send data to display categories--
    .then((data) => displayCategories(data.categories));
}
// for videos---
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

function displayCategories(categories) {
  // console.log(categories);
  // get the container----
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    // creat element
    // console.log(cat);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn bg-gray-200 text-black btn-sm lg:p-6 hover:bg-[#ee1633] hover:text-white lg:text-2xl ">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
   const videoContainer = document.getElementById('video-container');
   videos.forEach(video => {
    console.log(video)
    

    const videoCard=document.createElement('div')
    videoCard.innerHTML=`
    <div class="card bg-base-100 w-74 shadow-sm">
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
    videoContainer.append(videoCard)
   });
};

loadCategories();
loadVideos();
