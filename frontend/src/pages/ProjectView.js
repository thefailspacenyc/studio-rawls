import { useState } from 'react';
import { useParams } from "react-router-dom"
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import RichText from '../components/RichText';
import Image from '../components/Image';
import Video from '../components/Video';
import MosaicGallery from '../components/Gallery';
import PressQuote from '../components/PressQuote';
import FeaturedProject from '../components/FeaturedProject';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


    function ProjectView() {
        const { id } = useParams()
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects?filters[slug][$eq]=${id}&pLevel`)

        let media = null;
        let project = null;
        let display = [];

        if (data) {

            project = data.data[0]
            media = project.Project_Media
            console.log(project)

            for (let i = 0; i < media.length; i ++) {
                if (media[i].__component === "media.values") {
                    display.push(<RichText data={media[i]} />)
                }
                
                if (media[i].__component === "media.image") {
                    display.push(<Image data={media[i]} />)
                }

                if (media[i].__component === "media.video") {
                    display.push(<Video data={media[i]} />)
                }
                
                if (media[i].__component === "media.press-quote") {
                    display.push(<PressQuote data={media[i]} />)
                }

                if (media[i].__component === "media.image-gallery") {
                    display.push(<MosaicGallery data={media[i]} />)
                }

                if (media[i].__component === "media.featured-project") {
                    display.push(<FeaturedProject data={media[i]} />)
                }
            }

            return (
                <div className="page-wrapper flex column ai-flex-end">
                    <div className="project-wrapper flex jc-space-btwn">
                        <div className='flex column width-50 row-gap-50 media-container'>
                        {display.map((section, index) => 
                            <div key={ index }>
                                { section }
                            </div>
                        )}
                        </div>
                        <div className="collaborator-info width-50 flex column info-container">
                            <h1 className="">{ project.Project_Title }</h1>
                            <h3  >{ project.Premiere_Date }</h3>
                           
                                {project.Project_Description
                                    ? <BlocksRenderer content={ project.Project_Description } />
                                    : null
                                }
                                {/* {projects
                                    ? projects.map((project, index) => (
                                    <div className="tag" key={ index }>
                                        <p>{ project.Project_Title }</p>
                                    </div>
                                    ))
                                    : null
                                } */}
                            <div>
                            <div className='margin-top-40'>
                                {/* {socials
                                    ? socials.map((social, index) => (
                                    <div className="flex column-gap-10 row-gap-10 ai-flex-center " key={ index }>
                                        <img className="social-icon" src={`${ social.Icon[0].url }`} />
                                        <a href={`${social.Link}`} target="_blank"><p className="no-margin-top">{ social.Link }</p></a>
                                    </div>
                                    ))
                                    : null
                                } */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    export default ProjectView;