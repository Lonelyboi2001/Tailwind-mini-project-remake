const PricingDetail =[
    {
        id:"1",
        package:"BASIC",
        memory:"100GB",
        price:"$1.99/Month",
        detailDeal1:"100BG of storage",
        detailDeal2:"Option to add members",
        detailDeal3:"Extra member benefits"
    },
    {
        id:"2",
        package:"STANDARD",
        memory:"200GB",
        price:"$3.99/Month",
        detailDeal1:"200BG of storage",
        detailDeal2:"Option to add members",
        detailDeal3:"Extra member benefits"
    },
    {
        id:"3",
        package:"PREMIUM",
        memory:"2 TB",
        price:"$8.99/Month",
        detailDeal1:"2 TB of storage",
        detailDeal2:"Option to add members",
        detailDeal3:"Extra member benefits"
    },
]
document.getElementById('pricing-section').innerHTML = PricingDetail.map(detail => 
    `<div class="pricing-container box-container mb-8 p-0 border-[13px]">
    <div class="head-container p-10 border-b border-[#324154]">
      <div class="mb-5 title-container text-20">
        <span class="text-title" id="demo">${detail.package}</span>
      </div>
      <div class="flex flex-col deal-container">
        <span class="text-memory text-48">${detail.memory}</span>
        <span class="text-deal text-20">${detail.price}</span>
      </div>
      <div class="mt-8 purchase-container">
        <a
          href=""
          class="w-3/4 border btn-full-color btn-primary mb-9 h-14 border-violet-600"
          >Purchase</a
        >
      </div>
    </div>
    <div class="p-8 bot-container">
      <div class="details-deal-container">
        <span>
          <i class="fa-solid fa-check"></i>
          <p>${detail.detailDeal1}</p>
        </span>
      </div>
      <div class="details-deal-container">
        <span>
          <i class="fa-solid fa-check"></i>
          <p>${detail.detailDeal2}</p>
        </span>
      </div>
      <div class="details-deal-container">
        <span>
          <i class="fa-solid fa-check"></i>
          <p>${detail.detailDeal3}</p>
        </span>
      </div>
    </div>
  </div>`
).join('');



