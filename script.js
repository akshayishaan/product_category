document.addEventListener("DOMContentLoaded", () => {
  // Example array of offer data
  const offers = [
    {
      discount: "30% Off",
      buy: "Buy 1 Get 2",
      price: "$18.00 USD",
      popularity: "Most Popular",
      details: [
        { size: "S", color: "Black" },
        { size: "M", color: "White" },
        { size: "L", color: "Red" },
      ],
      totalPrice: "$18.00 USD",
    },
    {
      discount: "20% Off",
      buy: "Buy 2 Get 1",
      price: "$25.00 USD",
      popularity: "Best Value",
      details: [
        { size: "S", color: "Blue" },
        { size: "M", color: "Green" },
        { size: "L", color: "Yellow" },
      ],
      totalPrice: "$25.00 USD",
    },
    {
      discount: "50% Off",
      buy: "Buy 2 Get 5",
      price: "$35.00 USD",
      popularity: "",
      details: [
        { size: "S", color: "Blue" },
        { size: "M", color: "Green" },
        { size: "L", color: "Yellow" },
      ],
      totalPrice: "$35.00 USD",
    },
  ];

  const offersContainer = document.getElementById("offersContainer");

  offers.forEach((offer, index) => {
    const offerDiv = document.createElement("div");
    offerDiv.classList.add("offer");

    offerDiv.innerHTML = `
      <div class="offer-header" data-index="${index}">
        <div class="off-div custom-dotted-border">${offer.discount}</div>
        <input type="checkbox" id="offerCheckbox${index}" class="offer-checkbox" />
        <div class="buy-price">
          <div class="buy">${offer.buy}</div>
          <div class="price">${offer.price}</div>
        </div>
        <div class="most-popular">${offer.popularity}</div>
      </div>
      <div class="offer-body" id="offerBody${index}" style="display: none;">
        <div class="offer-header-open">
          <input type="checkbox" id="offerCheckboxOpen${index}" class="offer-checkboxs offer-checkbox" />
          <div class="buy-price">
            <div class="buy">${offer.buy}</div>
            <div class="price">${offer.price}</div>
          </div>
          <div class="buy-price">
            <div class="per-off">10% off</div>
            <del class="strike-price">$10.00 USD</del>
          </div>
        </div>
        <div class="dimensions">
          <div class="size-1-lable">
            <span>#</span>
            <p>Size</p>
            <p>Color</p>
          </div>
          ${offer.details
            .map(
              (detail, i) => `
            <div class="size-1-container">
              <span>#${i + 1}</span>
              <select id="size${index}${i}">
                <option value="S" ${
                  detail.size === "S" ? "selected" : ""
                }>S</option>
                <option value="M" ${
                  detail.size === "M" ? "selected" : ""
                }>M</option>
                <option value="L" ${
                  detail.size === "L" ? "selected" : ""
                }>L</option>
              </select>
              <select id="color${index}${i}">
                <option value="Black" ${
                  detail.color === "Black" ? "selected" : ""
                }>Black</option>
                <option value="White" ${
                  detail.color === "White" ? "selected" : ""
                }>White</option>
                <option value="Red" ${
                  detail.color === "Red" ? "selected" : ""
                }>Red</option>
                <option value="Blue" ${
                  detail.color === "Blue" ? "selected" : ""
                }>Blue</option>
                <option value="Green" ${
                  detail.color === "Green" ? "selected" : ""
                }>Green</option>
                <option value="Yellow" ${
                  detail.color === "Yellow" ? "selected" : ""
                }>Yellow</option>
              </select>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    offersContainer.appendChild(offerDiv);
  });

  document.querySelectorAll(".offer-header").forEach((header) => {
    header.addEventListener("click", (e) => {
      const index = header.getAttribute("data-index");
      const offerBody = document.getElementById(`offerBody${index}`);
      const checkbox = document.getElementById(`offerCheckboxOpen${index}`);
      document.getElementById(
        "totalPrice"
      ).textContent = `Total:  ${offers[index].price}`;

      if (offerBody.style.display === "none" || !offerBody.style.display) {
        offerBody.style.display = "flex";
        header.style.display = "none";
        document.querySelectorAll(".offer-header").forEach((header) => {
          const ind = header.getAttribute("data-index");
          const ob = document.getElementById(`offerBody${ind}`);
          const checkbox = document.getElementById(`offerCheckboxOpen${ind}`);
          if (ind !== index) {
            ob.style.display = "none";
            header.style.display = "flex";
            checkbox.checked = false;
          }
        });
        checkbox.checked = true;
      } else {
        offerBody.style.display = "none";
        header.style.display = "flex";
        checkbox.checked = false;
      }
    });
  });
});
