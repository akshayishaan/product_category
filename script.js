function toggleOffer(clickedOffer) {
  const offers = document.querySelectorAll(".offer");

  offers.forEach((offer) => {
    const offerBody = offer.querySelector(".offer-body");
    const checkbox = offer.querySelector(".offer-checkboxs");
    const header = offer.querySelector(".offer-header");

    if (offer === clickedOffer) {
      if (offerBody && offerBody.style.display !== "flex") {
        offerBody.style.display = "flex";
        offerBody.style.flexDirection = "column";
        header.style.display = "none";
        if (checkbox) checkbox.checked = true;
        console.log(checkbox.checked);
      }
    } else {
      if (offerBody) offerBody.style.display = "none";
      if (checkbox) checkbox.checked = false;
      if (header) header.style.display = "flex";
    }
  });
}
