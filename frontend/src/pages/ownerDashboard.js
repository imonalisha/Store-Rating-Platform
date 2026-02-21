import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OwnerDashboard = () => {
  const [stats, setStats] = useState({ averageRating: 0, ratersList: [] });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get('/api/owner/dashboard', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setStats(res.data);
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard">
      <h1>Store Owner Dashboard</h1>
      <div className="stat-card">
        <h2>Average Rating: {stats.averageRating} / 5 ⭐</h2> {/* [cite: 60] */}
      </div>

      <h3>User Ratings</h3>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Rating Given</th>
          </tr>
        </thead>
        <tbody>
          {stats.ratersList.map((item, index) => (
            <tr key={index}>
              <td>{item.User.name}</td> {/* [cite: 59] */}
              <td>{item.User.email}</td>
              <td>{item.rating_value} Stars</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OwnerDashboard;