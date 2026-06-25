import { IconPin, IconFax, IconPhone, IconMail } from './icons'

interface FootCol {
  title: string
  links: string[]
}
const footCols: FootCol[] = [
  { title: '허브소개', links: ['센터장 인사말', '만조의 길 시스템', '오시는 길'] },
  { title: '배송조회', links: ['일반운송장조회', '우리동네택배함', '지역집화수거방법'] },
  { title: '회사연혁', links: [] },
  { title: '물류상담', links: ['상담신청', '상담요청'] },
]

const csLinks = ['공지사항', '자주묻는질문', '파손/분실접수']

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="logo">
              <span className="mark">N</span>
              <span>
                <span className="name">NexusHub</span>
                <span className="sub">남양주주터미널</span>
              </span>
            </a>
            <p>
              고객의 신뢰를 잇는 스마트 물류 허브,
              <br />
              NexusHub가 함께합니다.
            </p>
            <div className="addr-t">터미널 주소</div>
            <div className="addr">
              <IconPin />경기도 남양주시 진접읍 물류로 123
            </div>
            <div className="addr">
              <IconFax />팩스: 031-XXX-XXXX
            </div>
            <div className="sns">
              <span>
                <IconPhone size={16} />
              </span>
              <span>
                <IconMail size={16} />
              </span>
            </div>
          </div>

          {footCols.map((col) => (
            <div className="foot-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className="foot-cs">
            <h5>고객센터</h5>
            {csLinks.map((link) => (
              <a href="#" className="cs-link" key={link}>
                {link}
              </a>
            ))}
            <h5>고객센터</h5>
            <div className="tel">
              <IconPhone />1588-XXXX
            </div>
            <div className="hrs">
              평일 09:00 ~ 18:00
              <br />
              점심 12:00 ~ 13:00 휴게
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>Copyright © 2026 NexusHub Namyangju. All rights reserved.</span>
          <div className="links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">터미널 오시는 길</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
