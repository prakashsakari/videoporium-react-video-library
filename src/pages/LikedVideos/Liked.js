import { useNavigate } from "react-router-dom";
import { Navbar, LikedVideo, SideBar } from "../../components";
import { useLiked } from "../../context";

export const Liked = () => {
  const {
    liked: { likedVideos }
  } = useLiked();

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div class="d-flex gap mg">
        <SideBar />
        <main className="main-video-container scrollable-element">
          {likedVideos && likedVideos.length > 0 ? (
            likedVideos.map((video) => <LikedVideo video={video} key={video._id}/>)
          ) : (
            <div>
              <h3 className="mg">You have not liked any video yet --><button className="button btn-link-primary cursor" onClick={() => navigate("/")}>click to explore videos.</button></h3>
              
            </div>
          )}
        </main>
      </div>
    </>
  );
};
