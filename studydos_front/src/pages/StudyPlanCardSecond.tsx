import React, { useState } from "react";

interface TaskSecond {
  id: number;
  title: string;
  subtasks?: TaskSecond[];
  completed: boolean;
}

const StudyPlanCardSecond: React.FC = () => {
  const [tasks, setTasks] = useState<TaskSecond[]>([
    {
      id: 1,
      title: "Feb 23 – Day 1: Key Concepts & Theory",
      completed: true,
      subtasks: [
        { id: 2, title: " Read: “Project Lifecycle Models” (Agile, Waterfall, Hybrid)", completed: true },
      ],
    },
    {
      id: 4,
      title: "Feb 24 – Day 2: Practical Applications",
      completed: false,
      subtasks: [
        { id: 5, title: "Case Study: Analyze a Real-Life Agile Project", completed: false },
        { id: 6, title: "Task: Create a simplified Gantt Chart for a project", completed: false },
      ],
    },
    {
      id: 7,
      title: "Feb 25 – Day 3: Risk Management",
      completed: false,
      subtasks: [
        { id: 8, title: "Read: “Risk Identification Strategies”", completed: false }
      ],
    },
    {
        id: 9,
        title: "Feb 26 – Day 4: Full Practice Quiz & Performance Breakdown",
        completed: false,
        subtasks: [
          { id: 10, title: "Activity: Build a RACI Matrix for a hypothetical project", completed: false }
        ],
      }
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : {
              ...task,
              subtasks: task.subtasks?.map((subtask) =>
                subtask.id === id ? { ...subtask, completed: !subtask.completed } : subtask
              ),
            }
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id).map((task) => ({
        ...task,
        subtasks: task.subtasks?.filter((subtask) => subtask.id !== id),
      }))
    );
  };

  return (
    <div style={styles.card}>
        {/* style={styles.header} */}
      <div style={styles.headerr}>Quiz 1 Prep Plan – CS632 A1</div>
      <div style={styles.taskList}>
        {tasks.map((task) => (
          <div key={task.id}>
            {/* Main Task */}
            <div style={styles.task}>
              <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                style={{textAlign: "left"}}
              />
              <span style={{ textDecoration: task.completed ? "line-through" : "none", marginLeft: "8px" }}>
                {task.title}
              </span>
              </div>
              <button style={styles.removeButton} onClick={() => removeTask(subtask.id)}>
                  <img src="/src/assets/images/remove.png" alt="Remove" style={{ width: "12px", height: "12px" }} />
                </button>
            </div>
            {/* Subtasks */}
            {task.subtasks?.map((subtask) => (
              <div key={subtask.id} style={{ ...styles.task, 
              // marginLeft: "20px", 
              textAlign: "left",
              color: "#707070", fontWeight: "300", fontFamily: "Poppins, sans-serif", marginLeft: "20px"}}>
                <div>
                <input
                  type="checkbox"
                  checked={subtask.completed}
                  onChange={() => toggleTaskCompletion(subtask.id)}
                  style={{marginLeft: "20px"}}
                />
                <span style={{ textDecoration: subtask.completed ? "line-through" : "none", marginLeft: "8px" }}>
                  {subtask.title}
                </span>
                </div>
                <button style={styles.removeButton} onClick={() => removeTask(subtask.id)}>
                  <img src="/src/assets/images/remove.png" alt="Remove" style={{ width: "12px", height: "12px" }} />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const styles = {
  card: {
    width: "500px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    overflow: "hidden",
    color: "707070"
  },
  headerr: {
    backgroundColor: "#E7EDFF", // blue background
    color: "#4471FF",
    fontWeight: "bold",
    padding: "12px",
    textAlign: "center",
  },
  taskList: {
    padding: "13px",
    color: "707070"
  },
  task: {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    gap: "8px",
    // backgroundColor: "#f9f9f9",
    padding: "12px",
    borderRadius: "4px",
    marginBottom: "8px",
    color: "707070",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  removeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    color: "#707070",
  },
};

export default StudyPlanCardSecond;