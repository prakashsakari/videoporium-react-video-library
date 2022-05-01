import axios from "axios";
import {useState, useEffect} from "react";
import { useCategory } from "../../context";
import { Navbar, Footer, SideBar, VideoCard, Category } from "../../components";
import { getWearables, getPhones, getLaptops, getTrending } from "../../utils";
import "./Home.css";

export const Home = () => {

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState();
    const { selectedCategory } = useCategory();

    useEffect(() => {
        (async () => {
            try {
                let {data: {categories}} = await axios.get("api/categories");
                setCategories(categories);
            }catch(err){
                setError("Nothing to display. Please reload the page.")
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                let {data: {videos}} = await axios.get("api/videos");
                setVideos(videos);
            }catch(err){
                setError("Nothing to display. Please reload the page.")
            }
        })()
    }, [])

    const filteredVideos =
    selectedCategory === "phone"
      ? getPhones(videos, selectedCategory)
      : selectedCategory === "laptop"
      ? getLaptops(videos, selectedCategory)
      : selectedCategory === "wearables"
      ? getWearables(videos, selectedCategory)
      : selectedCategory === "trending"
      ? getTrending(videos)
      : videos;


    return (
        <>
        <Navbar />
        <div class="d-flex gap mg">
            <SideBar />
            {!error ? (
                <main className="main-video-container scrollable-element">
                <div className="category d-flex gap">
                    {categories.map((category) => (
                    <Category category={category} key={category._id} />
                    ))}
                </div>
    
                <div className="videos-container">
                    {filteredVideos && filteredVideos.map((video) => (
                    <VideoCard video={video} key={video._id} />
                    ))}
                </div>
                </main>
            ) : (
                <main className="main-video-container">
                    <h2>{error}</h2>
                </main>
            )}
            
        </div>
        <Footer />
        </>
    );
};
