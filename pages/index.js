import { useState } from 'react'
import LoginForm from '../components/login-form'
import { getToken } from '../services/data-fetcher'
import CookieStandAdmin from '../components/cookie-stand-admin'

export default function Home() {
  const [token, setToken] = useState();
  const [username, setUsername] = useState();

  async function loginHandle(values) {
    const fetchedToken = await getToken(values);
    setToken(fetchedToken);
    setUsername(values.username);
  }
  function logoutHandle() {
    setToken(null);
  }

  if (!token) return <LoginForm onSubmit={loginHandle} />

  return <CookieStandAdmin token={token} onLogout={logoutHandle} username={username} />
}