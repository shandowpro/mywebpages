//  The Calendar inner Page  :


// A] Importings :
import './Calendar.css'


// @ts-ignore
import React  , {Fragment, useState} from 'react' ;
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
// @ts-ignore
import dayGridPlugin from "@fullcalendar/daygrid";    

import timeGridPlugin from "@fullcalendar/timegrid";   
import interactionPlugin from "@fullcalendar/interaction";     

import { Paper, Stack } from "@mui/material";



// @ts-ignore
// import { INITIAL_EVENTS , createEventId  } from "./event-utils ";     
 

// B] Public definitions of variables and methods   :
 

    function renderEventContent(eventInfo) {
        return (
            <Fragment>
                <b> {eventInfo.timeText} </b>
                <i> {eventInfo.event.title} </i>
            </Fragment>
        ) ;
    } 

    
    function renderSidebarEvent(event) {
        return (
            <li  key={event.id} >        
                <b> {
                     formatDate(event.start ,
                     {year:'numeric' , month:'short' , day :'numeric' })   
                    } 
                </b>
                <i> { event.title  } </i>
            </li>
        )
    } 
 


// Main functionl componoent :
const Calendar = () => {
  //  C]  Hooks defintion  :
    const [  weekendsVisible, setweekendsVisible  ] = useState(true);
    const [  currentEvents, setCurrentEvents  ] = useState([]);
  
  
    const handleWeekendsToggle = () => {
       setweekendsVisible(!weekendsVisible)
    }


    let eventGuid = 0 ;
    let todayStr = new Date().toISOString().replace(/T.*$/, '' )  ;


    const INITIAL_EVENTS  = [
     {
        id : createEventId(),   
        title : 'all-day event' ,   
        start: todayStr  
    }, 
    {
        id : createEventId(),   
        title : 'Timed event' ,   
        start: todayStr +  'T12:00:00'        
     }
    ]  

    function createEventId() {
        return  String(eventGuid++)   
     }


    const handleDateSelect  = (selectInfo) => {
        let title = prompt('Please enter a new title for you event')      
        let calendarApi = selectInfo.view.calendar  
 
        //clear date selections  
        calendarApi.unselect() 


        if  (title) {
            calendarApi.addEvent({
                id : createEventId(),
                title,
                start : selectInfo.startStr,
                end : selectInfo.endStr,
                allDay  : selectInfo.allDay  
            }) 
        }          
    }


    const handleEventClick = (clickInfo) => {
        if (confirm(`Are you sure you want to delete the event  ${clickInfo.event.title} `)) {
            clickInfo.event.remove() ;
        }
    }  

    const handleEvents = (events) => {
        setCurrentEvents(events)
    }
  

  return (
    <Stack direction={'row'}  >
     
      <Paper className="demo-app-sidebar">
        <div   className="demo-app-sidebar-section" >
            <h2 style={{  textAlign:'center'  }}  >
                 All Events {   currentEvents.length  } 
             </h2> 

            <ul>
                {currentEvents.map(renderSidebarEvent)  }            
            </ul>  

        </div>
      </Paper>

      <div  className='demo-app-main'  > 
        <FullCalendar 
            // @ts-ignore
            plugins={ [ dayGridPlugin  , timeGridPlugin ,  interactionPlugin    ]}
            headerToolbar ={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        />
      </div>

    </Stack>
  );
};

export default Calendar;
