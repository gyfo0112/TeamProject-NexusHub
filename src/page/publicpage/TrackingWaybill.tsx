import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';

export default function TrackingWaybill() {
  return (
    <SubPageLayout 
      heroTitle="일반운송장조회"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '배송조회' },
        { label: '일반운송장조회' }
      ]}
      sidebarData={sidebarData.tracking}
    >
      <div style={{ padding: '60px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#64748b', fontSize: '20px' }}>일반운송장조회 컨텐츠 영역입니다.</h2>
      </div>
    </SubPageLayout>
  )
}
