import React from "react";
import "./descriptionbox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that enables businesses to
          sell physical goods, digital products, or services directly to
          customers over the internet. These sites facilitate the entire
          shopping process, including product browsing, secure payment
          processing, and transaction management, allowing 24/7 operations
          without a physical store.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
