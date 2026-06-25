import { chartBars, chartXLabels, hBars } from '../data/content'

export default function DataChart() {
  return (
    <section className="data">
      <div className="container">
        <div className="grid-2">
          {/* 차트 카드 (왼쪽) */}
          <div className="chart-card">
            <div className="ct">통합 가동률 및 물동량</div>
            <div className="chart-head">
              <span>시간대별 입고/출고 물동량</span>
              <span className="leg">
                <span className="sw" />물동량
              </span>
            </div>

            <div className="bars">
              {chartBars.map((bar, i) => (
                <div
                  className={`bar${bar.muted ? ' muted' : ''}`}
                  style={{ height: `${bar.height}%` }}
                  key={i}
                />
              ))}
            </div>
            <div className="bar-x">
              {chartXLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>

            <div className="hbars">
              <div className="ct2">타이밍 도크 가동 현황</div>
              {hBars.map((h) => (
                <div className="hbar" key={h.label}>
                  <div className="lab">
                    <span>{h.label}</span>
                    <span>{h.value}</span>
                  </div>
                  <div className="track">
                    <div className="fill" style={{ width: `${h.width}%`, background: h.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 텍스트 (오른쪽) */}
          <div>
            <span className="badge badge-green">
              <span className="dot" />남양주 터미널 실시간 운영 중
            </span>
            <h2 className="sec-title">
              데이터로 예측하는
              <br />
              효율적인 스마트 물동량 제어
            </h2>
            <p className="sec-desc">
              {'시간대별 입·출고 물동량을 실시간으로 집계해 한눈에.\n피크 타임 병목을 미리 막고, 인력을 유연하게 배치해 오배송도\n지연도 없는 물류를 만듭니다.'}
            </p>
            <button className="btn btn-ghost">정기 픽업 단가 문의하기 →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
