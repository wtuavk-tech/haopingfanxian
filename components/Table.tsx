import React from 'react';
import { OrderEntry } from '../types';
import { Image as ImageIcon } from 'lucide-react';

interface TableProps {
  data: OrderEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-200 min-h-[500px] flex flex-col">
      <div className="overflow-x-auto flex-1 pb-4 w-full">
        <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
          <thead className="bg-[#f7f8fa]">
            <tr>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 w-16">序号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">订单号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">评论人</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">评论时间</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">返现金额</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">类型</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">图片</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">审核状态</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">审核时间</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">审核人</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">审核说明</th>
              <th className="px-4 py-3 text-center font-medium whitespace-nowrap w-24">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-[#e6f7ff]' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.id}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.orderNo}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.reviewer}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.reviewTime}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.cashbackAmount}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.type}</td>
                  <td className="px-4 py-1 border-r border-gray-100 whitespace-nowrap">
                    <div className="w-8 h-8 bg-gray-100 border border-gray-200 flex items-center justify-center rounded">
                        <ImageIcon className="w-4 h-4 text-gray-400" />
                    </div>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">
                    <span className="inline-block px-3 py-1 bg-[#e6f7ff] text-[#1890FF] rounded text-xs border border-[#91d5ff] cursor-pointer">
                        {row.auditStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.auditTime}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.auditor}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.auditRemark}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-700">审核</button>
                  </td>
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan={12} className="h-96 text-center">
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <span>暂无数据</span>
                        </div>
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};