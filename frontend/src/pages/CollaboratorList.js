import { useState } from 'react';
import { useParams } from "react-router-dom"
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import TagFilter from '../components/TagsFilter';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


    function CollaboratorList() {
        const { id } = useParams()
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/collaborator-page?pLevel`)

        let copy = null
        let collaborators = null;
        let tags = null;

        

        if (data) {

            console.log(data)
            copy = data.data
            collaborators = copy.collaborators

            const COLUMNS = 3;

            const remainder = collaborators.length % COLUMNS;
            const emptyCells = remainder === 0 ? 0 : COLUMNS - remainder;
            
            return (
                <div className="page-wrapper flex column ai-flex-end">
                    <div className="collaborator-wrapper flex jc-flex-end">
                        <div className="collaborator-info width-40 bg-black flex column">
                            <BlocksRenderer content={ copy.Page_Copy } />
                            {/* <h1>Skills</h1>
                            <TagFilter /> */}
                        </div>
                        <div className="width-60 layout-grid">
                             {collaborators.map((collaborator, index) => (
                                <div className="collaborator-column" key={index}>
                                    <a href={`/collaborators/${collaborator.slug}`}>
                                    <img
                                        className="profile-picture-small"
                                        src={collaborator.Profile_Picture.url}
                                        alt={collaborator.Name}
                                    />
                                    </a>

                                    <div className="padding-sm">
                                    <h2>{collaborator.Name}</h2>
                                    <h3>{collaborator.Title}</h3>

                                    <div className="flex flex-wrap row-gap-10">
                                        {collaborator.tags?.map((tag, i) => (
                                        <div className="tag" key={i}>
                                            <p>{tag.Tag}</p>
                                        </div>
                                        ))}
                                        {/* Render empty cells to fill out the last row */}
 
                                    </div>
                                    </div>
                                </div>
                                ))}
                                {[...Array(emptyCells)].map((_, i) => (
                                    <div className="collaborator-column empty" key={`empty-${i}`}></div>
                                ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    export default CollaboratorList;