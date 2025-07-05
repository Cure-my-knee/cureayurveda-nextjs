'use client';
import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, Eye, Trash2, Mail, Phone, Calendar, User, MessageSquare, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { authAPI } from '@/lib/api/endpoints';

export default function ContactUsAdmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [expandedRows, setExpandedRows] = useState({});

  // Mock API data - Replace with your actual API endpoint
   
  // Simulate API call
 
 useEffect(() => {
    fetchContacts();
  }, []);

const fetchContacts = async () => {
  try {
    setLoading(true);

    const response = await authAPI.getContactMessage();
    console.log('API Response received:', response);

    const messages = Array.isArray(response?.data) ? response.data : [];

    const enriched = messages.map((msg, index) => ({
      id: msg._id || index + 1,
      name: msg.name || 'N/A',
      email: msg.email || 'N/A',
      phone: msg.phone || 'N/A',
      subject: msg.subject || 'No Subject',
      message: msg.message || 'No message',
      date: msg.createdAt || new Date().toISOString(),  
      status: 'new', 
    }));

    setContacts(enriched);
    console.log('✅ Contacts fetched and enriched:', enriched);
  } catch (err) {
    console.error('❌ Failed to fetch contacts:', err);
    setError('Failed to fetch contacts');
  } finally {
    setLoading(false);
  }
};


  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const handleStatusUpdate = (id, newStatus) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, status: newStatus } : contact
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts(contacts.filter(contact => contact.id !== id));
    }
  };

  const toggleExpanded = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredAndSortedContacts = contacts
    .filter(contact => {
      const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || contact.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'email':
          aValue = a.email.toLowerCase();
          bValue = b.email.toLowerCase();
          break;
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchContacts}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us Admin</h1>
          <p className="text-gray-600">Manage and respond to customer inquiries</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                 
              </div>
              
            </div>
            <div className="flex gap-2">
              <button
                onClick={fetchContacts}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              {/* <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button> */}
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('name')}>
                    <div className="flex items-center gap-1">
                      Name
                      {sortBy === 'name' && (sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('email')}>
                    <div className="flex items-center gap-1">
                      Email
                      {sortBy === 'email' && (sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort('date')}>
                    <div className="flex items-center gap-1">
                      Date
                      {sortBy === 'date' && (sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                    </div>
                  </th>
                  
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedContacts.map((contact) => (
                  <React.Fragment key={contact.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="font-medium text-gray-900">{contact.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-900">{contact.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-900">{contact.phone || 'N/A'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs truncate text-black">{contact.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(contact.date)}
                      </td>
                     
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleExpanded(contact.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                           
                        </div>
                      </td>
                    </tr>
                    {expandedRows[contact.id] && (
                      <tr>
                        <td colSpan="7" className="px-6 py-4 bg-gray-50">
                          <div className="max-w-4xl">
                            <h4 className="font-medium text-gray-900 mb-2">Message:</h4>
                            <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {filteredAndSortedContacts.map((contact) => (
            <div key={contact.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <h3 className="font-medium text-gray-900">{contact.name}</h3>
                  </div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm">{contact.email}</span>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{contact.phone}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleExpanded(contact.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-1">Subject:</h4>
                <p className="text-gray-700">{contact.subject}</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{formatDate(contact.date)}</span>
                </div>
                <select
                  value={contact.status}
                  onChange={(e) => handleStatusUpdate(contact.id, e.target.value)}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)} border-0 focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="new">New</option>
                  <option value="in-progress">In Progress</option>
                  <option value="replied">Replied</option>
                </select>
              </div>

              {expandedRows[contact.id] && (
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Message:</h4>
                  <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedContacts.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
            <p className="text-gray-600">No contacts match your current search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}