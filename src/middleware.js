 import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Define public admin routes that anyone can access
  const publicAdminRoutes = ['/admin', '/admin/login'];
  
  // Check if the request is for protected admin routes
  if (pathname.startsWith('/admin') && !publicAdminRoutes.includes(pathname)) {
    // Get the token from cookies or headers
    const token = request.cookies.get('accessToken')?.value ||
                  request.headers.get('authorization')?.replace('Bearer ', '');
    
    // If no token, redirect to admin login
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Optional: Add token validation here
    // You might want to verify the token with your backend
    
    // If token exists, allow access
    return NextResponse.next();
  }
  
  // For non-admin routes or public admin routes, proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    // Add other protected routes here if needed
  ],
};