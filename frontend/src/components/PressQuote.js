import { BlocksRenderer } from '@strapi/blocks-react-renderer';

    function PressQuote(props) {

        let quote = props.data.Press_Quote
 
        return (
            <div className="flex column jc-center" >
                <BlocksRenderer 
                    content={ quote } 
                    blocks={{
                        paragraph: ({ children }) => <p className="no-margin-top">{ children }</p>,
                        heading: ({ children, level }) => {
                            switch (level) {
                                case 1:
                                    return <h1 style={{ margin: '0px' }}>{ children }</h1>
                                case 2:
                                    return <h2 style={{ margin: '0px' }}>{ children }</h2>
                            }
                        },
                    }}
                />
            </div>
        );
    }
    
    export default PressQuote;