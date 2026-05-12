import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`loading-screen${done ? ' done' : ''}`}>
      <div className="loading-monogram">
        H<em>C</em>
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
      <span className="loading-sub">Portfolio · 2025</span>
    </div>
  )
}
