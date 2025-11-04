import { useState } from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import RichText from '../components/RichText';
import Image from '../components/Image';

    function Research() {

        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/studies?pLevel`)

        let research = null;
        let display = [];

        // const line = document.getElementById('line');
        // const container = document.getElementById('myContainer');

        // window.addEventListener('scroll', () => {
        //     const containerTop = container.getBoundingClientRect().top;
        //     const containerHeight = window.innerHeight;
        //     const progress = 1 - Math.max(0, Math.min(1, containerTop / containerHeight));
            
        //     // Calculate width between 100px and 100% of container
        //     const maxWidth = container.offsetWidth;
        //     const newWidth = 100 + progress * (maxWidth - 100);

        //     line.style.width = `${newWidth}px`;
        // });

        if (data) {

            research = data.data
            console.log(`research`, research)
            console.log(`display`, display)

            for (let i = 0; i < research.length; i ++) {
                for (let j = 0; j < research[i].Media.length; j ++) {
                    if (research[i].Media[j].__component === "media.values") {
                        console.log(research[i].Media[j])
                        display.push(<RichText data={research[i].Media[j]} />)
                    }
                }

                    // if (research[i].__component === "media.image") {
                    //     display.push(<Image data={research[i]} />)
                    // }
            }

            return (
                <div className="page-wrapper flex column ai-flex-end"  >
                    {display.map((section, index) => 
                        <div key={ index }>
                            { section }
                        <div class="bottom-line" id="line"></div>
                        </div>
                    )}
                </div>
            );
        }
    }
    
    export default Research;