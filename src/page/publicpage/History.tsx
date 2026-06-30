import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';
import { ChevronRight } from 'lucide-react';
import './History.scss';

export default function History() {
  const historyData = [
    {
      year: '2026',
      events: [
        { month: '11', title: '경기 북부 물류 허브 확장 추진', desc: '남양주를 중심으로 한 경기 북부 물류 인프라 구축 프로젝트 착수' },
        { month: '10', title: '누적 배송 1,200만 건 돌파', desc: '안정적인 크로스벨트 운영으로 누적 배송 기록 갱신' },
      ]
    },
    {
      year: '2024',
      events: [
        { month: '08', title: 'AI 스마트 배차 시스템 도입', desc: '실시간 교통, 물량 데이터를 기반으로 한 자동 배차로 배송 효율 30% 향상' },
        { month: '04', title: '관할구역 택배 기사(SM) 150명 돌파', desc: '지역 거점 터미널 구축, 달 처리량 50만 건 돌파' },
      ]
    },
    {
      year: '2022',
      events: [
        { month: '05', title: '남양주 스마트 터미널 준공', desc: '남양주 최대 첨단화 새 물류 허브' },
      ]
    },
    {
      year: '2020',
      events: [
        { month: '08', title: '정기 픽업 파트너 800곳 확보', desc: '동네 소상공인 전담 물류 서비스 본격 확대' },
        { month: '05', title: '관할구역 택배 기사(SM) 100명 돌파', desc: '남양주 전역 안정적 배송망 확보' },
      ]
    },
    {
      year: '2019',
      events: [
        { month: '08', title: '실시간 배송 조회 시스템 오픈', desc: '운송장 하나로 내 물품의 현재 위치를 한눈에 확인' },
        { month: '03', title: '남양주 1터미널 오픈', desc: '지역 기반 터미널 구축, 달 처리량 5,000건 돌파' },
      ]
    },
    {
      year: '2018',
      events: [
        { month: '10', title: '정기 픽업 서비스 론칭', desc: '소상공인을 위한 맞춤 집화 서비스 시작' },
        { month: '02', title: 'NexusHub 법인 설립', desc: '남양주 지역 라스트마일 배송 사업 시작' },
      ]
    }
  ];

  return (
    <SubPageLayout 
      heroTitle="회사연혁"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '허브소개' },
        { label: '회사연혁' }
      ]}
      sidebarData={sidebarData.about}
    >
      <div className="history-wrap">
        
        {/* Stats Section */}
        <div className="history-section stats-section">
          <div className="section-header">
            <div className="title-area">
              <div className="badge">NEXUSHUB HISTORY</div>
              <h2>우리 동네를 가장 잘 아는 택배가 되기까지</h2>
              <p>1997년 작은 화물 영업소에서 시작한 NexusHub 남양주 터미널은 오직<br/>남양주 지역의 배송만을 고집하며 성장해왔습니다.</p>
            </div>
            <button className="btn-report">
              통합 성과 리포트 보기 <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3>30,000<span>+</span></h3>
              <p>일 평균 처리 물동량</p>
            </div>
            <div className="stat-card">
              <h3>1,200<span>+</span></h3>
              <p>정기 픽업 파트너</p>
            </div>
            <div className="stat-card">
              <h3>150<span>+</span></h3>
              <p>전담 배송 기사 (SM)</p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="history-section timeline-section">
          <div className="title-area">
            <div className="badge">MILESTONE & HISTORY</div>
            <h2>회사 연혁</h2>
            <p>남양주를 거점으로 시작해 30여년간 이어온 NexusHub의 발자취를 소개합니다.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {historyData.map((yearGroup, idx) => (
              <div className="timeline-year-group" key={idx}>
                <div className="year-label">{yearGroup.year}</div>
                <div className="year-events">
                  {yearGroup.events.map((event, eIdx) => (
                    <div className="event-card" key={eIdx}>
                      <div className="event-dot"></div>
                      <div className="event-month">{event.month}</div>
                      <div className="event-text">
                        <h4>{event.title}</h4>
                        <p>{event.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
