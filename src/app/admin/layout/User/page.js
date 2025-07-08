import React, { useState, useEffect } from 'react';
import { Trash2, Users, Mail, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { authAPI } from '@/lib/api/endpoints';

const UserAdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleting, setDeleting] = useState(null);

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authAPI.getUserList(page);
      const { users = [], total = 0, pages = 1 } = response.data;

      setUsers(users);
      setTotalUsers(total);
      setTotalPages(pages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, []);


  

  const deleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      setDeleting(id);
      await authAPI.deleteUser(id);

      // Refetch current page to stay in sync
      fetchUsers(currentPage);
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user.');
    } finally {
      setDeleting(null);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) fetchUsers(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) fetchUsers(currentPage + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <p className="text-gray-600">Manage system users and permissions</p>
              </div>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-blue-800">
                Total Users: {totalUsers}
              </p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
            <button
              onClick={() => fetchUsers(currentPage)}
              className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {users.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No users found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Email</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Role</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Created</th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map(user => (
                    <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.first_name} {user.last_name}
                            </div>
                            <div className="text-sm text-gray-500 sm:hidden">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden sm:table-cell">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-400 mr-2" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm hidden sm:table-cell">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          user.role === 'admin' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => deleteUser(user._id)}
                          disabled={deleting === user._id}
                          className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:ring-red-500 disabled:opacity-50"
                        >
                          {deleting === user._id ? (
                            <div className="animate-spin h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full"></div>
                          ) : (
                            <>
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <p className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </p>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAdminDashboard;
