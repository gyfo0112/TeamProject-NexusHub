import './Header.scss';
import { IconUser, IconLock } from './icons'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const menus = [
  {
    title: '허브소개',
    path: '#',
    sub: [
      { label: '인사말', path: '/about/message' },
      { label: '인프라 및 시스템', path: '/about/infrastructure' },
      { label: '오시는 길', path: '/about/location' },
      { label: '회사연혁', path: '/about/history' }
    ]
  },
  {
    title: '배송조회',
    path: '#',
    sub: [
      { label: '실시간 운송장 조회', path: '/tracking/waybill' },
      { label: '우리 동네 배송 신호등', path: '/tracking/neighborhood' },
      { label: '정기 집화(수거) 조회', path: '/tracking/pickup' }
    ]
  },
  {
    title: '물류상담',
    path: '#',
    sub: [
      { label: '정기 집화(픽업) 계약 문의', path: '/consulting/contract' },
      { label: '택배 기사(SM) 채용 지원', path: '/consulting/driver-recruit' },
      { label: '현장 분류 작업자 지원', path: '/consulting/worker-recruit' }
    ]
  },
  {
    title: '고객센터',
    path: '#',
    sub: [
      { label: '공지사항', path: '/support/notice' },
      { label: '자주 묻는 질문(FAQ)', path: '/support/faq' },
      { label: '파손/분실 보상 접수', path: '/support/claim' }
    ]
  }
]

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
                <a href={menuItem.path} className="nav-link">{menuItem.title}</a>
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
