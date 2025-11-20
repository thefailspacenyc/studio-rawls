import { useState } from 'react';
import { useParams } from "react-router-dom"
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


    function CollaboratorView() {
        const { id } = useParams()
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/collaborators?filters[slug][$eq]=${id}&pLevel`)

        let collaborator = null;
        let projects = null;
        let tags = null;
        let socials = null;

        if (data) {

            collaborator = data.data[0]
            projects = collaborator.projects
            tags = collaborator.tags
            socials = collaborator.Social_Link

            console.log(collaborator)

            return (
                <div className="page-wrapper flex column ai-flex-end">
                    <div className="collaborator-wrapper flex jc-flex-end">
                        <img className="profile-picture" src={`${ collaborator.Profile_Picture.url }`} />
                        <div className="collaborator-info width-50 flex column">
                            <h1 className="collaborator-name">{ collaborator.Name }</h1>
                            <h3  >{ collaborator.Title }</h3>
                            <div className="flex">
                                {tags
                                    ? collaborator.tags.map((tag, index) => (
                                        <div className="tag" key={index}>
                                            <p>{tag.Tag}</p>
                                        </div>
                                        ))
                                    : null 
                                }
                            </div>
                                {collaborator.Bio 
                                    ? <BlocksRenderer content={ collaborator.Bio } />
                                    : null
                                }
                                <h2 className="color-seafoam">Current Projects</h2>
                                {projects
                                    ? projects.map((project, index) => (
                                    <div className="tag" key={ index }>
                                        <p>{ project.Project_Title }</p>
                                    </div>
                                    ))
                                    : null
                                }
                            <div>
                            <div className='margin-top-40'>
                                {socials
                                    ? socials.map((social, index) => (
                                    <div className="flex column-gap-10 row-gap-10 ai-flex-center " key={ index }>
                                        <img className="social-icon" src={`${ social.Icon[0].url }`} />
                                        <a href={`${social.Link}`} target="_blank"><p className="no-margin-top">{ social.Link }</p></a>
                                    </div>
                                    ))
                                    : null
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    export default CollaboratorView;