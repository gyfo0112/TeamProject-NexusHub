import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';

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
      <div style={{ padding: '60px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#64748b', fontSize: '20px' }}>오시는 길 컨텐츠 영역입니다.</h2>
      </div>
    </SubPageLayout>
  )
}
