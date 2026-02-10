import AddReminderNav from '../components/AddReminderNav';
import { useState, useEffect } from 'react';

function HomePage() {
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, pomodoroTime]);

  const handleTimerClick = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">Your List of Reminders</h1>

        <div className="reminder-panel">
          <h2 className="dashboard-header">Dashboard</h2>

          {/* Row 1 - Pomodoro */}
          <div className="reminder-row">
            <div className="timer-display" onClick={handleTimerClick}>
              {formatTime(pomodoroTime)}
            </div>
            <div className="status-block">on</div>
            <div className="reminder-text">Pomodoro - 25 minutes on / 5 minutes off repeating</div>
            <button className="action-button">edit</button>
            <button className="action-button">delete</button>
          </div>

          {/* Row 2 */}
          <div className="reminder-row">
            <div className="timer-display">15:00</div>
            <div className="status-block off">off</div>
            <div className="reminder-text">Quick Nap - 15 minutes</div>
            <button className="action-button">edit</button>
            <button className="action-button">delete</button>
          </div>

          {/* Row 3 */}
          <div className="reminder-row">
            <div className="timer-display">45:00</div>
            <div className="status-block off">off</div>
            <div className="reminder-text">Stretch - 30 to 60 (random) minutes</div>
            <button className="action-button">edit</button>
            <button className="action-button">delete</button>
          </div>

          {/* Row 4 */}
          <div className="reminder-row">
            <div className="timer-display">60:00</div>
            <div className="status-block">on</div>
            <div className="reminder-text">Long Break - 60 minutes repeating </div>
            <button className="action-button">edit</button>
            <button className="action-button">delete</button>
          </div>

          {/* Add Reminder */}
          <div className="add-reminder-container">
            <AddReminderNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;