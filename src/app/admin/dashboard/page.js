'use client'
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Package,
  ChevronRight,
  Bell,
  Search,
  User,
  LogOut,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Activity,
  Users,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Filter,
  Download,
  Phone,
  Mail,
  Notebook,
  CircleUserRound,
  CalendarArrowDown
} from 'lucide-react';
import { useAdminAuth } from '../../../contexts/AdminAuthContext';
 
import ProductManagement from '../layout/product/page';
import ContactUsAdmin from '../layout/contact/page';
import NewsletterAdminDashboard from '../layout/Subscribe/page';
import AdminProtectedRoute from './../../components/AdminProtectedRoute';
import BlogAdminDashboard from '../layout/blog/page';
import UserAdminDashboard from '../layout/User/page';
import OrderTable from '../layout/Order/page';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const { user, logout } = useAdminAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, badge: null },    
    { id: 'products', label: 'Products', icon: Package, badge: null },
     { id: 'blog', label: 'Blog', icon: Notebook, badge: null },
    { id: 'contact', label: 'Contact', icon: Phone, badge: null },
    { id: 'subscribe', label: 'Subscribe', icon: Mail, badge: null },
    { id: 'user', label: 'User', icon: CircleUserRound, badge: null },
     { id: 'order', label: 'Order', icon: CalendarArrowDown, badge: null },
     
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, {user?.name || 'Admin'}!
                </h1>
                <p className="text-gray-600 mt-2">Here's what's happening with your business today.</p>
              </div>
              
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Products</p>
                    <p className="text-2xl font-bold text-gray-900">6+</p>
                     
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">Rs. 45,678</p>
                    {/* <p className="text-sm text-green-600 mt-1">↗ +8.1%</p> */}
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold text-gray-900">Rs. 2,345</p>
                    {/* <p className="text-sm text-green-600 mt-1">↗ +3.7%</p> */}
                  </div>
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm text-gray-600">New order #1234 received</p>
                  <span className="text-xs text-gray-400">2 minutes ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm text-gray-600">Product "d-vedic" updated</p>
                  <span className="text-xs text-gray-400">15 minutes ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="text-sm text-gray-600">New user registered</p>
                  <span className="text-xs text-gray-400">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'products':
        return <ProductManagement />;
      case 'contact':
        return <ContactUsAdmin />;
      case 'subscribe':
        return <NewsletterAdminDashboard />;
      case 'blog':
        return <BlogAdminDashboard />;
      case 'user':
        return <UserAdminDashboard />;

      case 'order':
        return <OrderTable />;
      default:
        return (
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 capitalize">{activeSection} Management</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="text-gray-600">Content for {activeSection} section will be displayed here.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <AdminProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-10">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 h-16 fixed top-0 left-0 right-0 z-30 flex items-center px-4">
          <div className="flex items-center justify-between w-full max-w-full">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YourBrand
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Container */}
        <div className="flex pt-16">
          {/* Enhanced Sidebar */}
          <div className={`fixed top-16 bottom-0 left-0 z-20 w-72 bg-white/95 backdrop-blur-md shadow-xl border-r border-gray-200 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-all duration-300 ease-in-out md:relative md:top-0 md:translate-x-0`}>
            
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
                <p className="text-sm text-gray-500 mt-1">Manage your business</p>
              </div>
              <button 
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="p-4 space-y-2 h-full overflow-y-auto">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25'
                        : 'text-gray-700 hover:bg-gray-100 hover:translate-x-1'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mr-3 flex-shrink-0 transition-colors ${
                      isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
                    }`} />
                    <span className="font-medium text-sm flex-1">{item.label}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <ChevronRight className="h-4 w-4 ml-2 flex-shrink-0 text-white" />
                    )}
                  </button>
                );
              })}
              
              {/* User Profile Section */}
              {/* <div className="pt-6 mt-6 border-t border-gray-100">
                <div className="flex items-center px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.name || 'Admin User'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user?.email || 'admin@company.com'}
                    </p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="p-1 rounded-lg hover:bg-gray-200 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div> */}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
            {/* Top Bar */}
            <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 px-4 md:px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 mr-4 transition-colors"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                  <div>
                    <h1 className="text-lg md:text-xl font-semibold text-gray-900 capitalize">
                      {activeSection}
                    </h1>
                    <p className="text-sm text-gray-500 hidden md:block">
                      {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="md:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Bell className="h-5 w-5" />
                  </button>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-medium">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              {renderContent()}
            </main>
          </div>

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={toggleSidebar}
            />
          )}
        </div>
      </div>
    </AdminProtectedRoute>
  );
};

export default AdminDashboard;