import { Navbar, Footer, SideBar, VideoCard, Category } from "../../components";
import axios from "axios";
import {useState, useEffect} from "react";
import "./Home.css";

export const Home = () => {

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState();

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
                    {videos.map((video) => (
                    <VideoCard video={video} key={video.id} />
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
