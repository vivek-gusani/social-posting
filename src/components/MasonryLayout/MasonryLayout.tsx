import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./MasonryLayout.scss";
import {nanoid} from "nanoid";

function MasonryLayout({posts}: any) {

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    // 500: 1,
  };

  return (
    <div className="MasonryLayout mt-6">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {posts.map((post: any) => (
          <div className="grid-item"
            key={nanoid()}
          >
            <Link to="/explore-similar" 
              className="grid-image-wrapper"
            >
              <img className="object-cover object-top rounded-xl" src={post.image} alt="" />
            </Link>
          </div>
        ))}
      </Masonry>

    </div>
  );
}

export default MasonryLayout;


MasonryLayout.defaultProps = {
  posts: [
    {
      image: "/images/posts/default1.png",
    },
    {
      image: "/images/posts/default2.png",
    },
    {
      image: "/images/posts/default3.png",
    },
    {
      image: "/images/posts/default4.png",
    },
    {
      image: "/images/posts/default5.png",
    },
    {
      image: "/images/posts/default6.png",
    },
    {
      image: "/images/posts/default7.png",
    },
    {
      image: "/images/posts/default8.png",
    },
    {
      image: "/images/posts/default1.png",
    },
    {
      image: "/images/posts/default2.png",
    },
    {
      image: "/images/posts/default3.png",
    },
    {
      image: "/images/posts/default4.png",
    },
    {
      image: "/images/posts/default5.png",
    },
    {
      image: "/images/posts/default6.png",
    },
    {
      image: "/images/posts/default7.png",
    },
    {
      image: "/images/posts/default8.png",
    },
    {
      image: "/images/posts/default1.png",
    },
    {
      image: "/images/posts/default2.png",
    },
    {
      image: "/images/posts/default3.png",
    },
    {
      image: "/images/posts/default4.png",
    },
    {
      image: "/images/posts/default5.png",
    },
    {
      image: "/images/posts/default6.png",
    },
    {
      image: "/images/posts/default7.png",
    },
    {
      image: "/images/posts/default8.png",
    },
  ],
};