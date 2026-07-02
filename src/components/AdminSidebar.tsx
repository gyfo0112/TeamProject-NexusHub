import { NavLink } from 'react-router-dom';

const sidebarData = [
  {
    category: '운영 대시보드',
    items: [
      { label: '통합 가동률 및 물동량', subLabel: '현재 페이지', path: '/admin/dashboard' }
    ]
  },
  {
    category: '터미널 물류 통제',
    items: [
      { label: '입/출고 도크 현황', path: '/admin/logistics/dock' },
      { label: '분류 및 상하차 통제', path: '/admin/logistics/control' },
      { label: '예외 화물 및 CS 처리반', path: '/admin/logistics/cs' }
    ]
  },
  {
    category: '배송 및 기사 관리',
    items: [
      { label: '택배기사 배차 및 배송 구역 관리', path: '/admin/delivery/dispatch' },
      { label: '지역 집화(수거) 현황 관리', path: '/admin/delivery/pickup' }
    ]
  },
  {
    category: '인력 및 시스템',
    items: [
      { label: '현장 인력 관리', path: '/admin/system/hr' },
      { label: '시스템 설정 및 권한 관리', path: '/admin/system/settings' }
    ]
  }
];

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="current-terminal-box">
        <span className="label">현재 터미널</span>
        <span className="value">남양주 터미널</span>
      </div>

      <div className="sidebar-menus">
        {sidebarData.map((group, idx) => (
          <div className="sidebar-group" key={idx}>
            <div className="group-title">{group.category}</div>
            <ul className="group-list">
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  >
                    <div className="nav-text">
                      <div className="label">{item.label}</div>
                      {item.subLabel && <div className="sub-label">{item.subLabel}</div>}
                    </div>
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
