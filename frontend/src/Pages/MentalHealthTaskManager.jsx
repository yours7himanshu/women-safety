import { useState, useEffect } from 'react';

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
    <div className="w-screen h-screen font-sans pt-24 flex flex-col items-center">
      <h2 className="text-center mb-5 text-4xl text-blue-800 font-bold">Mental Health Task Manager</h2>
      <ul className="w-full max-w-md">
        {tasks.map((item) => (
          <li
            key={item.id}
            className={`flex flex-row-reverse items-center w-11/12 mt-2 mb-2 cursor-pointer ml-8 ${item.completed ? 'line-through text-gray-600' : ''}`}
            onClick={() => handleToggle(item.id)}
          >
            <input
              type="checkbox"
              checked={item.completed}
              className="mr-2 h-4 w-4"
              onChange={() => handleToggle(item.id)}
            />
            <span className="block w-full text-lg">{item.task}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 text-center w-2/5">
        <p className="mb-2 text-2xl text-red-600 font-extrabold">{`Tasks Complete: ${calculatePercentage()}%`}</p>
        <div className="w-full bg-gray-300 rounded-md">
          <div
            className="bg-green-500 h-5 rounded-md"
            style={{ width: `${calculatePercentage()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MentalHealthTaskManager;