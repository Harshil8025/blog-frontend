import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import API_URL from '../api';

const Protected = () => {
  const [msg, setMsg] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${API_URL}/auth/protected`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg('Access denied'));
  }, []);

  return user ? (
    <div>
      <h2>Protected Page</h2>
      <p>{msg}</p>
    </div>
  ) : null;
};

export default Protected;
