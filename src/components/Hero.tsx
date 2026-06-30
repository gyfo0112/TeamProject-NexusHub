import './Hero.scss';
import { IconSearch } from './icons'

const recentTags = ['1234-5678-9012', '9876-5432-1011']

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="badge badge-blue">
          <span className="dot" />남양주 터미널 실시간 운영 중
        </span>
        <p className="hero-sub">
          고객의 문 앞까지 안전하게, 라스트마일의 시작.
          <br />
          NexusHub 남양주터미널이 함께합니다.
        </p>
        <h1>
          우리 동네를 가장
          <br />
          잘 아는 배송 파트너
          <span className="brand-name">Nexus<span className="hub">Hub</span></span>
        </h1>
        <div className="search-bar">
          <span className="ico">
            <IconSearch />
          </span>
          <input type="text" placeholder="운송장 번호를 입력하세요 (- 제외)" />
          <button>실시간 배송 조회</button>
        </div>
        <div className="recent">
          <span className="label">최근 검색 :</span>
          {recentTags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
