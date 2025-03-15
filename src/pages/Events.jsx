import React, { useState } from "react";
import "../styles/Events.css";
import Header from "./Header.jsx";
import Footer from "./Footeer.jsx";
import EventImg1 from "../images/Eevent-image1.jpg";
import EventImg2 from "../images/Eevent-image2.jpg";
import EventImg3 from "../images/Eevent-image3.jpg";

const Event = () => {
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editEventId, setEditEventId] = useState(null);

    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Music Festival",
            date: "2025-04-20",
            location: "Los Angeles",
            category: "Social",
            description: "Experience live music with top artists.",
            image: EventImg1,
        },
        {
            id: 2,
            title: "Tech Conference",
            date: "2025-06-15",
            location: "San Francisco",
            category: "Technology",
            description: "Join the biggest tech event of the year!",
            image: EventImg2,
        },
        {
            id: 3,
            title: "Food Carnival",
            date: "2025-08-10",
            location: "New York",
            category: "Food",
            description: "Enjoy delicious food from top chefs.",
            image: EventImg3,
        },
    ]);

    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        location: "",
        category: "",
        description: "",
        image: null,
    });

    const toggleForm = () => {
        setShowForm(!showForm);
        setIsEditing(false);
        setNewEvent({ title: "", date: "", location: "", category: "", description: "", image: null });
    };

    const handleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewEvent({ ...newEvent, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.category || !newEvent.description || !newEvent.image) {
            alert("Please fill in all fields.");
            return;
        }

        if (isEditing) {
            // Update existing event
            setEvents(events.map(event => event.id === editEventId ? { ...newEvent, id: editEventId } : event));
        } else {
            // Add new event
            setEvents([...events, { id: events.length + 1, ...newEvent }]);
        }

        toggleForm();
    };

    const handleEdit = (event) => {
        setNewEvent(event);
        setEditEventId(event.id);
        setIsEditing(true);
        setShowForm(true);
    };

    const handleDelete = () => {
        setEvents(events.filter(event => event.id !== editEventId));
        toggleForm();
    };

    return (
        <div className="events-page">
               <Header />
            <h1 className="events-title">Upcoming Events</h1>

            {/* Add Event Button */}
            <button className="add-event-btn" onClick={toggleForm}>
                + Add Event
            </button>

            {/* Event Cards */}
            <div className="events-container">
                {events.map((event, index) => (
                    <div 
                        key={event.id} 
                        className={`event-card animated ${index % 2 === 0 ? "left-align" : "right-align"} ${index % 3 === 0 ? "unique-color" : ""}`}
                    >
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-details">
                            <h2>{event.title}</h2>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <p><strong>Category:</strong> {event.category}</p>
                            <p className="description">{event.description}</p>
                            <button className="edit-btn" onClick={() => handleEdit(event)}>Update</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Form */}
            {showForm && (
                <div className="popup-form">
                    <div className="form-container">
                        <h2>{isEditing ? "Edit Event" : "Add New Event"}</h2>
                        <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} />
                        <input type="date" name="date" value={newEvent.date} onChange={handleChange} />
                        <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} />
                        <select name="category" value={newEvent.category} onChange={handleChange}>
                            <option value="">Select Category</option>
                            <option value="Social">Social</option>
                            <option value="Technology">Technology</option>
                            <option value="Food">Food</option>
                            <option value="Food">Religious</option>
                            <option value="Food">Charity</option>
                        </select>
                        <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleChange}></textarea>

                        {/* Image Upload */}
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                        {newEvent.image && <img src={newEvent.image} alt="Preview" className="event-image-preview" />}

                        <button className="submit-btn" onClick={handleSubmit}>{isEditing ? "Update Event" : "Submit"}</button>

                        {isEditing && <button className="delete-btn" onClick={handleDelete}>Delete Event</button>}

                        <button className="close-btn" onClick={toggleForm}>Close</button>
                    </div>
                </div>
            )}
              <Footer />
        </div>
    );
};

export default Event;
