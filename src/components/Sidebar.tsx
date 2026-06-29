import { Link, useLocation } from 'react-router-dom';

type SidebarItem = {
  label: string;
  path: string;
  icon: React.ElementType;
};

type SidebarProps = {
  data: {
    title: string;
    items: SidebarItem[];
  }
};

export default function Sidebar({ data }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>{data.title}</h2>
      </div>
      <ul className="sidebar-menu">
        {data.items.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <li key={item.path}>
              <Link to={item.path} className={`sidebar-link ${isActive ? 'active' : ''}`}>
                <span className="icon"><Icon size={20} /></span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
