import React, { useState } from 'react';
import './Sidebar.css';

import HomeIcon from '../assets/icons/home-icon.svg';
import ScheduleIcon from '../assets/icons/schedule-icon.svg';
import LessonsIcon from '../assets/icons/lessons-icon.svg';
import AiIcon from '../assets/icons/ai-assistant-icon.svg';
import AnalyticsIcon from '../assets/icons/analytics-icon.svg';
import NotificationsIcon from '../assets/icons/notifications-icon.svg';
import SettingsIcon from '../assets/icons/settings-icon.svg';
import SupportIcon from '../assets/icons/support-icon.svg';
import Illustration from '../assets/illustration.png';
import LogoImage from '../assets/logo.svg';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          {/* Show the logo image when not collapsed */}
          {!isCollapsed && (
            <img
              src={LogoImage}
              alt="StudyDos Logo"
              className="logo-image"
            />
          )}
        </div>
        <button className="toggle-btn" onClick={handleToggle}>
          {isCollapsed ? '>' : '<'}
        </button>
      </div>

      <ul className="menu-list">
        <li className="menu-item">
          <img src={HomeIcon} alt="Home" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">Home</span>}
        </li>
        <li className="menu-item">
          <img src={ScheduleIcon} alt="Schedule" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">Schedule</span>}
        </li>
        <li className="menu-item">
          <img src={LessonsIcon} alt="Lessons" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">Lessons</span>}
        </li>
        <li className="menu-item">
          <img src={AiIcon} alt="AI Assistant" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">AI Assistant</span>}
        </li>
        <li className="menu-item">
          <img src={AnalyticsIcon} alt="Analytics" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">Analytics</span>}
        </li>
        <hr className="menu-divider" />
        <li className="menu-item">
          <img src={NotificationsIcon} alt="Notifications" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">Notifications</span>}
        </li>
        <li className="menu-item">
          <img src={SettingsIcon} alt="Settings" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">Settings</span>}
        </li>
        <li className="menu-item">
          <img src={SupportIcon} alt="Support" className="menu-icon" />
          {!isCollapsed && <span className="menu-text">Support</span>}
        </li>
      </ul>

      <div className="sidebar-cta">
        {/* Illustration */}
        {!isCollapsed && (
          <img src={Illustration} alt="StudyDos Illustration" className="cta-illustration" />
        )}

        {/* CTA Button */}
        <button className="cta-button">
          {!isCollapsed ? 'Ask StudyDos' : 'Ask'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;