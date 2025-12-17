import React from 'react';
import { Clock } from 'lucide-react';

interface FilterBarProps {
    onClose?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 mb-3 shadow-sm overflow-x-auto">
      <div className="flex items-center gap-4 text-sm text-gray-600 min-w-max">
            
            {/* 订单号 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap">订单号</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className="border border-gray-300 rounded px-2 py-1 w-48 focus:outline-none focus:border-blue-500 placeholder-gray-300 text-xs"
                />
            </div>

            {/* 申请时间 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap">申请时间</label>
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                    <div className="px-2 text-gray-400 border-r border-gray-100 bg-gray-50 h-7 flex items-center">
                        <Clock className="w-3 h-3" />
                    </div>
                    <input 
                    type="text" 
                    placeholder="开始日期" 
                    className="px-2 py-1 w-24 focus:outline-none placeholder-gray-300 text-center text-xs"
                    />
                    <span className="text-gray-400 px-1 text-xs">至</span>
                    <input 
                    type="text" 
                    placeholder="结束日期" 
                    className="px-2 py-1 w-24 focus:outline-none placeholder-gray-300 text-center text-xs"
                    />
                </div>
            </div>

            {/* 审核状态 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap">审核状态</label>
                <select className="border border-gray-300 rounded px-2 py-1 w-24 focus:outline-none focus:border-blue-500 bg-white text-gray-600 text-xs">
                    <option value="apply">申请</option>
                    <option value="approved">通过</option>
                    <option value="rejected">拒绝</option>
                </select>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 ml-2">
                <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-4 py-1 rounded flex items-center justify-center transition-colors text-xs whitespace-nowrap">
                    搜索
                </button>
                <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 px-4 py-1 rounded flex items-center justify-center transition-colors text-xs whitespace-nowrap">
                    重置
                </button>
            </div>
      </div>
    </div>
  );
};