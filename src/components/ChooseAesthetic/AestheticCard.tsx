

import { Link } from "react-router-dom";
import "./ChooseAesthetic.scss";

function AestheticCard({ aesthetic }: any) {
    
  return (
    <div className="AestheticCard aesthetics-item flex flex-col items-center">
      <div className="card-bg flex items-center justify-center">
        <div className="aesthetics-image-wrapper">
          <img
            className="aesthetics-image"
            src={aesthetic.collectionImage}
            alt=""
          />
        </div>
      </div>

      <div className="aesthetics-main text-center flex flex-col items-center">
        <div
          className="user-avatar-wrapper w-12 h-12 rounded-full"
          style={{ backgroundColor: aesthetic.user.theme }}
        >
          <img
            className="user-avatar w-12 h-12 rounded-full"
            src={aesthetic.user.avatar}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center gap-1 mt-3">
          <p className="aesthetics-name">{aesthetic.collectionName}</p>
          <Link to="/user-profile" className="aesthetics-username">
            {aesthetic.user.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AestheticCard;