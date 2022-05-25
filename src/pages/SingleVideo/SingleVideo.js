import { useParams } from "react-router-dom";
import {useState, useEffect, Fragment} from "react";
import axios from "axios";
import { Navbar, VideoDetails, SideBar, Loader } from "../../components";
import {getVideo} from "../../utils"


export const SingleVideo = () => {
    const {videoId} = useParams();
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false);
    const [route, setRoute] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setRoute('videoDetails');
      }, [route]);

    useEffect(() => {
        try{
            (async () => {
                const {data : {videos}} = await axios.get("/api/videos");
                setVideos(videos);
                setLoading(false);
            })()

        }catch(error){
            setError(true);
        }
    }, [])

    
    const video = getVideo(videos, videoId);

    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>
            <Navbar route={route}/>
        <div class="d-flex gap mg">
            <SideBar />
            <main className="main-video-container scrollable-element">
            {video && !error && (<VideoDetails  singleVideo={video} {...video} key={video._id}/>)}
            </main>
        </div></Fragment>}
        
        </Fragment>
    );
};
