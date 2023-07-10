import React from "react";
import "./widgets.css";

const Widget = () => {
  return (
    <div className="hidden md:flex flex-[0.3]">
      <div>
        <div className="widgetTopSuggestion">
          <h2>Suggestions For You</h2>

          <div className="widgetTopFriends">
            <div className="topFriendDet">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>Lindsey Davidson</p>
            </div>
            <div className="topFriendOption">
              <span>Follow</span>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="widgetTopFriends">
            <div className="topFriendDet">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>Lindsey Davidson</p>
            </div>
            <div className="topFriendOption">
              <span>Follow</span>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="widgetMiddleActivities">
          <div className="widgetUserDet">
            <img
              src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              <span>Andreas Jones</span> changed their cover picture
            </p>
          </div>
          <p>1 min ago</p>
        </div>
        <div className="widgetMiddleActivities">
          <div className="widgetUserDet">
            <img
              src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              <span>Andreas Jones</span> changed their cover picture
            </p>
          </div>
          <p>1 min ago</p>
        </div>
        <div className="widgetMiddleActivities">
          <div className="widgetUserDet">
            <img
              src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              <span>Andreas Jones</span> changed their cover picture
            </p>
          </div>
          <p>1 min ago</p>
        </div>
        <div className="widgetMiddleActivities">
          <div className="widgetUserDet">
            <img
              src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              <span>Andreas Jones</span> changed their cover picture
            </p>
          </div>
          <p>1 min ago</p>
        </div>

        {/*  */}
        <div className="widgetBottomSuggestion">
          <h2>Other Friends</h2>

          <div className="widgetBottomFriends">
            <div className="bottomFriendDet">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="highFriend" />
              <p>Lindsey Davidson</p>
            </div>
          </div>
          <div className="widgetBottomFriends">
            <div className="bottomFriendDet">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="highFriend" />
              <p>Lindsey Davidson</p>
            </div>
          </div>
          <div className="widgetBottomFriends">
            <div className="bottomFriendDet">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="highFriend" />
              <p>Lindsey Davidson</p>
            </div>
          </div>
          <div className="widgetBottomFriends">
            <div className="bottomFriendDet">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="highFriend" />
              <p>Lindsey Davidson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
