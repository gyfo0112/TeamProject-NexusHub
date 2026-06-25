import { Fragment } from 'react'
import { IconBox, IconTruck, IconHeadset } from './icons'
import { helpCards, type HelpCard } from '../data/content'

const iconMap = {
  box: IconBox,
  truck: IconTruck,
  headset: IconHeadset,
} as const

function renderDesc(desc: string) {
  return desc.split('\n').map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ))
}

export default function Help() {
  return (
    <section className="help">
      <div className="container">
        <span className="badge badge-blue-soft">
          <span className="dot" />서비스 안내
        </span>
        <h2 className="sec-title">무엇을 도와드릴까요?</h2>
        <p className="help-sub">남양주 터미널 방문 목적에 맞는 빠른 안내를 제공합니다</p>

        <div className="help-cards">
          {helpCards.map((card: HelpCard) => {
            const Icon = iconMap[card.icon]
            return (
              <div className="help-card" key={card.title}>
                <div className="top">
                  <span className={`hi hi-${card.color}`}>
                    <Icon />
                  </span>
                  <span className={`htag htag-${card.color}`}>{card.tag}</span>
                </div>
                <h4>{card.title}</h4>
                <p>{renderDesc(card.desc)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
