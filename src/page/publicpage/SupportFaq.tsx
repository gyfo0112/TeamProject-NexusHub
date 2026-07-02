import { useState } from 'react';
import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';
import { faqData } from '../../data/faqData';
import { ChevronDown, ChevronUp, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import './SupportFaq.scss';

export default function SupportFaq() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Badge colors
  const getBadgeClass = (type: string) => {
    switch(type) {
      case '배송문의': return 'badge-blue';
      case '반품/교환': return 'badge-green';
      case '주소변경': return 'badge-yellow';
      case '파손/분실': return 'badge-red';
      case '앱이용': return 'badge-purple';
      default: return 'badge-gray';
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const CATEGORIES = [
    { label: '전체', icon: '' },
    { label: '배송문의', icon: '📦' },
    { label: '반품/교환', icon: '🔁' },
    { label: '주소변경', icon: '📍' },
    { label: '파손/분실', icon: '⚠️' },
    { label: '앱이용', icon: '📱' }
  ];

  return (
    <SubPageLayout 
      heroTitle="자주 묻는 질문"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '고객센터' },
        { label: '자주 묻는 질문' }
      ]}
      sidebarData={sidebarData.support}
    >
      <div className="support-faq">
        <div className="faq-header">
          <div className="title-group">
            <h3>자주 묻는 질문</h3>
            <p>총 {faqData.length}개의 질문이 등록되어 있습니다</p>
          </div>
          <div className="sort-dropdown">
            <button>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
              최신순 <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="faq-filters">
          <div className="category-buttons">
            {CATEGORIES.map(cat => (
              <button 
                key={cat.label} 
                className={cat.label === '전체' ? 'active' : ''}
              >
                {cat.icon && <span className="cat-icon">{cat.icon}</span>}
                {cat.label}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="질문 검색" />
            <button className="btn-search">검색</button>
          </div>
        </div>

        <div className="faq-list">
          {faqData.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div className={`faq-item ${isExpanded ? 'expanded' : ''}`} key={item.id}>
                <div className="faq-question" onClick={() => toggleExpand(item.id)}>
                  <div className="q-left">
                    <span className={`type-badge ${getBadgeClass(item.type)}`}>{item.type}</span>
                    <span className="q-text">{item.title}</span>
                  </div>
                  <div className="q-right">
                    {isExpanded ? <ChevronUp size={20} color="#3b82f6" /> : <ChevronDown size={20} color="#cbd5e1" />}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="faq-answer">
                    <div className="a-label">
                      <span className="a-icon">A</span>
                      <strong>답변</strong>
                    </div>
                    <div className="a-content">
                      <p>{item.content}</p>
                      
                      {item.steps && (
                        <ol className="a-steps">
                          {item.steps.map((step, idx) => (
                            <li key={idx}>
                              <span className="step-num">{idx + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      )}

                      {item.actions && (
                        <div className="a-actions">
                          {item.actions.map((act, idx) => (
                            <button key={idx} className="btn-action">
                              {idx === 0 ? '🎧' : '📄'} {act}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-footer">
          <div className="total-count">총 {faqData.length}개 질문</div>
          <div className="pagination">
            <button className="page-btn nav-btn"><ChevronLeft size={16} /></button>
            <button className="page-btn active">1</button>
            <button className="page-btn nav-btn"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
