import { BlocksRenderer } from '@strapi/blocks-react-renderer';

    function Video(props) {

        let video = props.data.Video

        return (
            <video className="section-image" controls>
                <source src={`${ video.url }`} type="video/mp4" />
            </video>
        );
    }
    
    export default Video;