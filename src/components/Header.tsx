import './Header.scss';
import { IconUser, IconLock } from './icons'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

import { Link } from 'react-router-dom'
import { menus } from '../data/menuData'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="mark">
              <img src="/Logo.svg" alt="NexusHub Logo" />
            </span>
            <span>
              <span className="name">NexusHub</span>
              <span className="sub">남양주 터미널</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="nav-menu">
            {menus.map((menuItem) => (
              <li key={menuItem.title} className="nav-item">
                <Link to={menuItem.path} className="nav-link">{menuItem.title}</Link>
                <div className="dropdown-wrapper">
                  <ul className="dropdown">
                    {menuItem.sub.map((subItem) => (
                      <li key={subItem.label}>
                        <Link to={subItem.path}>{subItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <Link to="/login" className="login">
              <IconUser />로그인
            </Link>
            <Link to="/admin/login" className="staff">
              <IconLock />직원 로그인
            </Link>
            
            {/* Hamburger Toggle */}
            <button className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {menus.map(menuItem => (
            <div key={menuItem.title} className="mobile-nav-group">
              <h4>{menuItem.title}</h4>
              <ul>
                {menuItem.sub.map(subItem => (
                  <li key={subItem.label}>
                    <Link to={subItem.path} onClick={() => setIsMobileOpen(false)}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mobile-nav-footer">
            <Link to="/login" className="mobile-login" onClick={() => setIsMobileOpen(false)}>
              <IconUser />로그인
            </Link>
            <Link to="/admin/login" className="mobile-staff" onClick={() => setIsMobileOpen(false)}>
              <IconLock />직원 로그인
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
