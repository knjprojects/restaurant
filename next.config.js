
module.exports = {
  /*env: {
    API_URL: dev ? 'http://localhost:3000/' : '/'
},*/
  images: {
  domains: [
    'cdn.sanity.io','assets.vercel.com','images.pexels.com','fakestoreapi.com','press.aboutamazon.com',
    "firebasestorage.googleapis.com",
    "platform-lookaside.fbsbx.com",
    'upload.wikimedia.org',
      'cdn-icons-png.flaticon.com',
    'i.ibb.co','static.dezeen.com'
  
],
  formats: ['image/avif', 'image/webp'],
},
  reactStrictMode: true,
experimental:{
	appDir:true,
},
swcMinify: true,
/*typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},*/
}
//i added images to make sure next/images work 
 //nextConfig
