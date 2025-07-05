// app/admin/layout.js

import { AdminAuthProvider } from "@/contexts/AdminAuthContext";

 

export default function AdminLayout({ children }) {
  return (
    <AdminAuthProvider>
      {children}
    </AdminAuthProvider>
  );
}