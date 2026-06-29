import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';

export default function ConsultingInfo() {
  return (
    <SubPageLayout 
      heroTitle="상담안내"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '물류상담' },
        { label: '상담안내' }
      ]}
      sidebarData={sidebarData.consulting}
    >
      <div style={{ padding: '60px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#64748b', fontSize: '20px' }}>상담안내 컨텐츠 영역입니다.</h2>
      </div>
    </SubPageLayout>
  )
}
