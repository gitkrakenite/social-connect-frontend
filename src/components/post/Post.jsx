import React, { useState } from "react";
import "./post.css";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  AiFillHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import moment from "moment";
import { BiLocationPlus, BiTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../features/posts/postSlice";
import { toast } from "react-hot-toast";

const Post = ({ data }) => {
  const [showComment, setShowComment] = useState(false);

  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  const handlePostDelete = (id) => {
    if (!id) {
      toast.error("Post does not exist");
      return;
    }

    try {
      dispatch(deletePost(id));
      toast.success("Deleted succesfully");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="postWrapper">
      <div className="postContainer" key={data._id}>
        <div className="postCard">
          <div className="postCardTop">
            <div className="postCardTopLeft">
              <div className="imgComp">
                <img src={data.profile} alt={data.user} />
              </div>
              <div className="authComp">
                <Link
                  to={`/profile/${data.userId}`}
                  style={{ textDecoration: "none" }}
                >
                  <p>{data.user}</p>
                </Link>
                <span>{moment(data.createdAt).fromNow()}</span>
              </div>
            </div>
            <div className="postCardTopRight">
              <FiMoreHorizontal />
            </div>
          </div>

          {/*  */}
          <div className="postCardMainImage">
            <img src={data.image} alt="" />
          </div>
          {/*  */}
          <div className="postCardTitle">{data.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <BiLocationPlus className="imgAddIco" />
            {data.location}
          </div>
          {/*  */}
          <div className="postCardDetail">
            <div className="postCardTile love">
              <AiFillHeart className="postLove" />
              <span>20 Likes</span>
            </div>
            <div className="postCardTile comment" onClick={handleShowComment}>
              <AiOutlineMessage className="postComment" />
              <span>
                {" "}
                {data.comments
                  ? data.comments.length + " comments"
                  : "0 comments"}{" "}
              </span>
            </div>
            <div className="postCardTile share">
              <AiOutlineShareAlt className="postShare" />
              <span>Share</span>
            </div>
            <div
              className="postCardTile postDeleteWrapper"
              onClick={() => handlePostDelete(data._id)}
            >
              {data.user === user?.name && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BiTrashAlt className="postDelete" />
                  <span>Delete</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {!showComment ? (
        <div></div>
      ) : (
        <div className="allPostCommentWrapper">
          <div className="postAComment">
            <form>
              <input type="text" name="" placeholder="Enter a comment" id="" />
              <button type="submit">post</button>
            </form>
          </div>
          <div className="postComments">
            <div className="postCommentImg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>

            <div className="commentDetail">
              <div className="commentAuth">
                <p>Jane Doe</p>
                <span>3 weeks ago</span>
              </div>
              <div className="commentTxt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, voluptatibus vero ad ipsam earum soluta quo? Iusto vel
                accusamus repellendus delectus nam natus alias, hic praesentium
                voluptas ab laudantium magni?
              </div>
            </div>
          </div>
          {/*  */}
          <div className="postComments">
            <div className="postCommentImg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>

            <div className="commentDetail">
              <div className="commentAuth">
                <p>Jane Doe</p>
                <span>3 weeks ago</span>
              </div>
              <div className="commentTxt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, voluptatibus vero ad ipsam earum soluta quo? Iusto vel
                accusamus repellendus delectus nam natus alias, hic praesentium
                voluptas ab laudantium magni?
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
