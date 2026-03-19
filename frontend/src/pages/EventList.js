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


    function EventList() {
        const { id } = useParams()
        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/events?populate=deep`)

        let events = null
        let singleEvent = null;

        const [selectedEvent, setSelectedEvent] = useState(0);

        const handleSelectEvent = (event) => {
          setSelectedEvent(event);
          console.log(event)
        };

        if (data) {

            events = data.data
            singleEvent = data.data[selectedEvent]
            console.log(events)

            return (
                <div className="page-wrapper flex column ai-flex-end">
                    <div className="events-wrapper flex">
                        <div className="event-border"></div>
                        <div className="collaborator-info  layout-grid columns-three ">
                        {events.map((event, index) => 
                            <div 
                                className={`collaborator-column`} 
                                key={ index }
                                id={ index }
                                onClick={() => handleSelectEvent(index)}
                                style={{ cursor: "pointer" }}>
                                <div  className={`${index === selectedEvent ? "selected-event" : ""}`}>
                                    <img className="profile-picture-small" src={`${process.env.REACT_APP_BACKEND}${ event.Event_Thumbnail[0].url }`} />
                                </div>
                                <div className="padding-sm">
                                    <h2>{ event.Event_Title }</h2>
                                    <p>{ event.Date_Written }</p>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="event-info-wrapper flex">
                        <div className="event-description width-50">
                            <BlocksRenderer content={ singleEvent.Event_Description } />
                        </div>
                        <div className="event-details width-50">
                            <BlocksRenderer content={ singleEvent.Event_Details } />
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    export default EventList;