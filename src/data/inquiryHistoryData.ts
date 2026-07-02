export interface InquiryHistoryItem {
  id: string;
  status: '답변완료' | '처리중';
  title: string;
  date: string;
}

export const inquiryHistoryData: InquiryHistoryItem[] = [
  {
    id: 'INQ-2025-1283',
    status: '답변완료',
    title: '배송 완료 후 물건 미수령 관련 문의드립니다',
    date: '2025.12.08',
  },
  {
    id: 'INQ-2025-1271',
    status: '처리중',
    title: '반품 신청 후 수거 기사님 미방문 건',
    date: '2025.12.05',
  }
];
