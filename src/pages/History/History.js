import { Navbar, SideBar, LikedVideo } from "../../components";
import { useLiked } from "../../context";

export const History = () => {
  const {
    liked: { history }
  } = useLiked();

  return (
    <>
      <Navbar />
      <div class="d-flex gap mg">
        <SideBar />
        <main class="main-video-container scrollable-element">
          {history && history.length > 0 ? (
            history.map((video) => <LikedVideo video={video} />)
          ) : (
            <h2>Nothing to display</h2>
          )}
        </main>
      </div>
    </>
  );
};
