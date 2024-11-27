import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      {/* Statistics Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <h2>Total Users</h2>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h2>Total Roles</h2>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h2>Active Users</h2>
          <p>80</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="activity-feed">
        <h2>Recent Activity</h2>
        <ul>
          <li>User *John Doe* was added</li>
          <li>Role *Admin* was updated</li>
          <li>User *Jane Smith* was deleted</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

export {};