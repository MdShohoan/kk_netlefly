import React from 'react';
import { NextResponse } from 'next/server';

function middleware(request) {
  const newPath = new URL("/about", request.nextUrl.origin).toString();
  return NextResponse.redirect(newPath);
}

export default middleware;

export const config = {
  api: {
    bodyParser: false, // Disabling bodyParser as it's not needed for middleware
  },
  matcher: "/class/:path*",
};
