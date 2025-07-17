'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Filter, Eye, FileText, Download } from 'lucide-react';

const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showBillPreview, setShowBillPreview] = useState(false);
  const [billOrder, setBillOrder] = useState(null);
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
      address: '123 Main St, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      quantity: 1,
      unitPrice: 299.99,
      tax: 23.99,
      shippingFee: 15.00
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
      address: '456 Oak Ave, Los Angeles, CA 90210',
      phone: '+1 (555) 987-6543',
      quantity: 2,
      unitPrice: 24.99,
      tax: 4.00,
      shippingFee: 5.00
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
      address: '789 Pine St, Chicago, IL 60601',
      phone: '+1 (555) 456-7890',
      quantity: 1,
      unitPrice: 89.99,
      tax: 7.20,
      shippingFee: 10.00
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
      address: '321 Elm St, Miami, FL 33101',
      phone: '+1 (555) 234-5678',
      quantity: 1,
      unitPrice: 159.99,
      tax: 12.80,
      shippingFee: 12.00
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
      address: '654 Maple Dr, Seattle, WA 98101',
      phone: '+1 (555) 345-6789',
      quantity: 3,
      unitPrice: 6.66,
      tax: 1.60,
      shippingFee: 0.00
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

  const generateBillPDF = (order) => {
    const subtotal = order.unitPrice * order.quantity;
    const total = subtotal + order.tax + order.shippingFee;
    
    const billContent = `
      <html>
        <head>
          <title>Invoice - ${order.orderId}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .company-name { font-size: 28px; font-weight: bold; color: #2563eb; margin-bottom: 5px; }
            .invoice-title { font-size: 24px; color: #333; margin-top: 10px; }
            .invoice-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .billing-info { width: 48%; }
            .section-title { font-size: 16px; font-weight: bold; color: #333; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
            .info-row { margin-bottom: 8px; }
            .label { font-weight: bold; display: inline-block; width: 100px; }
            .items-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .items-table th, .items-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            .items-table th { background-color: #f8f9fa; font-weight: bold; }
            .total-section { margin-top: 30px; width: 300px; margin-left: auto; }
            .total-row { display: flex; justify-content: space-between; margin-bottom: 8px; padding: 5px 0; }
            .total-row.final { font-weight: bold; font-size: 18px; border-top: 2px solid #333; padding-top: 10px; }
            .footer { margin-top: 50px; text-align: center; color: #666; font-size: 12px; }
            .status-badge { padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; }
            .status-paid { background-color: #dcfce7; color: #166534; }
            .status-pending { background-color: #fef3c7; color: #92400e; }
            .status-failed { background-color: #fecaca; color: #991b1b; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="company-name">Your Company Name</div>
            <div>123 Business Street, City, State 12345</div>
            <div>Phone: (555) 123-4567 | Email: info@company.com</div>
            <div class="invoice-title">INVOICE</div>
          </div>

          <div class="invoice-info">
            <div class="billing-info">
              <div class="section-title">Bill To:</div>
              <div class="info-row"><strong>${order.userName}</strong></div>
              <div class="info-row">${order.email}</div>
              <div class="info-row">${order.phone}</div>
              <div class="info-row">${order.address}</div>
            </div>
            <div class="billing-info">
              <div class="section-title">Invoice Details:</div>
              <div class="info-row">
                <span class="label">Invoice #:</span> ${order.orderId}
              </div>
              <div class="info-row">
                <span class="label">Date:</span> ${order.createdAt}
              </div>
              <div class="info-row">
                <span class="label">User ID:</span> ${order.userId}
              </div>
              <div class="info-row">
                <span class="label">Status:</span> 
                <span class="status-badge status-${order.paymentStatus.toLowerCase()}">${order.paymentStatus}</span>
              </div>
            </div>
          </div>

          <table class="items-table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${order.orderItemName}</td>
                <td>${order.quantity}</td>
                <td>$${order.unitPrice.toFixed(2)}</td>
                <td>$${subtotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <div class="total-section">
            <div class="total-row">
              <span>Subtotal:</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>Tax:</span>
              <span>$${order.tax.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>Shipping:</span>
              <span>$${order.shippingFee.toFixed(2)}</span>
            </div>
            <div class="total-row final">
              <span>Total:</span>
              <span>$${total.toFixed(2)}</span>
            </div>
          </div>

          <div class="footer">
            <p>Thank you for your business!</p>
            <p>This is a computer-generated invoice. No signature required.</p>
          </div>

          <div class="no-print" style="text-align: center; margin-top: 30px;">
            <button onclick="window.print()" style="background-color: #2563eb; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">
              Print Invoice
            </button>
            <button onclick="window.close()" style="background-color: #6b7280; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
              Close
            </button>
          </div>
        </body>
      </html>
    `;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(billContent);
    newWindow.document.close();
  };

  const handleCreateBill = (order) => {
    setBillOrder(order);
    setShowBillPreview(true);
  };

  const handleGeneratePDF = () => {
    generateBillPDF(billOrder);
    setShowBillPreview(false);
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
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => handleCreateBill(order)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Create Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const BillPreviewModal = ({ order, onClose, onGenerate }) => {
    const subtotal = order.unitPrice * order.quantity;
    const total = subtotal + order.tax + order.shippingFee;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Bill Preview</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-600">Your Company Name</h3>
                <p className="text-sm text-gray-600">123 Business Street, City, State 12345</p>
                <p className="text-sm text-gray-600">Phone: (555) 123-4567 | Email: info@company.com</p>
                <h4 className="text-lg font-semibold mt-4">INVOICE</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Bill To:</h5>
                  <p className="text-sm">{order.userName}</p>
                  <p className="text-sm">{order.email}</p>
                  <p className="text-sm">{order.address}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Invoice Details:</h5>
                  <p className="text-sm">Invoice #: {order.orderId}</p>
                  <p className="text-sm">Date: {order.createdAt}</p>
                  <p className="text-sm">User ID: {order.userId}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <table className="w-full mb-4">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left text-black py-2">Item</th>
                      <th className="text-right text-black py-2">Qty</th>
                      <th className="text-right text-black py-2">Unit Price</th>
                      <th className="text-right text-black py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 text-black">{order.orderItemName}</td>
                      <td className="text-right text-black py-2">{order.quantity}</td>
                      <td className="text-right text-black py-2">${order.unitPrice.toFixed(2)}</td>
                      <td className="text-right text-black py-2">${subtotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between py-1">
                    <span className='text-black'>Subtotal:</span>
                    <span  className='text-black'>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span  className='text-black'>Tax:</span>
                    <span  className='text-black'>${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span  className='text-black'>Shipping:</span>
                    <span  className='text-black'>${order.shippingFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 font-bold border-t">
                    <span  className='text-black' >Total:</span>
                    <span  className='text-black' >${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onGenerate}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
            <div className="flex flex-col sm:flex-row gap-3">
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
            </div>
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
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>
                      <button
                        onClick={() => handleCreateBill(order)}
                        className="text-green-600 hover:text-green-900 flex items-center gap-1"
                      >
                        <FileText className="h-4 w-4" />
                        Bill
                      </button>
                    </div>
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
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </button>
                  <button
                    onClick={() => handleCreateBill(order)}
                    className="text-green-600 hover:text-green-900 flex items-center gap-1"
                  >
                    <FileText className="h-4 w-4" />
                    Bill
                  </button>
                </div>
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

      {/* Bill Preview Modal */}
      {showBillPreview && billOrder && (
        <BillPreviewModal
          order={billOrder}
          onClose={() => setShowBillPreview(false)}
          onGenerate={handleGeneratePDF}
        />
      )}
    </div>
  );
};

export default OrderTable;

 