import { IconGrid, IconSearch } from './icons'
import { serviceCards } from '../data/content'

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="grid-2">
          <div>
            <span className="badge badge-orange">
              <span className="dot" />주요 서비스
            </span>
            <h2 className="sec-title">NexusHub 주요 서비스</h2>
            <p className="sec-desc">
              {'고객의 문 앞까지 안전하게, 라스트마일의 시작.\nNexusHub 남양주터미널이 함께합니다.'}
            </p>
            <button className="btn btn-orange">정기 픽업 단가 문의하기 →</button>
          </div>

          <div className="service-panel">
            <div className="panel-head">
              <div className="t">
                <IconGrid />NexusHub 주요 서비스
              </div>
              <div className="d">남양주 터미널이 제공하는 핵심 기능을 한눈에 확인하세요</div>
            </div>
            <div className="service-cards">
              {serviceCards.map((card, i) => (
                <div className="svc-card" key={i}>
                  <div className="ci">
                    <IconSearch />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  <div className="chips">
                    {card.chips.map((chip) => (
                      <span className="chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
