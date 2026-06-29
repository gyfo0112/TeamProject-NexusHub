import './Header.scss';
import { IconUser, IconLock } from './icons'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { menus } from '../data/menuData'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
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
            <a href="/old-version.html" className="login">
              <IconUser />로그인
            </a>
            <a href="#" className="staff">
              <IconLock />직원 로그인
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
