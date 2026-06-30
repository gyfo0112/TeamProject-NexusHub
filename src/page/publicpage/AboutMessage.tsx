import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';
import { Package } from 'lucide-react';
import './AboutMessage.scss';

export default function AboutMessage() {
  return (
    <SubPageLayout 
      heroTitle="센터장 인사말"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '허브소개' },
        { label: '센터장 인사말' }
      ]}
      sidebarData={sidebarData.about}
    >
      <div className="about-message-wrap">
        <div className="am-header">
          <div className="badge">CEO MESSAGE</div>
          <h2>센터장 인사말</h2>
          <p>지역 물류의 책임감과 '남양주 지역의 안전한 배송'을 책임지겠다는 비전을 담은 메시지입니다.</p>
        </div>

        <div className="am-content">
          <div className="am-photo">
            {/* 실제 센터장 이미지 */}
            <img src="/ceo.png" alt="정석헌 센터장" />
            <div className="ceo-badge">CEO Message</div>
            <div className="ceo-info">
              <h4>정석헌 센터장</h4>
              <p>NexusHub 남양주터미널 대표</p>
            </div>
          </div>

          <div className="am-text">
            <div className="quote-box">
              <p>"고객 한 분 한 분의 소중한 물건이<br />
              정확히, 안전하게 전달되는 것ㅡ<br />
              그것이 우리의 시작이자 끝입니다."</p>
            </div>

            <div className="desc">
              <p>안녕하십니까. NexusHub 남양주터미널 센터장 정석헌입니다.</p>
              
              <p>우리 터미널은 남양주시 진접읍을 거점으로 경기 북동부 지역의 물류 허브 역할을 수행하고 있습니다. 매일 18,000건 이상의 택배를 처리하며, 지역 주민과 소상공인 여러분의 일상과 비즈니스를 지원합니다.</p>
              
              <p>저희는 단순한 배송 회사를 넘어, 지역 사회와 함께 성장하는 물류 파트너를 지향합니다. 자동 분류 시스템(소터), AI 기반 스마트 배차, 24시간 CCTV 관제 등 최첨단 인프라를 바탕으로 오배송 제로를 목표로 매일 노력하고 있습니다.</p>
              
              <p>앞으로도 NexusHub 남양주터미널은 고객 여러분의 신뢰를 최우선 가치로 삼고, <strong>남양주 지역의 안전한 배송 문화</strong>를 만들어 나가겠습니다.</p>
            </div>

            <div className="footer-card">
              <div className="icon-wrap">
                <Package size={24} />
              </div>
              <div className="fc-info">
                <h5>NexusHub 남양주터미널 센터장 - 정석헌</h5>
                <p>경기도 남양주시 진접읍 물류로 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
