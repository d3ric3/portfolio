import React from "react";
// manual get preview data
// https://link-preview-generator.herokuapp.com/

const Portfolio = ({ data }) => {
  if (data) {
    var listings = data.listings.map(function (listings) {
      return (
        <a href={listings.url}>
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
        </a>
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
