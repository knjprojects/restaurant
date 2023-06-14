
module.exports = {

  env:{
    sanityID:'j5s8b2yh',
    sanitySet:'production',
    //is token necessary??
    sanityToken:'sk1Kn6gaVtbXHjaxMac46019jqIW3T4gPkojIS6WCmLoGZwHr2udTlpdoTsvwtns76Sw8Bg8We3AuG688',
    wixAccessToken:''
    /**NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=mu4mgggn
NEXT_PUBLIC_SANITY_API_TOKEN=skqa7ly6x0wcySR6D949tjKzTFpStJsLGQcPnDGUMYXYFlSKzqEZ6SriTfuOHQJj3JjRSOGYudHgNz3P2cwil81HQh7srOxlOERUYuFZ37o655PP80dJXc4tbY3e1FYl0ddfLZGKP5ricntd1fKe4c5SJUO1fF6a9eVxazEj8yZ1prXWvlIb
NEXT_PUBLIC_FACEBOOK_CLIENT_ID=508709211103356
NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET=44fb177cddb3011b68b74e0fef99bee0
NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_RAPID_YTAPI_KEY=4dbc6fc3e0mshf8d6ef2f69cd271p16f0f3jsn3ca073a064c0
NEXT_PUBLIC_SERPAPI_API_KEY=27e0f3ede092ef2d52d058abad9948d0aa81c3269687a3d06a90213335e656cb
NEXT_PUBLIC_GIPHY_API_KEY=qGhoCsSFm3NA7Ndj5eN4akEfWJ2uoAMh
NEXT_PUBLIC_BUILDER_API_KEY=f46b82840ea5451fa709490fd72fa2cc
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCo1OokU_H0K3RiLyqBGsqr_l6lay6W3CE
NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyD8-BYTtdWCxO7qCamQG8Yr90wGYcMrrGQ
NEXT_PUBLIC_GOOGLE_API_CLIENT_ID=278593027698-5afo3eckt95aud897grifi8rm6j54e26.apps.googleusercontent.com
NEXT_PUBLIC_GOOGLE_API_CLIENT_SECRET=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
NEXT_PUBLIC_SERVER_DOMAIN='http://localhost:3000' */
  },
  images: {
    domains: [
    'cdn.sanity.io','assets.vercel.com','images.pexels.com','fakestoreapi.com','press.aboutamazon.com',
    "firebasestorage.googleapis.com",
    "platform-lookaside.fbsbx.com",
    'upload.wikimedia.org',
      'cdn-icons-png.flaticon.com',
    'i.ibb.co','static.dezeen.com','i.pinimg.com'

    ],
  formats: ['image/avif', 'image/webp'],
  },

 swcMinify: true,
 reactStrictMode: true,
}







  /*env: {
  API_URL: dev ? 'http://localhost:3000/' : '/'
  },*/
 
  /*experimental:{
	  appDir:true,mot needed anymore
  },*/
  
  /*typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
    ignoreBuildErrors: true,
    },*/


