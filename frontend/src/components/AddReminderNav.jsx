import {Link} from 'react-router-dom';

function AddReminderNav() {
    return (
       <nav className="add-reminder-nav">
            <Link to="/AddReminder" className="add-reminder-link">Add Reminder</Link>
        </nav>
    )
}

export default AddReminderNav;