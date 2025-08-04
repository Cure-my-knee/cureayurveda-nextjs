// 'use client'
//  import React, { useState, useEffect } from "react";
// import { Trash2, Upload, Image } from "lucide-react";
// import { authAPI } from "@/lib/api/endpoints";

// const ProductManagement = () => {
//   // const [products, setProducts] = useState([
//   //   {
//   //     id: 1,
//   //     name: "Wireless Headphones",
//   //     quantity: 150,
//   //     type: "Electronics",
//   //     category: "Audio",
//   //     details: "High-quality wireless headphones with noise cancellation",
//   //     features: ["Bluetooth 5.0", "30-hour battery", "Noise cancellation"],
//   //     benefits: ["Crystal clear sound", "Long-lasting comfort", "Wireless freedom"],
//   //     images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"],
//   //     status: "active",
//   //     createdAt: "2024-01-15"
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Smart Watch",
//   //     quantity: 75,
//   //     type: "Electronics",
//   //     category: "Wearables",
//   //     details: "Advanced fitness tracking smartwatch with heart rate monitor",
//   //     features: ["Heart rate monitor", "GPS tracking", "Water resistant"],
//   //     benefits: ["Health monitoring", "Fitness tracking", "Smart notifications"],
//   //     images: ["watch1.jpg", "watch2.jpg", "watch3.jpg", "watch4.jpg", "watch5.jpg"],
//   //     status: "active",
//   //     createdAt: "2024-01-10"
//   //   }
//   // ]);
//   const [products, setProducts] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [showForm, setShowForm] = useState(false);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     quantity: '',
//     type: '',
//     category: '',
//     details: '',
//     features: [''],
//     benefits: [''],
//     images: []
//   });

//   const [imageFiles, setImageFiles] = useState([]);


//   // get api data start

//     useEffect(() => {
    
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
       
//       setLoading(true);
//       setError(null);
      
//       const data = await authAPI.getProduct();
      
      
//       // Handle nested response structure: data.data.products
//       const productsArray = data.data?.products || data.products || data || [];
       
      
      
//       setProducts(productsArray);
//       console.log('✨ Products state updated successfully================>', productsArray);
      
//     } catch (err) {
       
//       setError(err.message || 'Failed to fetch products');
//     } finally {
//       setLoading(false);
//       console.log('🏁 Fetch products completed');
//     }
//   };
//   // get api data end

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleArrayChange = (index, value, field) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: prev[field].map((item, i) => i === index ? value : item)
//     }));
//   };

//   const addArrayField = (field) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: [...prev[field], '']
//     }));
//   };

//   const removeArrayField = (index, field) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: prev[field].filter((_, i) => i !== index)
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     if (imageFiles.length + files.length > 10) {
//       alert('Maximum 10 images allowed');
//       return;
//     }
//     setImageFiles(prev => [...prev, ...files]);
//   };

//   const removeImage = (index) => {
//     setImageFiles(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = () => {
//     if (imageFiles.length < 5) {
//       alert('Please upload at least 5 images');
//       return;
//     }

//     const newProduct = {
//       id: editingProduct ? editingProduct.id : Date.now(),
//       ...formData,
//       features: formData.features.filter(f => f.trim()),
//       benefits: formData.benefits.filter(b => b.trim()),
//       images: imageFiles.map(file => file.name),
//       status: 'active',
//       createdAt: new Date().toISOString().split('T')[0]
//     };

//     if (editingProduct) {
//       setProducts(prev => prev.map(p => p.id === editingProduct.id ? newProduct : p));
//     } else {
//       setProducts(prev => [...prev, newProduct]);
//     }

//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       quantity: '',
//       type: '',
//       category: '',
//       details: '',
//       features: [''],
//       benefits: [''],
//       images: []
//     });
//     setImageFiles([]);
//     setEditingProduct(null);
//     setShowForm(false);
//   };

//   const handleEdit = (product) => {
//     setFormData({
//       name: product.name,
//       quantity: product.quantity,
//       type: product.type,
//       category: product.category,
//       details: product.details,
//       features: product.features,
//       benefits: product.benefits,
//       images: product.images
//     });
//     setEditingProduct(product);
//     setShowForm(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       setProducts(prev => prev.filter(p => p.id !== id));
//     }
//   };

//   const toggleStatus = (id) => {
//     setProducts(prev => prev.map(p => 
//       p.id === id ? { ...p, status: p.status === 'active' ? 'disabled' : 'active' } : p
//     ));
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Product Management</h1>
//         <button 
//           onClick={() => setShowForm(!showForm)}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-start sm:self-auto"
//         >
//           {showForm ? 'Hide Form' : 'Add New Product'}
//         </button>
//       </div>

//       {/* Product Form */}
//       {showForm && (
//         <div className="bg-white rounded-lg shadow p-4 md:p-6">
//           <h2 className="text-xl font-semibold mb-6">
//             {editingProduct ? 'Edit Product' : 'Add New Product'}
//           </h2>
          
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Product Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Quantity *
//                 </label>
//                 <input
//                   type="number"
//                   name="quantity"
//                   value={formData.quantity}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Type *
//                 </label>
//                 <input
//                   type="text"
//                   name="type"
//                   value={formData.type}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Category *
//                 </label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Details *
//               </label>
//               <textarea
//                 name="details"
//                 value={formData.details}
//                 onChange={handleInputChange}
//                 rows={4}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               />
//             </div>

//             {/* Features */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Features *
//               </label>
//               {formData.features.map((feature, index) => (
//                 <div key={index} className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     value={feature}
//                     onChange={(e) => handleArrayChange(index, e.target.value, 'features')}
//                     className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter feature"
//                   />
//                   {formData.features.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeArrayField(index, 'features')}
//                       className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addArrayField('features')}
//                 className="text-blue-600 hover:text-blue-800 text-sm"
//               >
//                 + Add Feature
//               </button>
//             </div>

//             {/* Benefits */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Benefits *
//               </label>
//               {formData.benefits.map((benefit, index) => (
//                 <div key={index} className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     value={benefit}
//                     onChange={(e) => handleArrayChange(index, e.target.value, 'benefits')}
//                     className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter benefit"
//                   />
//                   {formData.benefits.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeArrayField(index, 'benefits')}
//                       className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addArrayField('benefits')}
//                 className="text-blue-600 hover:text-blue-800 text-sm"
//               >
//                 + Add Benefit
//               </button>
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Product Images * (Minimum 5 images, Maximum 10)
//               </label>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                 <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                 <div className="text-sm text-gray-600 mb-4">
//                   <label className="cursor-pointer text-blue-600 hover:text-blue-500">
//                     <span>Upload images</span>
//                     <input
//                       type="file"
//                       multiple
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                       className="sr-only"
//                     />
//                   </label>
//                   <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB each</p>
//                 </div>
//               </div>

//               {imageFiles.length > 0 && (
//                 <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//                   {imageFiles.map((file, index) => (
//                     <div key={index} className="relative">
//                       <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
//                         <Image className="h-8 w-8 text-gray-400" />
//                       </div>
//                       <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
//                       <button
//                         type="button"
//                         onClick={() => removeImage(index)}
//                         className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
//               >
//                 {editingProduct ? 'Update Product' : 'Post Product'}
//               </button>
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-medium"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Products List */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900">Products ({products.length})</h3>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Type/Category
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Quantity
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {currentProducts.map((product) => (
//                 <tr key={product.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div>
//                       <div className="text-sm font-medium text-gray-900">{product.name}</div>
//                       <div className="text-sm text-gray-500">{product.details.substring(0, 50)}...</div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{product.type}</div>
//                     <div className="text-sm text-gray-500">{product.category}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.quantity}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                       product.status === 'active' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {product.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                     <button
//                       onClick={() => handleEdit(product)}
//                       className="text-blue-600 hover:text-blue-900"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => toggleStatus(product.id)}
//                       className="text-yellow-600 hover:text-yellow-900"
//                     >
//                       {product.status === 'active' ? 'Disable' : 'Enable'}
//                     </button>
//                     <button
//                       onClick={() => handleDelete(product.id)}
//                       className="text-red-600 hover:text-red-900"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
//             <div className="flex items-center text-sm text-gray-700">
//               Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, products.length)} of {products.length} products
//             </div>
//             <div className="flex space-x-2">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => paginate(page)}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === page
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductManagement;


// 'use client'
// import React, { useState, useEffect } from "react";
// import { Trash2, Upload, Image } from "lucide-react";
// import { authAPI } from "@/lib/api/endpoints";

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [showForm, setShowForm] = useState(false);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     quantity: '',
//     type: '',
//     category: '',
//     details: '',
//     features: [''],
//     benefits: [''],
//     images: [],
//     price: '',
//     currency: 'INR'
//   });

//   const [imageFiles, setImageFiles] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const data = await authAPI.getProduct();
      
//       // Handle the API response structure and transform data
//       const productsArray = data.data?.products || data.products || data || [];
      
//       // Transform API data to match component structure
//       const transformedProducts = productsArray.map(product => ({
//         id: product._id,
//         name: product.productName,
//         price: product.price,
//         currency: product.currency,
//         // Set default values for fields not in API response
//         quantity: product.quantity || 0,
//         type: product.type || 'N/A',
//         category: product.category || 'N/A',
//         details: product.details || 'No details available',
//         features: product.features || [],
//         benefits: product.benefits || [],
//         images: product.images || [],
//         status: product.status || 'active',
//         createdAt: product.createdAt || new Date().toISOString().split('T')[0]
//       }));
      
//       setProducts(transformedProducts);
//       console.log('✨ Products state updated successfully:', transformedProducts);
      
//     } catch (err) {
//       console.error('Error fetching products:', err);
//       setError(err.message || 'Failed to fetch products');
//     } finally {
//       setLoading(false);
//       console.log('🏁 Fetch products completed');
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleArrayChange = (index, value, field) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: prev[field].map((item, i) => i === index ? value : item)
//     }));
//   };

//   const addArrayField = (field) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: [...prev[field], '']
//     }));
//   };

//   const removeArrayField = (index, field) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: prev[field].filter((_, i) => i !== index)
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     if (imageFiles.length + files.length > 10) {
//       alert('Maximum 10 images allowed');
//       return;
//     }
//     setImageFiles(prev => [...prev, ...files]);
//   };

//   const removeImage = (index) => {
//     setImageFiles(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async () => {
//     if (imageFiles.length < 5) {
//       alert('Please upload at least 5 images');
//       return;
//     }

//     const newProduct = {
//       id: editingProduct ? editingProduct.id : Date.now(),
//       ...formData,
//       features: formData.features.filter(f => f.trim()),
//       benefits: formData.benefits.filter(b => b.trim()),
//       images: imageFiles.map(file => file.name),
//       status: 'active',
//       createdAt: new Date().toISOString().split('T')[0]
//     };

//     try {
//       if (editingProduct) {
//         // Update existing product
//         // await authAPI.updateProduct(editingProduct.id, newProduct);
//         setProducts(prev => prev.map(p => p.id === editingProduct.id ? newProduct : p));
//       } else {
//         // Create new product
//         // await authAPI.createProduct(newProduct);
//         setProducts(prev => [...prev, newProduct]);
//       }
//       resetForm();
//     } catch (err) {
//       console.error('Error saving product:', err);
//       alert('Failed to save product. Please try again.');
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       quantity: '',
//       type: '',
//       category: '',
//       details: '',
//       features: [''],
//       benefits: [''],
//       images: [],
//       price: '',
//       currency: 'INR'
//     });
//     setImageFiles([]);
//     setEditingProduct(null);
//     setShowForm(false);
//   };

//   const handleEdit = (product) => {
//     setFormData({
//       name: product.name,
//       quantity: product.quantity,
//       type: product.type,
//       category: product.category,
//       details: product.details,
//       features: product.features.length > 0 ? product.features : [''],
//       benefits: product.benefits.length > 0 ? product.benefits : [''],
//       images: product.images,
//       price: product.price || '',
//       currency: product.currency || 'INR'
//     });
//     setEditingProduct(product);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       try {
//         // await authAPI.deleteProduct(id);
//         setProducts(prev => prev.filter(p => p.id !== id));
//       } catch (err) {
//         console.error('Error deleting product:', err);
//         alert('Failed to delete product. Please try again.');
//       }
//     }
//   };

//   const toggleStatus = async (id) => {
//     try {
//       const product = products.find(p => p.id === id);
//       const newStatus = product.status === 'active' ? 'disabled' : 'active';
      
//       // await authAPI.updateProductStatus(id, newStatus);
//       setProducts(prev => prev.map(p => 
//         p.id === id ? { ...p, status: newStatus } : p
//       ));
//     } catch (err) {
//       console.error('Error updating product status:', err);
//       alert('Failed to update product status. Please try again.');
//     }
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Loading state
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//           <p className="mt-4 text-gray-600">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="text-red-600 text-xl mb-4">Error loading products</div>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button 
//             onClick={fetchProducts}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Product Management</h1>
//         <button 
//           onClick={() => setShowForm(!showForm)}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-start sm:self-auto"
//         >
//           {showForm ? 'Hide Form' : 'Add New Product'}
//         </button>
//       </div>

//       {/* Product Form */}
//       {showForm && (
//         <div className="bg-white rounded-lg shadow p-4 md:p-6">
//           <h2 className="text-xl font-semibold mb-6">
//             {editingProduct ? 'Edit Product' : 'Add New Product'}
//           </h2>
          
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Product Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Price *
//                 </label>
//                 <div className="flex">
//                   <select
//                     name="currency"
//                     value={formData.currency}
//                     onChange={handleInputChange}
//                     className="p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="INR">INR</option>
//                     <option value="USD">USD</option>
//                     <option value="EUR">EUR</option>
//                   </select>
//                   <input
//                     type="number"
//                     name="price"
//                     value={formData.price}
//                     onChange={handleInputChange}
//                     className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="0.00"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Quantity *
//                 </label>
//                 <input
//                   type="number"
//                   name="quantity"
//                   value={formData.quantity}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Type *
//                 </label>
//                 <input
//                   type="text"
//                   name="type"
//                   value={formData.type}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Category *
//                 </label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Details *
//               </label>
//               <textarea
//                 name="details"
//                 value={formData.details}
//                 onChange={handleInputChange}
//                 rows={4}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               />
//             </div>

//             {/* Features */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Features *
//               </label>
//               {formData.features.map((feature, index) => (
//                 <div key={index} className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     value={feature}
//                     onChange={(e) => handleArrayChange(index, e.target.value, 'features')}
//                     className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter feature"
//                   />
//                   {formData.features.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeArrayField(index, 'features')}
//                       className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addArrayField('features')}
//                 className="text-blue-600 hover:text-blue-800 text-sm"
//               >
//                 + Add Feature
//               </button>
//             </div>

//             {/* Benefits */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Benefits *
//               </label>
//               {formData.benefits.map((benefit, index) => (
//                 <div key={index} className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     value={benefit}
//                     onChange={(e) => handleArrayChange(index, e.target.value, 'benefits')}
//                     className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter benefit"
//                   />
//                   {formData.benefits.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeArrayField(index, 'benefits')}
//                       className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addArrayField('benefits')}
//                 className="text-blue-600 hover:text-blue-800 text-sm"
//               >
//                 + Add Benefit
//               </button>
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Product Images * (Minimum 5 images, Maximum 10)
//               </label>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                 <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                 <div className="text-sm text-gray-600 mb-4">
//                   <label className="cursor-pointer text-blue-600 hover:text-blue-500">
//                     <span>Upload images</span>
//                     <input
//                       type="file"
//                       multiple
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                       className="sr-only"
//                     />
//                   </label>
//                   <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB each</p>
//                 </div>
//               </div>

//               {imageFiles.length > 0 && (
//                 <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//                   {imageFiles.map((file, index) => (
//                     <div key={index} className="relative">
//                       <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
//                         <Image className="h-8 w-8 text-gray-400" />
//                       </div>
//                       <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
//                       <button
//                         type="button"
//                         onClick={() => removeImage(index)}
//                         className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
//               >
//                 {editingProduct ? 'Update Product' : 'Post Product'}
//               </button>
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-medium"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Products List */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900">Products ({products.length})</h3>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Type/Category
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Quantity
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {currentProducts.map((product) => (
//                 <tr key={product.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div>
//                       <div className="text-sm font-medium text-gray-900">{product.name}</div>
//                       <div className="text-sm text-gray-500">{product.details.substring(0, 50)}...</div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {product.currency} {product.price}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{product.type}</div>
//                     <div className="text-sm text-gray-500">{product.category}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.quantity}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                       product.status === 'active' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {product.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                     <button
//                       onClick={() => handleEdit(product)}
//                       className="text-blue-600 hover:text-blue-900"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => toggleStatus(product.id)}
//                       className="text-yellow-600 hover:text-yellow-900"
//                     >
//                       {product.status === 'active' ? 'Disable' : 'Enable'}
//                     </button>
//                     <button
//                       onClick={() => handleDelete(product.id)}
//                       className="text-red-600 hover:text-red-900"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
//             <div className="flex items-center text-sm text-gray-700">
//               Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, products.length)} of {products.length} products
//             </div>
//             <div className="flex space-x-2">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => paginate(page)}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === page
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductManagement;
 



'use client'
import React, { useState, useEffect } from "react";
import { Trash2, Upload, Image } from "lucide-react";
import { authAPI } from "@/lib/api/endpoints";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    type: '',
    category: '',
    details: '',
    weight: '',
    sku: '',
    features: [''],
    benefits: [''],
    images: [],
    price: '',
    faq: [{ question: '', answer: '' }],
    currency: 'INR'
  });

  const [imageFiles, setImageFiles] = useState([]);

  // get product data list

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await authAPI.getProduct();
      console.log('api data all products', data);
    
      const productsArray = data.data?.products || data.products || data || [];
     
      const transformedProducts = productsArray.map(product => ({
        id: product.productDetailId, 
        name: product.productName,
        price: product.price,
        currency: product.currency,
        quantity: product.quantity || 0,
        type: product.type || 'N/A',
        category: product.category || 'N/A',
        details: product.details || 'No details available',
        features: product.features || [],
        benefits: product.benefits || [],
        images: product.images || [],
        status: product.status || 'active',
        createdAt: product.createdAt || new Date().toISOString().split('T')[0]
      }));
      
      setProducts(transformedProducts);
      console.log('Products state dashboard successfully=========>:', transformedProducts);
      
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
      console.log('🏁 Fetch products completed');
    }
  };


  // get product list end 


  // delete product api start

  const handleDelete = async (id) => {
  if (window.confirm('Are you sure you want to delete this product?')) {
    try {
 
      await authAPI.deleteProduct(id);
     
      setProducts(prev => prev.filter(p => p.id !== id));
 
      alert('Product deleted successfully');
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product. Please try again.');
    }
  }
};


  // end



  // post data api start

  const handleSubmit = async () => {
  if (imageFiles.length < 5) {
    alert('Please upload at least 5 images');
    return;
  }

  const form = new FormData();

  // Append all form fields
  form.append('name', formData.name);
  form.append('weight', formData.weight);
  form.append('sku', formData.sku);
  form.append('quantity', formData.quantity);
  form.append('type', formData.type);
  form.append('category', formData.category);
  form.append('details', formData.details);
  form.append('price', formData.price);
  form.append('currency', formData.currency);

 
  form.append('features', JSON.stringify(formData.features.filter(f => f.trim())));
  form.append('benefits', JSON.stringify(formData.benefits.filter(b => b.trim())));

  // Append image files
  imageFiles.forEach((file, index) => {
    form.append(`images`, file);  
  });

  try {
    if (editingProduct) {
  
    } else {
      const response = await authAPI.postProductCart(form);
      console.log('✅ Product created:', response);
 
      fetchProducts(); // or setProducts(prev => [...prev, transformedNewProduct])
    }

    resetForm();
  } catch (err) {
    console.error('❌ Failed to create product:', err);
    alert('Failed to save product. Please try again.');
  }
};

  //  end here

  const handleFAQChange = (index, field, value) => {
  const updatedFAQs = [...formData.features];
  updatedFAQs[index][field] = value;
  setFormData(prev => ({
    ...prev,
    features: updatedFAQs,
  }));
};

const addFAQField = () => {
  setFormData(prev => ({
    ...prev,
    features: [...prev.features, { question: '', answer: '' }],
  }));
};

const removeFAQField = (index) => {
  setFormData(prev => ({
    ...prev,
    features: prev.features.filter((_, i) => i !== index),
  }));
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (index, value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (index, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (imageFiles.length + files.length > 10) {
      alert('Maximum 10 images allowed');
      return;
    }
    setImageFiles(prev => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      quantity: '',
      type: '',
      category: '',
      details: '',
      features: [''],
      benefits: [''],
      images: [],
      price: '',
      sku: '',
      weight: '',

      currency: 'INR'
    });
    setImageFiles([]);
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      quantity: product.quantity,
      type: product.type,
      category: product.category,
      details: product.details,
      features: product.features.length > 0 ? product.features : [''],
      benefits: product.benefits.length > 0 ? product.benefits : [''],
      images: product.images,
      price: product.price || '',
      currency: product.currency || 'INR'
    });
    setEditingProduct(product);
    setShowForm(true);
  };

  // const handleDelete = async (id) => {
  //   if (window.confirm('Are you sure you want to delete this product?')) {
  //     try {
  //       // await authAPI.deleteProduct(id);
  //       setProducts(prev => prev.filter(p => p.id !== id));
  //     } catch (err) {
  //       console.error('Error deleting product:', err);
  //       alert('Failed to delete product. Please try again.');
  //     }
  //   }
  // };

  const toggleStatus = async (id) => {
    try {
      const product = products.find(p => p.id === id);
      const newStatus = product.status === 'active' ? 'disabled' : 'active';
      
      // await authAPI.updateProductStatus(id, newStatus);
      setProducts(prev => prev.map(p => 
        p.id === id ? { ...p, status: newStatus } : p
      ));
    } catch (err) {
      console.error('Error updating product status:', err);
      alert('Failed to update product status. Please try again.');
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">Error loading products</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={fetchProducts}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Product Management</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-start sm:self-auto"
        >
          {showForm ? 'Hide Form' : 'Add New Product'}
        </button>
      </div>

      {/* Product Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-6">
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price *
                </label>
                <div className="flex">
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 text-black rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="flex-1 p-3 border text-black border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type *
                </label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight *
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SKU *
                </label>
                <input
                  type="number"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Details *
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm  font-medium text-gray-700 mb-2">
                Features *
              </label>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleArrayChange(index, e.target.value, 'features')}
                    className="flex-1 p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter feature"
                  />
                  {formData.features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField(index, 'features')}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField('features')}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                + Add Feature
              </button>
            </div>

            {/* FAQ  */}

             <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    FAQ *
  </label>

  {formData.features.map((faq, index) => (
    <div key={index} className="mb-4 space-y-2 border p-4 rounded-lg">
      <input
        type="text"
        placeholder="Enter question"
        value={faq.question}
        onChange={(e) => handleFAQChange(index, 'question', e.target.value)}
        className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <textarea
        placeholder="Enter answer"
        value={faq.answer}
        onChange={(e) => handleFAQChange(index, 'answer', e.target.value)}
        className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={3}
      />

      {formData.features.length > 1 && (
        <button
          type="button"
          onClick={() => removeFAQField(index)}
          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          <Trash2 className="h-4 w-4 inline-block mr-1" />
          Remove FAQ
        </button>
      )}
    </div>
  ))}

  <button
    type="button"
    onClick={addFAQField}
    className="text-blue-600 hover:text-blue-800 text-sm mt-2"
  >
    + Add FAQ
  </button>
</div>


            {/* Benefits */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Benefits *
              </label>
              {formData.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => handleArrayChange(index, e.target.value, 'benefits')}
                    className="flex-1 p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter benefit"
                  />
                  {formData.benefits.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayField(index, 'benefits')}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayField('benefits')}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                + Add Benefit
              </button>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Images * (Minimum 5 images, Maximum 10)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  <label className="cursor-pointer text-blue-600 hover:text-blue-500">
                    <span>Upload images</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="sr-only"
                       
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB each</p>
                </div>
              </div>

              {imageFiles.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {imageFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Image className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
              >
                {editingProduct ? 'Update Product' : 'Post Product'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Products List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Products ({products.length})</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type/Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.details.substring(0, 50)}...</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {product.currency} {product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.type}</div>
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleStatus(product.id)}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      {product.status === 'active' ? 'Disable' : 'Enable'}
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-700">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, products.length)} of {products.length} products
            </div>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`px-3 py-1 rounded ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
 