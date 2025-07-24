'use client';
import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Eye, Calendar, User, Image, X, Upload, ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import apiClient from '@/lib/api/config';
import { authAPI } from '@/lib/api/endpoints';
import { toast } from 'react-toastify';

const BlogAdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(null); // Track which blog is being deleted
  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    subject: '',
    description: '',
    pictures: []
  });

  const [isClient, setIsClient] = useState(false);
    
  useEffect(() => {
    setIsClient(true);

    const fetchBlogs = async () => {
      try {
        const response = await authAPI.getBlog();
        const blogArray = response.data;
        console.log("blog data ======>:", response.data);

        // Set the raw blog data instead of formatting it
        setBlogs(blogArray);
        console.log('blog data list received========>:', blogArray);
        
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePictureAdd = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      setFormData(prev => ({
        ...prev,
        pictures: [...prev.pictures, url]
      }));
    }
  };

  const handlePictureRemove = (index) => {
    setFormData(prev => ({
      ...prev,
      pictures: prev.pictures.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.subTitle || !formData.subject) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setSubmitting(true);
      
      // Check if localStorage is available (for SSR compatibility)
      const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
      
      const response = await apiClient.post('/blogs/create', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        // Add the new blog to the beginning of the list
        setBlogs(prev => [response.data.data, ...prev]);
        setFormData({ title: '', subTitle: '', subject: '', description:'', pictures: [] });
        setShowForm(false);
        toast.success('Blog created successfully!');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error('Error creating blog. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (blogId, blogTitle) => {
    // Show confirmation dialog
    const confirmed = window.confirm(`Are you sure you want to delete the blog "${blogTitle}"? This action cannot be undone.`);
    
    if (!confirmed) return;

    try {
      setDeleting(blogId);
      
      // Call the delete API
      await authAPI.deleteBlog(blogId);
      
      // Remove the blog from the state
      setBlogs(prev => prev.filter(blog => blog._id !== blogId));
      
      toast.success('Blog deleted successfully!');
      
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Error deleting blog. Please try again.');
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Blog Management</h1>
              <p className="text-gray-600 mt-1">Manage your blog posts and create new content</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              {showForm ? <ChevronUp size={20} /> : <Plus size={20} />}
              {showForm ? 'Hide Form' : 'Create New Blog'}
            </button>
          </div>
        </div>

        {/* Create Blog Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Create New Blog</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle *
                </label>
                <input
                  type="text"
                  name="subTitle"
                  value={formData.subTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discription *
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pictures
                </label>
                <div className="space-y-2">
                  {formData.pictures.map((picture, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="url"
                        value={picture}
                        readOnly
                        className="flex-1 px-3 py-2 border text-black border-gray-300 rounded-md bg-gray-50"
                      />
                      <button
                        type="button"
                        onClick={() => handlePictureRemove(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handlePictureAdd}
                    className="w-full border-2 border-dashed text-black border-gray-300 rounded-md py-3 px-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 flex items-center justify-center gap-2"
                  >
                    <Upload size={20} />
                    Add Picture URL
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Creating...' : 'Create Blog'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Blog List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Blog Posts ({blogs.length})</h2>
          </div>
          
          {blogs.length === 0 ? (
            <div className="text-center py-12">
              <Image size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs found</h3>
              <p className="text-gray-600 mb-4">Get started by creating your first blog post.</p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Create Your First Blog
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {blogs.map((blog) => (
                <div key={blog._id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    {/* Small Image */}
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                      {blog.pictures && blog.pictures.length > 0 ? (
                        <img
                          src={blog.pictures[0]}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="w-full h-full flex items-center justify-center text-gray-400" 
                        style={{ display: blog.pictures && blog.pictures.length > 0 ? 'none' : 'flex' }}
                      >
                        <Image size={24} />
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {blog.subject}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar size={14} className="mr-1" />
                            {formatDate(blog.createdAt)}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800 p-1 rounded" title="View">
                            <Eye size={16} />
                          </button>
                          <button className="text-green-600 hover:text-green-800 p-1 rounded" title="Edit">
                            <Edit3 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(blog._id, blog.title)}
                            disabled={deleting === blog._id}
                            className="text-red-600 hover:text-red-800 p-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Delete"
                          >
                            {deleting === blog._id ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                            ) : (
                              <Trash2 size={16} />
                            )}
                          </button>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {blog.subTitle}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            Author ID: {blog.author?._id?.slice(-6) || 'Unknown'}
                          </div>
                          
                          {blog.pictures && blog.pictures.length > 0 && (
                            <div className="flex items-center">
                              <Image size={14} className="mr-1" />
                              {blog.pictures.length} image{blog.pictures.length > 1 ? 's' : ''}
                            </div>
                          )}
                        </div>
                        
                        <div className="text-xs text-gray-400">
                          ID: {blog._id?.slice(-8) || 'Unknown'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAdminDashboard;