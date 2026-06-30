import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';
import './AboutInfrastructure.scss';

export default function AboutInfrastructure() {
  return (
    <SubPageLayout 
      heroTitle="인프라 및 시스템"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '허브소개' },
        { label: '인프라 및 시스템' }
      ]}
      sidebarData={sidebarData.about}
    >
      <div className="about-infra-wrap">
        <div className="ai-header">
          <div className="badge">INFRASTRUCTURE & SYSTEM</div>
          <h2>시스템 및 인프라</h2>
          <p>남양주 지역의 안전하고 신속한 배송을 위해, 검증된 인프라<br/>와 스마트 시스템으로 물류를 책임집니다.</p>
        </div>

        <div className="ai-content">
          {/* Row 1 */}
          <div className="infra-row">
            <div className="center-line"></div>
            <div className="large-dot top-dot"></div>
            <div className="large-dot bottom-dot"></div>
            
            <div className="connector-wrap left-connector">
              <div className="line-horizontal-top"></div>
              <div className="small-dot"></div>
              <div className="line-vertical"></div>
              <div className="line-horizontal-bottom"></div>
            </div>
            
            <div className="col-img">
              <img src="/ai_unloading.png" alt="AI 스마트 배차 시스템" />
            </div>
            
            <div className="col-text text-right">
              <h3>AI 스마트 배차 시스템</h3>
              <div className="subtitle">AUTO SORTER SYSTEM</div>
              <p>
                머신러닝 기반 알고리즘이 실시간 교통 데이터, 날씨, 물량 분포를 분석해 최적 배송 루트를 자동 산출합니다. 기사 당 평균 이동 거리를 18% 단축 하고 연료비를 절감합니다.
              </p>
              <div className="tags">
                <span>머신러닝 알고리즘</span>
                <span>루트 최적화</span>
                <span>실시간 교통 연동</span>
                <span>앱 연동 배차</span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="infra-row reverse">
            <div className="center-line"></div>
            <div className="large-dot bottom-dot"></div>
            
            <div className="connector-wrap right-connector">
              <div className="line-horizontal-top"></div>
              <div className="small-dot"></div>
              <div className="line-vertical"></div>
              <div className="line-horizontal-bottom"></div>
            </div>
            
            <div className="col-img">
              <img src="/auto_sorter.png" alt="자동 분류기 (소터)" />
            </div>
            
            <div className="col-text text-left">
              <h3>자동 분류기 (소터)</h3>
              <div className="subtitle">AUTO SORTER SYSTEM</div>
              <p>
                국내 최신 세대 크로스벨트 소터를 도입, 시간당 최대 3,200건의 물량을 자동 분류합니다
              </p>
              <div className="tags">
                <span>크로스벨트 소터</span>
                <span>바코드 인식</span>
                <span>99.97% 정확도</span>
                <span>실시간 모니터링</span>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="infra-row">
            <div className="center-line"></div>
            <div className="large-dot bottom-dot"></div>
            
            <div className="connector-wrap left-connector">
              <div className="line-horizontal-top"></div>
              <div className="small-dot"></div>
              <div className="line-vertical"></div>
              <div className="line-horizontal-bottom"></div>
            </div>
            
            <div className="col-img">
              <img src="/security_cctv.png" alt="24시간 CCTV 관제센터" />
            </div>
            
            <div className="col-text text-right">
              <h3>24시간 CCTV 관제센터</h3>
              <div className="subtitle">24H SECURITY CONTROL</div>
              <p>
                터미널 전 구역 128대의 고화질 IP카메라가 24시간 녹화·분석됩니다. AI이상 행동 감지 시스템으로 분실·파손 사고를 사전에 예방하고 신속하게 대응합니다.
              </p>
              <div className="tags">
                <span>128대 HD CCTV</span>
                <span>AI 이상감지</span>
                <span>30일 저장</span>
                <span>야간 적외선</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
