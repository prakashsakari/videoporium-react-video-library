import { Navbar, SideBar, LikedVideo } from "../../components";
import { useLiked } from "../../context";

export const WatchLater = () => {
  const { liked: { watchLater }} = useLiked();

  return (
        <>
        <Navbar />
        <div class="d-flex gap mg">
            <SideBar />
            <main class="main-video-container scrollable-element">
            {watchLater && watchLater.length > 0 ? (
                watchLater.map((video) => <LikedVideo video={video} />)
            ) : (
                <h2>Nothing to display</h2>
            )}
            </main>
        </div>
        </>
    );
};
