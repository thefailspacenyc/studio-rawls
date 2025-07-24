import { useState } from 'react';
import { useParams } from "react-router-dom"
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


    function FeaturedProject(props) {

        let project = props.data          

        console.log('project', project)
            return (
                <div className="page-wrapper flex column ai-flex-end bg-secondary-util">
                    <div className="collaborator-wrapper jc-flex-end flex ai-flex-center relative ">
                        <div className="width-50 flex column featured-project-info">
                            <h1>{ project.Project_Title }</h1>
                            <BlocksRenderer content={ project.Project_Description } />
                        </div>
                        <img className="profile-picture" src={`${process.env.REACT_APP_BACKEND}${ project.Project_Image.url }`} />

                    </div>
                </div>
            );
    }
    
    export default FeaturedProject;