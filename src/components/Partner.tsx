import './Partner.scss';
export default function Partner() {
  return (
    <section className="partner">
      {/* 배경으로 빠진 왼쪽 이미지 */}
      <div className="partner-bg-img">
        <img src="/partenr.png" alt="픽업 파트너" className="partner-img-el" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="grid-2">
          {/* 왼쪽 빈 공간 (이미지가 차지하는 영역) */}
          <div className="partner-spacer"></div>

          {/* 오른쪽 텍스트 영역 (정확히 타 섹션 우측 라인과 일치) */}
          <div className="partner-text-col">
            <div className="partner-text">
              <span className="badge badge-orange">
                <span className="dot" />픽업 파트너
              </span>
              <h2 className="sec-title">
                동네 사장님들의 든든한
                <br />
                <span style={{ color: 'var(--orange-dark)' }}>정기 픽업 파트너</span>
              </h2>
              <p className="sec-desc">
                {'남양주 지역 소상공인을 위한 NexusHub만의\n전담 집화 서비스\n원하시는 시간에  빠르고 안전하게 수거하며,\n합리적인 맞춤 단가로 사장님의 비즈니스 성공을 돕습니다.'}
              </p>
              <button className="btn btn-orange">정기 픽업 단가 문의하기 →</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 오른쪽 호 장식 */}
      <div className="partner-ring" />
    </section>
  )
}
