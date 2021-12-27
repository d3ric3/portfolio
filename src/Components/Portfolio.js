import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var listings = data.listings.map(function (listings) {
      return (
        <div class="preview-data columns portfolio-item">
          <div class="item-wrap">
            <div class="img-container">
              <img
                class="img"
                src={listings.image_url}
                alt="active listing"
              ></img>
            </div>
            <div class="text-container">
              <span class="domain">{listings.domain}</span>
              <span class="header">{listings.header}</span>
              <span class="description">{listings.description}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My active listings.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-halves cf"
          >
            {listings}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
