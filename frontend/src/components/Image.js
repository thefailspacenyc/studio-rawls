import { BlocksRenderer } from '@strapi/blocks-react-renderer';

    function Image(props) {

        let image = props.data.Image

        return (
            <img className="section-image" src={`${ image.url }`} />
        );
    }
    
    export default Image;