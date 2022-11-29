const ImageDetail = [
    {
        id:"1",
        image:"/src/assets/gallery/image1.jpg",
        name:"Tomas Hardy",
        like:"100",
        share:"201"
    },
    {
        id:"2",
        image:"/src/assets/gallery/image2.jpg",
        name:"Jack Sparrow",
        like:"100",
        share:"201"
    },
    {
        id:"3",
        image:"/src/assets/gallery/image3.jpg",
        name:"Mical Hardy",
        like:"100",
        share:"201"
    },
    {
        id:"4",
        image:"/src/assets/gallery/image4.jpg",
        name:"Jaff Shalbay",
        like:"100",
        share:"201"
    },
    {
        id:"5",
        image:"/src/assets/gallery/image5.jpg",
        name:"Jaff Shalbay",
        like:"100",
        share:"201"
    },
    {
        id:"6",
        image:"/src/assets/gallery/image6.jpg",
        name:"Jaff Shalbay",
        like:"100",
        share:"201"
    },
]
document.getElementById('gallery-section').innerHTML = ImageDetail.map(detail => 
    `<div class="relative flex items-end image-container ">
    <img class="w-full" src="${detail.image}" />
    <div class="image-detail flex absolute justify-between items-center w-full px-4 py-2 bg-gray-900 bg-opacity-30 text-white md:hidden ">
      <div class="image-info">
        <span> ${detail.name}</span>
        <div>
          <span> ${detail.like} likes</span>
          <span> ${detail.share} shares</span>
        </div>
      </div>
      <i class="text-20 fa-regular fa-bookmark"></i>
    </div>
  </div>`
).join('');