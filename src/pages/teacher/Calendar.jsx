import React, { useEffect, useState } from 'react';
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import '../../styles/cal.css';
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
  createViewMonthAgenda,
} from '@schedule-x/calendar';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { createEventModalPlugin } from '@schedule-x/event-modal';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
import '@schedule-x/theme-default/dist/index.css';

const CalendarApp = () => {
  const eventsService = createEventsServicePlugin();
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'TODAYS TASK',
      start: '2024-12-18',
      end: '2024-12-19',
      description: 'Fix the prbs, put them all in the data.js file + notification pop-up',
    },
    {
      id: '2',
      title: 'Mom’s Birthday',
      start: '2024-12-18 12:00',
      end: '2024-12-19 12:00',
      description: 'Plan a surprise for Mom’s birthday.',
    },
    {
      id: '3',
      title: 'Team Meeting',
      start: '2024-12-20 13:00',
      end: '2024-12-20 15:00',
      description: 'Monthly team sync-up meeting.',
    },
  ]);

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events,
    plugins: [
      createEventModalPlugin({
        onSubmit: (updatedEvent) => {
          setEvents((prevEvents) =>
            prevEvents.map((event) =>
              event.id === updatedEvent.id ? updatedEvent : event
            )
          );
        },
        onDelete: (eventId) => {
          setEvents((prevEvents) =>
            prevEvents.filter((event) => event.id !== eventId)
          );
        },
      }),
      createDragAndDropPlugin(),
      eventsService,
    ],
  });

  useEffect(() => {
    eventsService.getAll();
  }, [eventsService]);

  return (
    <div className="p-6 bg-slate-100 min-h-screen font-sans">
      <div className="p-10 mb-3 bg-white rounded-3xl shadow-lg">
        <h1 className="text-3xl pb-5 font-bold text-gray-700">Calendar</h1>
        <div className="sx-react-calendar-wrapper max-w-7xl mx-auto shadow-lg rounded-lg">
          <ScheduleXCalendar calendarApp={calendar} />
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
