// កូដកែសម្រួលសម្រាប់ធានាដំណើរការដោយគ្មានបញ្ហាជាមួយប្រព័ន្ធ Compiler
import { NextResponse } from 'next/server';

export function middleware(request) {
  // បន្តដំណើរការជាធម្មតា (Pass-through) ដោយគ្មានការរំខាន
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
