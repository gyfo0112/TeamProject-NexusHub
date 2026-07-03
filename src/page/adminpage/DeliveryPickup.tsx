import './DeliveryPickup.scss';

export default function DeliveryPickup() {
  return (
    <div className="delivery-pickup-page">
      <div className="page-header">
        <div className="header-titles">
          <div className="title-row">
            <h2>지역 집화(수거) 현황 관리</h2>
            <span className="subtitle">Local Pickup Status</span>
          </div>
          <p className="description">홈페이지 픽업 신청 내역과 실시간 연동</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">수거 경로 최적화</button>
          <button className="btn-primary">수거 기사 일괄 배정</button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <span className="stat-label">오늘 픽업 신청</span>
          <div className="stat-value"><strong>34</strong>건</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">기사 배정 완료</span>
          <div className="stat-value text-blue"><strong>21</strong>건</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">수거 완료</span>
          <div className="stat-value text-green"><strong>15</strong>건</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">배정 대기</span>
          <div className="stat-value text-red"><strong>13</strong>건</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">소상공인 신청 비율</span>
          <div className="stat-value text-orange"><strong>76</strong>%</div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-left">
          <div className="filter-group">
            <span className="filter-label">상태</span>
            <div className="filter-buttons">
              <button className="filter-btn active">전체</button>
              <button className="filter-btn">배정 대기</button>
              <button className="filter-btn">배정 완료</button>
              <button className="filter-btn">수거 완료</button>
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">구역</span>
            <div className="filter-buttons">
              <button className="filter-btn active">전체 구역</button>
              <button className="filter-btn">진접읍</button>
              <button className="filter-btn">오남읍</button>
              <button className="filter-btn">별내동</button>
            </div>
          </div>
        </div>
        <div className="search-box">
          <span className="search-label">검색</span>
          <input type="text" placeholder="상호명 또는 신청자명으로 검색" />
        </div>
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>신청 상호 / 신청자</th>
              <th>수거 주소</th>
              <th>희망 수거 시간</th>
              <th>배정 기사</th>
              <th>상태</th>
              <th>관리 액션</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>진접 분식당</strong>
                <span className="sub-text">신청자 윤서연</span>
              </td>
              <td>진접읍 장현리 123-4</td>
              <td className="time-text">10:00~11:00</td>
              <td><strong>김철수</strong></td>
              <td>
                <span className="status-badge yellow">
                  <span className="dot"></span> 배정완료
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action primary-light">기사 변경</button>
                  <button className="btn-action">완료 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>오남 수제청 공방</strong>
                <span className="sub-text">신청자 박하늘</span>
              </td>
              <td>오남읍 오남리 56-2</td>
              <td className="time-text">11:00~12:00</td>
              <td><strong>이영희</strong></td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 수거완료
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">상세 보기</button>
                </div>
              </td>
            </tr>
            <tr className="row-alert">
              <td>
                <strong>별내 핸드메이드샵</strong>
                <span className="sub-text">신청자 안도현</span>
              </td>
              <td>별내동 805-1 아파트</td>
              <td className="time-text">13:00~14:00</td>
              <td className="text-red font-bold">미배정</td>
              <td>
                <span className="status-badge red">
                  <span className="dot"></span> 배정대기
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action primary-light">기사 배정</button>
                </div>
              </td>
            </tr>
            <tr className="row-alert">
              <td>
                <strong>퇴계원 인쇄소</strong>
                <span className="sub-text">신청자 신유진</span>
              </td>
              <td>퇴계원읍 119-7</td>
              <td className="time-text">14:00~15:00</td>
              <td className="text-red font-bold">미배정</td>
              <td>
                <span className="status-badge red">
                  <span className="dot"></span> 배정대기
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action primary-light">기사 배정</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>진접 꽃집 라일락</strong>
                <span className="sub-text">신청자 임소율</span>
              </td>
              <td>진접읍 부평리 12</td>
              <td className="time-text">09:00~10:00</td>
              <td><strong>정수민</strong></td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 수거완료
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">상세 보기</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination-container">
          <span className="pagination-info">전체 34건 중 1-5건 표시</span>
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="page-ellipsis">...</span>
            <button className="page-btn">7</button>
            <button className="page-btn next">›</button>
          </div>
        </div>
      </div>

      <div className="footer-note">
        이 목록은 홈페이지에서 소상공인이 신청한 픽업 요청과 실시간으로 연동됩니다. [기사 배정] 클릭 시 수거 주소와 가까운 순서로 가용 기사가 추천됩니다.
      </div>
    </div>
  );
}
