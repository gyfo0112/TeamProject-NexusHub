import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Briefcase, Lock, Monitor, Home } from 'lucide-react';
import './AdminLogin.scss';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [secureMode, setSecureMode] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('사내 시스템 접속 중입니다...');
  };

  return (
    <div className="admin-login-page">
      <div className="admin-background">
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="admin-login-container">
        <div className="system-header">
          <Monitor size={24} className="sys-icon" />
          <span>NexusHub 통합 물류 시스템</span>
        </div>

        <div className="admin-login-card">
          <div className="card-header">
            <h1 className="portal-title">STAFF PORTAL</h1>
            <p className="portal-sub">사내 인트라넷 로그인</p>
          </div>

          <form onSubmit={handleLogin} className="admin-form">
            <div className="input-group">
              <label>사원번호 (Employee ID)</label>
              <div className="input-box">
                <Briefcase size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="사번 8자리를 입력하세요"
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="input-group">
              <label>비밀번호 (Password)</label>
              <div className="input-box">
                <Lock size={18} className="input-icon" />
                <input 
                  type="password" 
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={secureMode}
                  onChange={(e) => setSecureMode(e.target.checked)}
                />
                <span className="checkbox-text">지정 IP 보안 접속</span>
              </label>
            </div>

            <button type="submit" className="admin-submit-btn">
              시스템 접속
            </button>
          </form>

          <div className="admin-footer">
            <p className="contact-help">로그인 문제가 발생했나요? <a href="#" onClick={(e) => { e.preventDefault(); alert('IT 지원팀(내선: 1234)으로 문의 바랍니다.'); }}>전산망 관리자에게 문의</a></p>
          </div>
        </div>

        <div className="security-warning">
          <ShieldAlert size={20} className="warning-icon" />
          <div className="warning-text">
            <strong>보안 경고 (SECURITY WARNING)</strong>
            <p>본 시스템은 인가된 사용자만 접근할 수 있습니다. 무단 접근 시 관련 법규에 의거하여 엄격히 처벌될 수 있습니다.</p>
          </div>
        </div>

        <button className="back-public-btn" onClick={() => navigate('/')}>
          <Home size={16} /> 서비스 홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
