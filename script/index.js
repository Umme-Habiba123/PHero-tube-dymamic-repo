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

function loadCategoryVideo(id) {
  const url = ` https://openapi.programming-hero.com/api/phero-tube/category/${id} `;
  console.log(url);


  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton=document.getElementById(`btn-${id}`)
      clickedButton.classList.add('active')
      console.log(clickedButton)
      displayVideos(data.category)

 
   
    });
   
}

function displayCategories(categories) {
  // console.log(categories);
  // get the container----
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
  
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id="btn-${cat.category_id}" onclick="loadCategoryVideo(${cat.category_id})" class="btn bg-gray-200 text-black btn-sm lg:p-6 hover:bg-[#ee1633] hover:text-white lg:text-2xl ">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  }
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = " ";

  if (videos.length == 0) {
    videoContainer.innerHTML = ` <div class="col-span-full flex flex-col items-center mt-20 gap-10">
        <img class=" h-52" src="./Assets/Icon.png" alt="">
        <p class="font-bold text-4xl">Oops!! Sorry, There is no content here</p>
    </div>`;
    return;
  }

  videos.forEach((video) => {
    // console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
       <div class="card bg-base-100 w-74 object-">
            <div class="relative">
                <figure class="">
                    <img class="rounded-lg" src=${video.thumbnail} alt="Shoes" />
                </figure>
                <span class="absolute bottom-2 px-2 right-4 text-white bg-black rounded-lg">3hrs 56 min ago</span>
            </div>
            <div class=" flex gap-4 mt-5">
                <div class="avatar">
                    <div class=" rounded-full w-20 h-20">
                        <img class=""
                            src="${video.authors[0].profile_picture}" />
                    </div>
                </div>
                <div>
                    <h2 class="card-title font-bold ">Building a Winning UX Strategy Using the Kano Model</p>
                        <h4 class="text-[#817d7d] flex gap-1">  ${video.authors[0].profile_name}
                            <img class="w-3 h-3" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png"
                                alt="">
                        </h4>
                        <h5 class="text-[#817d7d]"> ${video.others.views} </h5>
                </div>
            </div>
        </div>
    `;
    videoContainer.append(videoCard);
  });
};

loadCategories();
