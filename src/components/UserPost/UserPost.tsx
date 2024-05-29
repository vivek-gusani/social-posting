import { useState, useRef } from "react";
import StyleVault from "../StyleVault/StyleVault";
import { nanoid } from "nanoid";
import "./UserPost.scss";
import { Link } from "react-router-dom";



function UserPost({ productPost }: any) {
  const [profileExpanded, setProfileExpanded] = useState(false);
  const [currentlyFollowing, setCurrentlyFollowing] = useState(false);


  function handleProfileExpand() {
    setProfileExpanded(!profileExpanded);
    console.log("Clicked expand profile.");
  }

  function handlePostSave() {
    console.log("Clicked save post.");
  }

  function handlePostShare() {
    console.log("Clicked share post.");
  }

  function handlePostMore() {
    console.log("Clicked post more.");
  }

  function handleFollow() {
    setCurrentlyFollowing(!currentlyFollowing);
    console.log("Clicked follow.");
  }

    const overlayRef = useRef(null);




  return (
    <div className="UserPost text-sm">
      <div
        className="ProfileOverlay"
        style={{
          opacity: `${profileExpanded ? 1 : 0}`,
          width: `${profileExpanded ? "100%" : "0%"}`,
        }}
        ref={overlayRef}
      >
        <div
          className="ProfileOverlay-content"
          style={{
            transform: `${
              profileExpanded ? "translateX(0)" : "translateX(100%)"
            }`,
          }}
        >
          <StyleVault closeOverlay={handleProfileExpand} />
        </div>
      </div>

      <div className="post-header flex justify-between">
        <div className="flex justify-start items-center gap-3">
          <button
            className="user-avatar-wrapper  w-10 h-10 rounded-full"
            onClick={handleProfileExpand}
            style={{ backgroundColor: productPost.user.theme }}
          >
            <img className="" src={productPost.user.avatar} alt="" />
          </button>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <button className="text-white" onClick={handleProfileExpand}>
                @{productPost.user.username}
              </button>
              <p>&middot;</p>
              <p>{productPost.postDate}</p>
            </div>

            {currentlyFollowing ? (
              <button
                className="btn-follow-simple text-white text-left"
                onClick={handleFollow}
              >
                Following
              </button>
            ) : (
              <button
                className="btn-follow-simple text-white text-left"
                onClick={handleFollow}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div className="post-control flex justify-between items-center gap-2">
          <button
            title="Save Post"
            className="bg-white btn-icon w-8 h-8 rounded-full"
            onClick={handlePostSave}
          >
            <img
              src="/icons/plus-dark.svg"
              alt="plus icon"
              className="svg-icon w-6 h-6"
            />
          </button>
          <button
            title="Share Post"
            className="btn-icon btn-action w-8 h-8"
            onClick={handlePostShare}
          >
            <img src="/icons/share.svg" alt="share icon" className="svg-icon" />
          </button>
          <button
            title="More"
            className="btn-icon btn-action w-8 h-8"
            onClick={handlePostMore}
          >
            <img
              src="/icons/ellipsis.svg"
              alt="more icon"
              className="svg-icon"
            />
          </button>
        </div>
      </div>
      <p className="post-caption text-sm mt-2">{productPost.caption}</p>
      <div>
        <ul className="post-tags flex gap-2 mt-2">
          {productPost.tags.map((tag: any) => (
            <li key={nanoid()} className="post-tag">
              <Link to="/explore" className="">
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserPost;
