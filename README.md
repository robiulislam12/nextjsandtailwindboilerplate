# Next Js and Tailwind CSS Boilerplate

## Welcome to my github profile.

- Note: Please download or clone this repo and delete **.git** folder

After Completing download open your terminal and run this code

        cd nextjsboilerplate
        
        npm i

After install all dependencies, run this command.

        npm run dev
        #or
        yarn dev

## Congratulations, your install is done. Now enjoy your development. 


- If You to remove all code, so delete **components and layouts** folder. after delete all this things, than go to the ***_app.js*** and copy below code and paste. 

```js 
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```
