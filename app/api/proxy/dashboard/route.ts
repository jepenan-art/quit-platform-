import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const isAuth = false;

  // Check if user is authenticated
  if (!isAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If authenticated, continue to the dashboard
  return NextResponse.next();
}

export function POST(request: NextRequest) {
  const isAuth = false;

  if (!isAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
