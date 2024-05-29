

import "./CollectionCard.scss"

function CollectionCard({ collection }: any) {
  return (
    <div className="CollectionCard flex flex-col gap-4 p-2 rounded-xl">
      <div className="collection-image-wrapper">
        <img
          src={collection.image}
          className="collection-image rounded-xl"
          alt=""
        />
      </div>

      <div>
        <p className="collection-name text-base">{collection.name}</p>
        <div className="collection-items-count text-sm flex items-center gap-1">
          {/* <img src="/icons/lock.svg" alt="lock icon" className="svg-icon" /> */}
          <p className="mt-2">{collection.items} items</p>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;

CollectionCard.defaultProps = {
  collection: {
    name: "Shopping List",
    items: 6,
    private: true,
    image: "/images/collections/default2.jpg",
  },
};
