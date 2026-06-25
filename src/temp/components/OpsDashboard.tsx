import { Fragment } from 'react'
import { dashStats, dashRows } from '../data/content'

// "운송장 단위 / 실시간 추적" 처럼 \n 을 <br/> 로 바꿔주는 헬퍼
function withBreaks(text: string) {
  return text.split('\n').map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ))
}

const ctaText = '운송장 단위\n실시간 추적'
const ctaSub = '피크타임, 운송중,\n상차완료, 미들급 표시'

export default function OpsDashboard() {
  return (
    <section className="ops">
      <div className="container">
        <div className="grid-2">
          <div>
            <span className="badge badge-blue">
              <span className="dot" />남양주 터미널 실시간 운영 중
            </span>
            <h2 className="sec-title">
              위치가 아니라,
              <br />
              인수인계를 봅니다
            </h2>
            <p className="sec-desc">
              {'하차부터 상차까지 모든 흐름을 한 화면에서 통제하고, 목적\n지와 담당 기사를 짝지어 정리합니다.'}
            </p>
            <button className="btn btn-ghost">정기 픽업 단가 문의하기 →</button>
          </div>

          <div className="dash">
            <div className="dash-head">운송 및 상차 현황</div>
            <div className="dash-stats">
              {dashStats.map((s) => (
                <div className="st" key={s.k}>
                  <div className="k">{s.k}</div>
                  <div className="v">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="dash-table">
              {dashRows.map((row) => (
                <div className="row" key={row.code}>
                  <span className="code">{row.code}</span>
                  <span className="where">
                    <span className="w1">{row.w1}</span>
                    <br />
                    <span className="w2">{row.w2}</span>
                  </span>
                  {row.pills.map((p) => (
                    <span className={`pill pill-${p.color}`} key={p.text}>
                      {p.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div className="dash-cta">
              {[0, 1, 2].map((i) => (
                <div className="cta" key={i}>
                  {withBreaks(ctaText)}
                  <span>{withBreaks(ctaSub)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
