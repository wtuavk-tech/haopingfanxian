export interface OrderEntry {
  id: number;
  orderNo: string;           // 订单号
  reviewer: string;          // 评论人
  reviewTime: string;        // 评论时间
  cashbackAmount: string;    // 返现金额
  type: string;              // 类型 (e.g. 好评)
  imageUrl: string;          // 图片
  auditStatus: string;       // 审核状态
  auditTime: string;         // 审核时间
  auditor: string;           // 审核人
  auditRemark: string;       // 审核说明
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}