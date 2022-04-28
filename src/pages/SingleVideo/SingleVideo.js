import { Navbar, VideoDetails, SideBar } from "../../components";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {getVideo} from "../../utils"
import axios from "axios";

export const SingleVideo = () => {
    const {videoId} = useParams();
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        try{
            (async () => {
                const {data : {videos}} = await axios.get("/api/videos");
                setVideos(videos);
            })()

        }catch(error){
            setError(true);
        }
    }, [])

    
    const video = getVideo(videos, videoId);

    return (
        <>
        <Navbar />
        <div class="d-flex gap mg">
            <SideBar />
            <main className="main-video-container scrollable-element">
            {video && !error ? (<VideoDetails  singleVideo={video} {...video} key={video._id}/>) : (<h2>...Loading</h2>)}
            </main>
        </div>
        </>
    );
};
