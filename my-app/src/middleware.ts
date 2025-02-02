import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url)) // redirect request.url with the homepage
    if(request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/about", request.url))
    }

    // Approcach 2 using conditional statements as listed above 
    // You can use response.write to not change the url in the browser  
    /**
     * 
     * 
     * 
     */
}
// Approcah 1
export const config = {
    matcher: "/profile" // only apply to the profile page
}


