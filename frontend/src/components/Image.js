import { BlocksRenderer } from '@strapi/blocks-react-renderer';

    function Image(props) {

        let image = props.data.Image

        return (
            <div className="section-wrapper" >
                <img className="section-image" src={`${process.env.REACT_APP_BACKEND}${ image.url }`} />
            </div>
        );
    }
    
    export default Image;