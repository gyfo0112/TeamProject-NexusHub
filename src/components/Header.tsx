import { IconUser, IconLock } from './icons'

const menu = ['허브소개', '배송조회', '회사연혁', '물류상담', '고객센터']

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <span className="mark">N</span>
            <span>
              <span className="name">NexusHub</span>
              <span className="sub">남양주주터미널</span>
            </span>
          </a>
          <ul className="nav-menu">
            {menu.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <a href="#" className="login">
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
