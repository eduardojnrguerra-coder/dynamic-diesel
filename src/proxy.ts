import { NextResponse, type NextRequest } from "next/server";

const exactCaseLegacyRedirects = new Map([
  ["/Services", "/services"],
  ["/Services/", "/services"],
  ["/Services/Diesel-Pumps-and-Injectors", "/services/diesel-pumps-and-injectors"],
  ["/Services/Diesel-Pumps-and-Injectors/", "/services/diesel-pumps-and-injectors"],
]);

export function proxy(request: NextRequest) {
  const destination = exactCaseLegacyRedirects.get(request.nextUrl.pathname);

  if (!destination) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 301);
}
