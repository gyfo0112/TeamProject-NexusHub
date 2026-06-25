// 반복되는 콘텐츠를 타입과 함께 한곳에 모아 관리합니다.

/* ---- 주요 서비스 카드 ---- */
export interface ServiceCard {
  title: string
  desc: string
  chips: string[]
}

export const serviceCards: ServiceCard[] = Array.from({ length: 4 }, () => ({
  title: '실시간 배송 조회',
  desc: '운송장 번호 하나로 현재 내 택배가 어디에 있는지, 몇 시에 도착하는지 실시간으로 확인할 수 있습니다.',
  chips: ['실시간 위치 추적', '배송 도착 시간', '배송 기사 정보'],
}))

/* ---- 운영 대시보드 ---- */
export interface DashStat {
  k: string
  v: string
}
export const dashStats: DashStat[] = [
  { k: '취급량', v: '312건' },
  { k: '운송중', v: '428건' },
  { k: '상차완료', v: '498건' },
]

export type PillColor = 'blue' | 'green' | 'orange' | 'gray'
export interface DashRow {
  code: string
  w1: string
  w2: string
  pills: { text: string; color: PillColor }[]
}
export const dashRows: DashRow[] = [
  {
    code: '5839-001',
    w1: '진접읍 장현리',
    w2: '김상우 · 진접1터미널',
    pills: [
      { text: '선택대기', color: 'blue' },
      { text: '대기중', color: 'gray' },
    ],
  },
  {
    code: '5839-002',
    w1: '오남읍 오남리',
    w2: '이정민 · 오남2터미널',
    pills: [
      { text: '준비중', color: 'green' },
      { text: '대기중', color: 'gray' },
    ],
  },
  {
    code: '5839-004',
    w1: '진건읍 사릉리',
    w2: '박재현 · 진건터미널',
    pills: [
      { text: '미들급', color: 'orange' },
      { text: '상차완료', color: 'blue' },
    ],
  },
]

/* ---- 데이터 예측 차트 ---- */
export interface ChartBar {
  height: number
  muted?: boolean
}
export const chartBars: ChartBar[] = [
  { height: 55 },
  { height: 78 },
  { height: 92 },
  { height: 70 },
  { height: 40, muted: true },
  { height: 52, muted: true },
  { height: 35, muted: true },
]
export const chartXLabels = ['09시', '10시', '11시', '12시', '13시', '14시', '15시']

export interface HBar {
  label: string
  value: string
  width: number
  color: string
}
export const hBars: HBar[] = [
  { label: '입고 도크 (전체 11개)', value: '9개 가동 · 81%', width: 81, color: 'var(--blue)' },
  { label: '출고 도크 (1개 택배사)', value: '8개 가동 · 73%', width: 73, color: 'var(--green)' },
  { label: '분류 컨베이어 (소터)', value: '실시간 가동', width: 64, color: '#ef4444' },
  { label: '사고 차량 실시 점검', value: '이상 없음', width: 48, color: 'var(--orange)' },
]

/* ---- 무엇을 도와드릴까요 ---- */
export type HelpColor = 'orange' | 'green' | 'red'
export interface HelpCard {
  color: HelpColor
  icon: 'box' | 'truck' | 'headset'
  tag: string
  title: string
  desc: string
}
export const helpCards: HelpCard[] = [
  {
    color: 'orange',
    icon: 'box',
    tag: '동네 상점/기업 전용',
    title: '우리 동네 정기 집화(픽업) 신청',
    desc: '남양주 지역 카페, 옷가게, 공방 등\n매일 정기적인 수거가 필요하신가요?',
  },
  {
    color: 'green',
    icon: 'truck',
    tag: '구인구직 전용',
    title: '남양주 관할구역 택배 기사(SM) 모집',
    desc: '진접/오남/별내 지역의 든든한 파트너\n기사님과 상하차 가족을 모십니다.',
  },
  {
    color: 'red',
    icon: 'headset',
    tag: '고객 CS 전용',
    title: '파손/분실 보상 및 고객센터',
    desc: '배송 중 문제가 발생하셨나요?\n남양주 터미널 전담팀이 빠르게 해결해 드립니다.',
  },
]
