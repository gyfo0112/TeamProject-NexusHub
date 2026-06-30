import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';
import './AboutLocation.scss';

export default function AboutLocation() {
  return (
    <SubPageLayout 
      heroTitle="오시는 길"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '허브소개' },
        { label: '오시는 길' }
      ]}
      sidebarData={sidebarData.about}
    >
      <div className="location-wrap">
        <div className="location-header">
          <div className="badge">LOCATION & DIRECTIONS</div>
          <h2>오시는 길</h2>
          <p>방문객용 지도 및 실무적인 터미널 배치도 안내입니다. 11톤 간선 차량과 1톤 택배차의 진입로가 분리 운영됩니다.</p>
        </div>

        <div className="map-placeholder">
          {/* 지도 영역 비워두기 */}
        </div>

        <div className="info-cards-grid">
          {/* Card 1: 기본 주소 */}
          <div className="info-card">
            <h3 className="card-title">기본 주소</h3>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-badge badge-blue">도로명</span>
                <span className="info-text">경기도 남양주시 진접읍 물류로 123</span>
              </li>
              <li className="info-item">
                <span className="info-badge badge-dark">지번</span>
                <span className="info-text">경기도 남양주시 진접읍 OO리 123-45</span>
              </li>
              <li className="info-item">
                <span className="info-badge badge-dark">전화</span>
                <span className="info-text">031-XXX-XXXX · 팩스: 031-XXX-XXXX</span>
              </li>
            </ul>
          </div>

          {/* Card 2: 자가용 / 차량 이용 시 */}
          <div className="info-card">
            <h3 className="card-title">자가용 / 차량 이용 시</h3>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-badge badge-dark">서울</span>
                <span className="info-text">강변북로 → 구리·포천고속도로 → 진접IC 3분 (약 45분)</span>
              </li>
              <li className="info-item">
                <span className="info-badge badge-dark">의정부</span>
                <span className="info-text">43번 국도 → 진접읍 방향 → 물류로 진입 (약 20분)</span>
              </li>
              <li className="info-item">
                <span className="info-badge badge-dark">주차</span>
                <span className="info-text">방문자 주차 20대 무료 (터미널 정문 우측)</span>
              </li>
            </ul>
          </div>

          {/* Card 3: 대중교통 이용 시 */}
          <div className="info-card">
            <h3 className="card-title">대중교통 이용 시</h3>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-badge badge-green">버스</span>
                <span className="info-text">진접읍사무소 정류장 하차 후 도보 5분</span>
              </li>
              <li className="info-item">
                <span className="info-badge badge-teal">지하철</span>
                <span className="info-text">경춘선 진접역 2번 출구 → 마을버스 환승</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
