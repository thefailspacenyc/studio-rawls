import { useState } from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

/* === COMPONENTS === */
import useFetch from "../useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


    function TagFilter() {
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/tags?plevel`)

        let tags = null

        if (data) {

            tags = data.data

            return (
                <div className="flex column-gap-10">
                    {tags 
                        ? tags.map((tag, index) => 
                        <div key={ index } className="tag">
                            <p>{ tag.Tag }</p>
                        </div>
                    ) : null }
                </div>
            );
        }
    }
    
    export default TagFilter;