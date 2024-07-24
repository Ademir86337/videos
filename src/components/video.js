import "./video.css"


function Video() {
    return(
        <video controls>
            <sourse src="https://servidor-video-public.s3.us-east-2.amazonaws.com/messi.mp4" type="video/mp4"/>
        </video>

    );
}

export default Video;