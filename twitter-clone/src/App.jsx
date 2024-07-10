import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [username, setuserName] = useState("Jose Velarde");
  const [nickname, setnickname] = useState("joseeee");
  const [loveTweet, setLoveTweet] = useState(false);

  const handleTweetPost = (e) => {
    e.preventDefault();
    if (tweet.trim() !== "") {
      const tweetId = Date.now(); // Unique ID based on timestamp
      const newTweet = {
        id: tweetId,
        text: tweet,
        loved: false,
      };
      setTweets([newTweet, ...tweets]);
      setTweet("");
    }
  };
  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const toggleLove = (id) => {
    const newTweets = tweets.map((tweet) => {
      if (tweet.id === id) {
        return { ...tweet, loved: !tweet.loved };
      }
      return tweet;
    });

    setTweets(newTweets);
  };

  return (
    <>
      <div className="usersection">
        <p>@{username}</p>
        <p>{username}</p>
        <br />
      </div>
      <div id="tweetsection">
        <form onSubmit={handleTweetPost}>
          <input
            type="text"
            size="60"
            onChange={handleTweetChange}
            id="textboxid"
            value={tweet}
            placeholder="What's happening?"
          />
          <input type="submit" className="blue-buttons" />
        </form>
      </div>
      <div id="newsfeed">
        {tweets.length === 0 ? (
          <p></p>
        ) : (
          tweets.map((tweet, index) => (
            <div key={index} className="tweet">
              <strong>{nickname}</strong>: {tweet.text}
              <div id="buttonsection">
                <i
                  className={`likebutton fa-heart ${
                    tweet.loved ? "fa-solid" : "fa-regular"
                  } tweeticon`}
                  onClick={() => toggleLove(tweet.id)}
                ></i>

                <i className="fa fa-retweet tweeticon" aria-hidden="true"></i>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
