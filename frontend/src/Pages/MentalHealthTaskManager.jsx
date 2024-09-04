import  { useState, useEffect } from 'react';
import "./TaskManager.css"


function MentalHealthTaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Take a deep breath for 5 minutes', completed: false },
    { id: 2, task: 'Practice mindfulness for 10 minutes', completed: false },
    { id: 3, task: 'Do a quick yoga session', completed: false },
    { id: 4, task: 'Write down 3 things you are grateful for', completed: false },
    { id: 5, task: 'Listen to calming music for 15 minutes', completed: false },
    { id: 6, task: 'Go for a walk outside', completed: false },
    { id: 7, task: 'Drink a glass of water', completed: false },
    { id: 8, task: 'Read a chapter from your favorite book', completed: false },
    { id: 9, task: 'Take a power nap for 20 minutes', completed: false },
    { id: 10, task: 'Do a random act of kindness for someone', completed: false },
  ]);

  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    setCompletedCount(completedTasks);
  }, [tasks]);

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };

  const calculatePercentage = () => {
    if (tasks.length === 0) return 0;
    return Math.round((completedCount / tasks.length) * 100);
  };

  return (
    <div className="container">
      <h2 className="header">Mental Health Task Manager</h2>
      <ul>
        {tasks.map((item) => (
          <li
            key={item.id}
            className={`taskItem ${item.completed ? 'completedTask' : ''}`}
            onClick={() => handleToggle(item.id)}
          >
            <input
              type="checkbox"
              checked={item.completed}
              className="checkbox"
              onChange={() => handleToggle(item.id)}
            />
            <span>{item.task}</span>
          </li>
        ))}
      </ul>
      <div className="progressBar">
        <p>{` Tasks Complete:  ${calculatePercentage()}% `}</p>
        <div className="progressBarInner">
          <div
            className="progressBarProgress"
            style={{ width: `${calculatePercentage()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MentalHealthTaskManager;
