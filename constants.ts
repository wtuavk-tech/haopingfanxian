import { OrderEntry } from './types';

const REVIEWERS = ['许仙', '萧炎', '天林', '邢师傅', '韩立'];
const ORDER_PREFIXES = ['251216', '251016', '251015', '250716', '250917', '250916'];

export const MOCK_DATA: OrderEntry[] = Array.from({ length: 15 }).map((_, index) => ({
  id: index + 1,
  orderNo: `${ORDER_PREFIXES[index % ORDER_PREFIXES.length]}${Math.floor(Math.random() * 100000000)}`,
  reviewer: REVIEWERS[index % REVIEWERS.length],
  reviewTime: `2025-${12 - index > 0 ? 12 - index : 12}-${Math.floor(Math.random() * 28) + 1} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
  cashbackAmount: '', // Empty in screenshot
  type: '好评',
  imageUrl: 'placeholder', // Will be rendered as a placeholder block
  auditStatus: '申请',
  auditTime: '',
  auditor: '',
  auditRemark: '',
}));