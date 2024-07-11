//  The Calendar inner Page  :

// A] Importings :

// @ts-ignore
import React  , {useState} from 'react' ;
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
// @ts-ignore
import dayGridPlugin from "@fullcalendar/daygrid";    

import timeGridPlugin from "@fullcalendar/timegrid";   
import interactionPlugin from "@fullcalendar/interaction";     

import { Stack } from "@mui/material";



// @ts-ignore
// import { INITIAL_EVENTS , createEventId  } from "./event-utils ";     




// import { timeGridPlugin } from '@fullcalendar/daygrid';
//  import { dayGridPlugin } from '@fullcalendar/daygrid';
// @ts-ignore
// import { dayGridPlugin } from '@fullcalendar/daygrid';



// B] Public definitions of variables and methods   :
 

    function renderEventContent(eventInfo) {
        return (
            <div>
                <b> {eventInfo.timeText  } </b>
                <i> {eventInfo.event.title  } </i>
            </div>
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
    const [  currentEvents, setcurrentEvents  ] = useState([]);
  
  
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
        let calendarApi = selectInfo.view.Calendar  
 
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
        setcurrentEvents(events)
    }
  

  return (
    <Stack direction={'row'}  >
      This is the calendar inner page component
      
      <div className="demo-app-sidebar">
        
        <div className="demo-app-sidebar-section">
          <h2> Instructions </h2>
          <ul>
            <li>
              Select dates and you will be prompted to create a new event{" "}
            </li>
            <li> Drag, Drop and resize events </li>
            <li> Click on the evenet to delete it from calendar </li>
          </ul>
        </div>

        
        <div className="demo-app-sidebar-section"    >
          <label>
            <input 
                type="checkbox"
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
            >
            </input>
                Toggle Weekends   
            </label>
        </div>

        <div   className="demo-app-sidebar-section" >
            <h2> All Events {   createEventId.length  } </h2> 

            <ul>
            
                {currentEvents.map(renderSidebarEvent)  }            
            </ul>  

        </div>


      </div>

      <div  className='demo-app-main'  > 
        <FullCalendar 
            // @ts-ignore
            plugins={{ dayGridPlugin  , timeGridPlugin ,  interactionPlugin   }}
            headerToolbar ={{
                left: 'prev,next today' ,
                center : 'title' ,
                right : 'dayGridMonth, timeGridWeek , timerGridDay '
            }}
            initialView="dayGridMonth" 
            editable={true} 
            selectable={true} 
            selectMirror={true} 
            dayMaxEvents={true} 
            weekends={weekendsVisible} 
            initialEvents ={INITIAL_EVENTS } 
            select={handleDateSelect } 
            eventContent ={renderEventContent }  // custom  render fuction      
            eventClick ={handleEventClick }        
            eventsSet ={handleEvents }     // called after events initialized 
         
      
        />
      </div>





    </Stack>
  );
};

export default Calendar;
