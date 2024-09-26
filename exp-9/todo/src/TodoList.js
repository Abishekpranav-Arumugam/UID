import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);  // Array to store tasks
  const [taskInput, setTaskInput] = useState(''); // Controlled input field for new tasks

  // Function to handle adding new task
  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]); // Add new task to the list
      setTaskInput(''); // Clear input field
    }
  };

  // Function to delete a task
  const handleDeleteTask = (indexToRemove) => {
    const newTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(newTasks); // Update the tasks array without the removed task
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>
          Add Task
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            {task}
            <button onClick={() => handleDeleteTask(index)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const styles = {
  container: {
    margin: '20px auto',
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'lightblue', // Add blue background color
    padding: '20px', // Add padding for better spacing
    borderRadius: '10px', // Optional: Add rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for better visual appeal
  },
  inputContainer: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
  },
  addButton: {
    padding: '10px',
    marginLeft: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default TodoList;
