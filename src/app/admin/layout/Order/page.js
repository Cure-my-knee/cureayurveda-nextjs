'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Filter, Eye } from 'lucide-react';

const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const itemsPerPage = 10;

  // Sample data - replace with your actual data
  const orders = [
    {
      userId: 'U001',
      orderId: 'ORD-2024-001',
      userName: 'John Doe',
      email: 'john.doe@email.com',
      orderItemName: 'Wireless Headphones',
      amount: 299.99,
      paymentStatus: 'Paid',
      orderShipStatus: 'Shipped',
      orderStatus: 'Processing',
      createdAt: '2024-01-15',
      address: '123 Main St, New York, NY 10001'
    },
    {
      userId: 'U002',
      orderId: 'ORD-2024-002',
      userName: 'Jane Smith',
      email: 'jane.smith@email.com',
      orderItemName: 'Smartphone Case',
      amount: 49.99,
      paymentStatus: 'Pending',
      orderShipStatus: 'Preparing',
      orderStatus: 'Confirmed',
      createdAt: '2024-01-16',
      address: '456 Oak Ave, Los Angeles, CA 90210'
    },
    {
      userId: 'U003',
      orderId: 'ORD-2024-003',
      userName: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      orderItemName: 'Laptop Stand',
      amount: 89.99,
      paymentStatus: 'Paid',
      orderShipStatus: 'Delivered',
      orderStatus: 'Completed',
      createdAt: '2024-01-17',
      address: '789 Pine St, Chicago, IL 60601'
    },
    {
      userId: 'U004',
      orderId: 'ORD-2024-004',
      userName: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      orderItemName: 'Bluetooth Speaker',
      amount: 159.99,
      paymentStatus: 'Paid',
      orderShipStatus: 'Shipped',
      orderStatus: 'Processing',
      createdAt: '2024-01-18',
      address: '321 Elm St, Miami, FL 33101'
    },
    {
      userId: 'U005',
      orderId: 'ORD-2024-005',
      userName: 'David Brown',
      email: 'david.brown@email.com',
      orderItemName: 'USB-C Cable',
      amount: 19.99,
      paymentStatus: 'Failed',
      orderShipStatus: 'Cancelled',
      orderStatus: 'Cancelled',
      createdAt: '2024-01-19',
      address: '654 Maple Dr, Seattle, WA 98101'
    }
  ];

  const getStatusColor = (status, type) => {
    const colors = {
      payment: {
        'Paid': 'bg-green-100 text-green-800',
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Failed': 'bg-red-100 text-red-800'
      },
      shipping: {
        'Delivered': 'bg-green-100 text-green-800',
        'Shipped': 'bg-blue-100 text-blue-800',
        'Preparing': 'bg-orange-100 text-orange-800',
        'Cancelled': 'bg-red-100 text-red-800'
      },
      order: {
        'Completed': 'bg-green-100 text-green-800',
        'Processing': 'bg-blue-100 text-blue-800',
        'Confirmed': 'bg-purple-100 text-purple-800',
        'Cancelled': 'bg-red-100 text-red-800'
      }
    };
    return colors[type][status] || 'bg-gray-100 text-gray-800';
  };

  const filteredOrders = orders.filter(order =>
    order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const OrderModal = ({ order, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
              <p className="text-gray-900">{order.userId}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Order ID</label>
              <p className="text-gray-900">{order.orderId}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
              <p className="text-gray-900">{order.userName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-gray-900">{order.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Order Item</label>
              <p className="text-gray-900">{order.orderItemName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <p className="text-gray-900">${order.amount}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.paymentStatus, 'payment')}`}>
                {order.paymentStatus}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ship Status</label>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.orderShipStatus, 'shipping')}`}>
                {order.orderShipStatus}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Order Status</label>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.orderStatus, 'order')}`}>
                {order.orderStatus}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Created At</label>
              <p className="text-gray-900">{order.createdAt}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <p className="text-gray-900">{order.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
            {/* <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div> */}
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Info</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedOrders.map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.userName}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                      <div className="text-xs text-gray-400">{order.userId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.orderId}</div>
                      <div className="text-sm text-gray-500">{order.orderItemName}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${order.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.paymentStatus, 'payment')}`}>
                        {order.paymentStatus}
                      </span>
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.orderShipStatus, 'shipping')}`}>
                        {order.orderShipStatus}
                      </span>
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.orderStatus, 'order')}`}>
                        {order.orderStatus}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden">
          {paginatedOrders.map((order) => (
            <div key={order.orderId} className="border-b border-gray-200 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{order.userName}</h3>
                  <p className="text-sm text-gray-500">{order.email}</p>
                  <p className="text-xs text-gray-400">{order.userId}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                >
                  <Eye className="h-4 w-4" />
                  View
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Order ID</p>
                  <p className="text-sm font-medium">{order.orderId}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Amount</p>
                  <p className="text-sm font-medium">${order.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Item</p>
                  <p className="text-sm font-medium">{order.orderItemName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Created</p>
                  <p className="text-sm font-medium">{order.createdAt}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.paymentStatus, 'payment')}`}>
                  {order.paymentStatus}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.orderShipStatus, 'shipping')}`}>
                  {order.orderShipStatus}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.orderStatus, 'order')}`}>
                  {order.orderStatus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of {filteredOrders.length} results
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default OrderTable;


//  import apiClient from '@/lib/api/config';
// import { useState, useEffect } from 'react';

// const apiService = {
//   getAllOrder: async () => {
//     try {
//       // Get the token from localStorage
//       const token = localStorage.getItem('accessToken');
      
//       // Check if the token exists
//       if (!token) {
//         throw new Error('No authentication token found. Please log in.');
//       }

//       const response = await apiClient('/orders', {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`, 
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Error fetching orders: ${errorData.error || 'Unknown error'}`);
//       }

//       const data = await response.json();
//       console.log('All order data========>:', data);
//       return data;
//     } catch (error) {
//       // Handle error appropriately
//       console.error('API error:', error.message);
//       throw new Error(error.message || 'Failed to fetch orders');
//     }
//   }
// };

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const orderData = await apiService.getAllOrder();
//       setOrders(orderData);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching orders:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRefresh = () => {
//     fetchOrders();
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
//           <div className="text-center">
//             <div className="text-red-500 text-xl mb-4">⚠️</div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Orders</h2>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <button
//               onClick={handleRefresh}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
//             <button
//               onClick={handleRefresh}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//               </svg>
//               Refresh
//             </button>
//           </div>
//         </div>

//         {orders.length === 0 ? (
//           <div className="bg-white rounded-lg shadow-sm p-8 text-center">
//             <div className="text-gray-400 text-4xl mb-4">📦</div>
//             <h3 className="text-lg font-medium text-gray-800 mb-2">No Orders Found</h3>
//             <p className="text-gray-600">There are no orders to display at the moment.</p>
//           </div>
//         ) : (
//           <div className="grid gap-4">
//             {orders.map((order, index) => (
//               <div key={order.id || index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       Order #{order.id || order.orderNumber || `ORDER-${index + 1}`}
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       {order.date || order.createdAt || 'Date not available'}
//                     </p>
//                   </div>
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     order.status === 'completed' ? 'bg-green-100 text-green-800' :
//                     order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                     order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {order.status || 'Unknown'}
//                   </span>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                   <div>
//                     <span className="font-medium text-gray-700">Customer:</span>
//                     <p className="text-gray-600">{order.customerName || 'N/A'}</p>
//                   </div>
//                   <div>
//                     <span className="font-medium text-gray-700">Total:</span>
//                     <p className="text-gray-600">${order.total || order.amount || '0.00'}</p>
//                   </div>
//                   <div>
//                     <span className="font-medium text-gray-700">Items:</span>
//                     <p className="text-gray-600">{order.itemCount || order.items?.length || 0} items</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;
