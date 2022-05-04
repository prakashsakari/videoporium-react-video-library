import axios from "axios";
import {useState, useEffect} from "react";
import { useCategory } from "../../context";
import { Navbar, Footer, SideBar, VideoCard, Category, Loader } from "../../components";
import { getWearables, getPhones, getLaptops, getTrending, getVideoBySearch } from "../../utils";
import "./Home.css";
import "../Playlist.css"

export const Home = () => {

    const { vidcategory, tag } = useCategory();

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false);
    const { selectedCategory } = useCategory();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                let {data: {categories}} = await axios.get("api/categories");
                setCategories(categories);
            }catch(err){
                setError(true)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                let {data: {videos}} = await axios.get("api/videos");
                setVideos(videos);
                setLoading(false);
            }catch(err){
                setError("Nothing to display. Please reload the page.")
            }
        })()
    }, [])

    const videosByCategory =
    selectedCategory === "phone"
      ? getPhones(videos, selectedCategory)
      : selectedCategory === "laptop"
      ? getLaptops(videos, selectedCategory)
      : selectedCategory === "wearables"
      ? getWearables(videos, selectedCategory)
      : selectedCategory === "trending"
      ? getTrending(videos)
      : videos;

      const filteredVideos = getVideoBySearch(videosByCategory, tag);

    return (
        
        <>
        {loading ?  <Loader />  : 
        <>
            <Navbar />
            <div class="d-flex gap mg">
                {!error ? (
                    <>
                    <SideBar />
                    <main className="main-video-container scrollable-element">
                        <div className="category d-flex gap">
                            {categories.map((category) => (
                            <Category category={category} key={category._id} />
                            ))}
                        </div>
                        <div className="d-flex align-center">
                        {tag.length > 0 && <h2 className="heading-2 page-title">Search Results...</h2>}
                        </div>
                        {filteredVideos && filteredVideos.length > 0 ?
                        <div className="videos-container">
                             {filteredVideos.map((video) => (
                            <VideoCard video={video} key={video._id} />
                            ))}
                        </div> : (<div className=" main-video-container notify-message">
                            <h3 className="heading-3">
                              No Videos found matching the search result. Try something else{" "}
                              
                            </h3>
                          </div>)}
                        
                    </main>
                    </>
                ) : (
                    <main className="main-video-container">
                        <h2>{error}</h2>
                    </main>
                )}
                
            </div>
            {filteredVideos.length > 0 && <Footer />}
        </>
            }
        </>
            
    );
};
