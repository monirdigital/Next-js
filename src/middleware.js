export function middleware(){
    console.log("I am middleware")
}

export const config={
    matcher:['/api/:path*']
}