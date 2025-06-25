## LMS  frontend
### setup instruction 
## git clone 
... 

git https://github.com/Suraj-Nagar/lms-frontend.git
...
 2. move into the directory
...
cd lms-frontend

...

3.install dependencies
...

npm  install

...

4.run the server
...
 npm run dev
 ...

5. install tailwindcss

...
tailwindcss link https://tailwindcss.com/docs/installation/using-vite
...
6. install all required dependencies
...
> npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwind/line-clamp
...



### configure auto import sort eslint  
1. install simple import sort   
```
npm i -D eslint-plugin-simple-import-sort

 ```
2.Add rule in eslint.cjs 
"simple-import-sort/imports":'error',

3. add simple-import-sort plugin in esint.cjss

```
    plugins:[ 'simple-import-sort':simpleImportSort,]
```

