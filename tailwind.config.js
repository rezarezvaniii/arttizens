/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "IRANSansX-Black" : "IRANSansX-Black",
        "IRANSansX-Bold" : "IRANSansX-Bold",
        "IRANSansX-DemiBold" : "IRANSansX-DemiBold",
        "IRANSansX-ExtraBold": "IRANSansX-ExtraBold" ,
        "IRANSansX-Light" : "IRANSansX-Light" ,
        "IRANSansX-Medium" : "IRANSansX-Medium" ,
        "IRANSansX-Regular" : "IRANSansX-Regular" ,
        "IRANSansX-Thin" : "IRANSansX-Thin" ,
      }
    },
  },
  plugins: [],
}