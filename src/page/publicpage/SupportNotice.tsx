import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';
import { noticeData } from '../../data/noticeData';
import { Pin, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import './SupportNotice.scss';

export default function SupportNotice() {
  const getBadgeClass = (type: string) => {
    switch(type) {
      case '보안주의': return 'badge-orange';
      case '휴무/연휴': return 'badge-blue';
      case '시스템': return 'badge-purple';
      case '운영안내': return 'badge-green';
      default: return 'badge-gray';
    }
  };

  return (
    <SubPageLayout 
      heroTitle="공지사항"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '고객센터' },
        { label: '공지사항' }
      ]}
      sidebarData={sidebarData.support}
    >
      <div className="support-notice">
        {/* Header */}
        <div className="notice-header">
          <div className="title-group">
            <h3>공지사항</h3>
            <p>총 12건의 공지사항이 있습니다</p>
          </div>
          <div className="sort-dropdown">
            <button>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
              최신순 <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="notice-filters">
          <div className="filter-tabs">
            <button className="active">전체</button>
            <button>시스템</button>
            <button>휴무/연휴</button>
            <button>보안주의</button>
            <button>운영안내</button>
          </div>
          <div className="search-bar">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="질문 검색" />
            <button className="btn-search">검색</button>
          </div>
        </div>

        {/* Table List */}
        <div className="notice-table">
          <div className="table-header">
            <div className="col-id">번호</div>
            <div className="col-type">분류</div>
            <div className="col-title">제목</div>
            <div className="col-date">등록일</div>
          </div>
          <div className="table-body">
            {noticeData.map((notice, idx) => (
              <div className={`table-row ${notice.isPinned ? 'pinned' : ''}`} key={idx}>
                <div className="col-id">
                  {notice.isPinned ? <Pin size={18} color="#f97316" /> : notice.id}
                </div>
                <div className="col-type">
                  <span className={`type-badge ${getBadgeClass(notice.type)}`}>{notice.type}</span>
                </div>
                <div className="col-title">
                  {notice.isNew && <span className="new-badge">NEW</span>}
                  <span className="title-text">{notice.title}</span>
                </div>
                <div className="col-date">{notice.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Pagination */}
        <div className="notice-footer">
          <div className="total-count">총 12건</div>
          <div className="pagination">
            <button className="page-btn nav-btn"><ChevronLeft size={16} /></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn nav-btn"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
