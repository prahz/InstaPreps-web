import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;

  // OLD LINK: http://instapreps.com?test=3816
  const testId = url.searchParams.get("test");

  if (testId) {
    return NextResponse.redirect(
      `https://instapreps.com/instapreps_mocktest/test?id=${testId}`,
      301
    );
  }

  return NextResponse.next();
}
