export default function Partner() {
  return (
    <section className="partner">
      {/* 오른쪽 호 장식 */}
      <div className="partner-ring" />

      {/* 이미지: 섹션 왼쪽 끝에서 바로 시작 */}
      <div className="partner-img-col">
        {/* 실제 이미지로 교체 시: <img src="..." alt="..." className="partner-img-el" /> */}
        <div className="partner-img-el img-placeholder">이미지 자리</div>
      </div>

      {/* 텍스트 */}
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
    </section>
  )
}
