import React from "react";

import CollectionItem from "../../components/cart-item/cart-item.component";

import "./collection.style.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);
  return (
    <div className="collection-page">
      <h2>Collection PAGE</h2>
    </div>
  );
};

export default CollectionPage;
