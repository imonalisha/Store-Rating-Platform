import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../components/starrating'; // Component you created earlier

const UserDashboard = () => {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState('');

  const fetchStores = async () => {
    const res = await axios.get(`/api/user/stores?search=${search}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setStores(res.data);
  };

  useEffect(() => { fetchStores(); }, [search]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by Name or Address..." 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div className="store-list">
        {stores.map(store => (
          <div key={store.id} className="store-card">
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            {/* PDF Requirement: Option to submit/modify rating  */}
            <StarRating onRate={(val) => handleRate(store.id, val)} />
          </div>
        ))}
      </div>
    </div>
  );
};