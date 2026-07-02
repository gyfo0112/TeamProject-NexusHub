import { NavLink } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h1 className="logo">
          <span className="brand">NexusHub</span> <span className="divider">|</span> 직원 인트라넷
        </h1>
      </div>

      <div className="header-right">
        <div className="terminal-name">남양주 터미널</div>
        <div className="current-time">2026-06-24 (수) 09:42</div>
        <div className="user-info">
          <div className="user-badge">
            <User size={14} />
            <span>김판수 반장 (통합센터)</span>
          </div>
        </div>
        <button className="btn-logout">
          로그아웃 <LogOut size={14} />
        </button>
      </div>
    </header>
  );
}
