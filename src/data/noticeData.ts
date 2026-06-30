export interface NoticeItem {
  id: number | string;
  type: string;
  title: string;
  isNew: boolean;
  date: string;
  isPinned?: boolean;
}

export const noticeData: NoticeItem[] = [
  { id: 'pin', type: '보안주의', title: '[필독] 택배 사칭 스미싱 주의 안내 - 공식 번호 외 결제 요청 즉시 신고', isNew: true, date: '2025.12.10', isPinned: true },
  { id: 12, type: '휴무/연휴', title: '2026년 설 연휴 남양주 터미널 집화 및 배송 마감 일정 안내', isNew: true, date: '2025.12.08' },
  { id: 11, type: '시스템', title: '12월 넷째 주 일요일 시스템 정기 점검 안내 (02:00 ~ 06:00)', isNew: false, date: '2025.12.05' },
  { id: 10, type: '운영안내', title: '폭설로 인한 별내동 일부 고지대 아파트 배송 지연 안내', isNew: false, date: '2025.12.03' },
  { id: 9, type: '운영안내', title: '터미널 야간 분류(소터) 아르바이트 상시 모집 공고', isNew: false, date: '2025.11.28' },
  { id: 8, type: '휴무/연휴', title: '2025년 크리스마스 연휴 배송 마감 및 운영 일정 안내', isNew: false, date: '2025.11.20' },
  { id: 7, type: '시스템', title: '배송 조회 시스템 UI 개편 안내 (12월 1일 적용)', isNew: false, date: '2025.11.15' },
];
