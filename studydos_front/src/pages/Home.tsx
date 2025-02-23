import React from 'react';
import { useState } from "react";

interface DeadlineItemProps {
  courseCode: string;
  assignmentName: string;
  description: string;
  dueDate: string;
  daysLeft?: number;
  isOverdue?: boolean;
  courseColor?: string;
  dueColor?: string;
}

const DeadlineItem: React.FC<DeadlineItemProps> = ({
  courseCode,
  assignmentName,
  description,
  dueDate,
  daysLeft,
  courseColor,
  dueColor,
  isOverdue
}) => {

  let statusColor = '#16DBAA';

  if (daysLeft != undefined && daysLeft <= 5) {
    statusColor = "#F97316";
  }
  let statusText = `${daysLeft} days left`;

  if (isOverdue) {
    statusColor = '#FE5C73';
    statusText = 'Overdue';
  } else if (daysLeft !== undefined && daysLeft <= 3) {
    statusColor = 'orange';
  }

  const deadlineItemStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: '16px',
    marginBottom: '16px',
  };

  const courseCodeStyle = {
    borderRadius: '50%',
    backgroundColor: courseColor || '#E7EDFF', // Gray-200 equivalent
    width: '100px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    color: '#4b5563', // Gray-700 equivalent
    marginRight: '16px',
  };

  const assignmentNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1f2937', // Gray-900 equivalent
  };

  const descriptionStyle = {
    color: '#4b5563', // Gray-600 equivalent
  };

  const statusStyle = {
    color: statusColor,
    fontSize: '14px',
    textAlign: 'right',
  };


  return (
    <div style={deadlineItemStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={courseCodeStyle}>
          {courseCode}
        </div>
        <div>
          <h3 style={assignmentNameStyle}>{assignmentName}</h3>
          <p style={descriptionStyle}>{description}</p>
        </div>
        <div style={{ marginLeft: 'auto', marginTop: '8px'}}>
          <p style={{ textAlign: 'right', color: statusColor }}>
            {dueDate}
            <br />
            <span style={{ color: '#6B7280' }}>{statusText}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

interface UpcomingDeadlinesProps {
  deadlines: DeadlineItemProps[];
}

const UpcomingDeadlines: React.FC<UpcomingDeadlinesProps> = ({ deadlines }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '16px' }}>Upcoming Deadlines</h2>
      {deadlines.map((deadline, index) => (
        <DeadlineItem
          key={index}
          courseCode={deadline.courseCode}
          assignmentName={deadline.assignmentName}
          description={deadline.description}
          dueDate={deadline.dueDate}
          daysLeft={deadline.daysLeft}
          isOverdue={deadline.isOverdue}
          courseColor={deadline.courseColor} 
        />
      ))}
    </div>
  );
};

const DailyStudyPlan: React.FC = () => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '16px' }}>Daily Study Plan - <span style={{ color: '#3366FF' }}>Feb 11, 2025</span></h2>
      <p style={{ color: '#4b5563' }}>Coming Soon!</p>
    </div>
  );
};

const images = [
  "src/assets/images/first.png",
  "https://via.placeholder.com/400/ff0000",
  "https://via.placeholder.com/400/00ff00",
  "https://via.placeholder.com/400/0000ff",
];

const ImportantReminders: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: "16px" }}>
      {/* Header with "Important Reminders" and "All" button */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#374151" }}>Important Reminders</h2>
        <button style={{ backgroundColor: "transparent", color: "#36F", cursor: "pointer", fontSize: "16px", border: "none"}}>
          All
        </button>
      </div>

      {/* Image Container */}
      <div style={{ position: "relative", width: "100%", maxWidth: "400px", margin: "0 auto" }}>
        {/* <button onClick={prevSlide} style={navButtonStyle}>❮</button> */}
        <img src={images[currentIndex]} alt="Reminder" style={{ width: "100%", borderRadius: "8px" }} />
        {/* <button onClick={nextSlide} style={{ ...navButtonStyle, right: "10px" }}>❯</button> */}
      </div>

      {/* Dots Indicator */}
      <div style={{ marginTop: "10px" }}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              height: "9px",
              width: "9px",
              margin: "5px",
              backgroundColor: currentIndex === index ? "#707070" : "#ccc",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// Navigation button styles
const navButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "10px",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
};

const Home: React.FC = () => {
  const deadlineData: DeadlineItemProps[] = [
    {
      courseCode: 'CS546 A2',
      assignmentName: 'Assignment 2',
      description: 'Descriptive Statistics and Data Visualization',
      dueDate: 'Feb 27, 2025 23:59',
      daysLeft: 5,
      courseColor: '#FFE0EB',
    },
    {
      courseCode: 'CS632 A1',
      assignmentName: 'Quiz 1',
      description: 'Descriptive Statistics and Data Visualization',
      dueDate: 'March 3, 2025 23:59',
      daysLeft: 10,
      courseColor: '#E7EDFF',
    },
    {
      courseCode: 'CS782 A1',
      assignmentName: 'Assignment 1',
      description: 'Descriptive Statistics and Data Visualization',
      dueDate: 'Feb 20, 2025 23:59',
      isOverdue: true,
      courseColor: '#FFF5D9'
    },
  ];

  const containerStyle = {
    maxWidth: '1200px', // Увеличьте ширину контейнера, если нужно
    margin: '0 auto',
    padding: '32px',
    backgroundColor: '#f9fafb', // Gray-50 equivalent
    minHeight: '100vh',
  };
  
  const contentWrapperStyle = {
    display: 'flex',
    gap: '24px', // Добавляет пространство между элементами
    alignItems: 'flex-start', // Выравнивает элементы по верхнему краю
  };
  
  const panelStyle = {
    flex: 2, // Обеспечивает равномерное распределение ширины
    minWidth: '550px', // Минимальная ширина для адаптивности
  };

  const dailyStudyPlanStyle = {
    flex: 1, // Занимает меньше места
    minWidth: '250px', 
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={panelStyle}>
          <UpcomingDeadlines deadlines={deadlineData} />
        </div>
        <div style={dailyStudyPlanStyle}>
          <ImportantReminders />
        </div>
      </div>

      <DailyStudyPlan />
  </div>
    // <div style={containerStyle}>
    //   <UpcomingDeadlines deadlines={deadlineData} />
    //   <DailyStudyPlan />
    // </div>
  );
};

export default Home;