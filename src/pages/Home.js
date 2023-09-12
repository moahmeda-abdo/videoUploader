import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const vids = await axios.get("http://localhost:5000/api/video/sendvideo");
      setVideos(vids.data);
      console.log("yes")
      console.log(vids.data)
    };
    fetchData();
  }, []);

  return (
    <div>
<header>
<Link to="/uploader">upload more</Link>
</header>
      {videos.map((video) => (
      <>
        <video width="700" height="600" controls>
          <source src={video.url} type="video/mp4"></source>
        </video>
        <h3>{video.title}</h3>
        <h4>{video.category}</h4>
      </>
      ))}
    </div>
  );
}
