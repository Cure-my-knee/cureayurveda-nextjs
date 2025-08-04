 // app/admin/page.js

import React from 'react';
import AdminPage from './Adminpage';

export const metadata = {
  title: 'Admin Area - Vyapar Kranti',
  robots: 'noindex, nofollow',
};

export default function Admin() {
  return (
    <>
      <AdminPage />
    </>
  );
}
