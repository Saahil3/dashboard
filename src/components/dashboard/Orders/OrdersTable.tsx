import React, { useState } from "react";
import { OrderData } from "../../../types/dashboard";

interface OrdersTableProps {
  orders: OrderData[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4  );
  const [sortColumn, setSortColumn] = useState<keyof OrderData | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof OrderData) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedOrders.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(orders.length / rowsPerPage);

  return (
    <div className="mb-6">
      <h2 className="mt-16 mb-12 text-3xl font-inter font-medium text-[#212636]">
        Orders
      </h2>

      <div className="border-[1px] border-[#DCDFE4] rounded-[8px] font-inter overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className=" border-b-[1px] border-b-[#DCDFE4] bg-[#f9fafb]">
              {[
                { label: "Product", key: "productName" },
                { label: "Date", key: "date" },
                { label: "Time Spent", key: "timeSpent" },
                { label: "Order Value", key: "orderValue" },
                { label: "Commission", key: "commission" },
              ].map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key as keyof OrderData)}
                  className="cursor-pointer text-[14px] font-normal p-4 text-left text-gray-500 tracking-wider"
                >
                  {col.label}{" "}
                  {sortColumn === col.key && (
                    <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                  )}
                </th>
              ))}
              <th className="text-[14px] text-gray-500 p-4 text-left tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentRows.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap w-[252px]">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        src="https://m.media-amazon.com/images/I/616GkyW-+1L.jpg"
                        alt=""
                        className="rounded-3xl h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {order.productName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-[252px] px-4 py-4 whitespace-nowrap text-base text-gray-500">
                  {order.date}
                </td>
                <td className="w-[252px] px-6 py-4 whitespace-nowrap text-base text-gray-500">
                  {order.timeSpent}
                </td>
                <td className="w-[252px] px-6 py-4 whitespace-nowrap text-base text-gray-900">
                  ${order.orderValue}
                </td>
                <td className="w-[252px] px-6 py-4 whitespace-nowrap text-base text-gray-900">
                  ${order.commission}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="flex ml-auto items-center gap-3 text-gray-400 hover:text-gray-500">
                    <h6>View Chat</h6>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0626 1.5V8.8125C11.0626 8.96168 11.0033 9.10476 10.8978 9.21025C10.7923 9.31574 10.6493 9.375 10.5001 9.375C10.3509 9.375 10.2078 9.31574 10.1023 9.21025C9.99683 9.10476 9.93757 8.96168 9.93757 8.8125V2.85773L1.89804 10.898C1.79249 11.0035 1.64934 11.0628 1.50007 11.0628C1.3508 11.0628 1.20765 11.0035 1.1021 10.898C0.996552 10.7924 0.937256 10.6493 0.937256 10.5C0.937256 10.3507 0.996552 10.2076 1.1021 10.102L9.14233 2.0625H3.18757C3.03838 2.0625 2.89531 2.00324 2.78982 1.89775C2.68433 1.79226 2.62507 1.64918 2.62507 1.5C2.62507 1.35082 2.68433 1.20774 2.78982 1.10225C2.89531 0.996763 3.03838 0.9375 3.18757 0.9375H10.5001C10.6493 0.9375 10.7923 0.996763 10.8978 1.10225C11.0033 1.20774 11.0626 1.35082 11.0626 1.5Z"
                        fill="#8A94A6"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium border rounded text-gray-700 border-gray-400 disabled:text-gray-400 disabled:border-gray-300"
        >
          Previous
        </button>
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium border rounded text-gray-700 border-gray-400 disabled:text-gray-400 disabled:border-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
