# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Firebase authentication
** Proccess to build project.
- Step 01: Create react project with router
- [React router](https://reactrouter.com/en/main/start/tutorial)
- Step 02: Config router
- Step 03: Create some components and show in view
- Step 04: Go to firebase website
- [firebase](https://firebase.google.com/)
- Step 05: Click On Getting Started
- [Getting Started](https://console.firebase.google.com/?_gl=1*r05zc0*_ga*MTcwMjk0ODMxOS4xNjk2NTU1Njgz*_ga_CW55HF8NVT*MTY5NjY2OTM4NS4xMC4xLjE2OTY2NjkzOTMuNTIuMC4w)
- Step 06: Click on Add Project
- Step 07: Set Project Name > Continue
- Disable __ Enable Google Analytics for this project
- Click on [Create Project] button > continue
- Step 08: Config firebase file 
- Initialize Firebase and export default app;
- Step 09:  Go to the component where is your [login button](login button)
- Step 10: Import ```JavaScript
    import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
    import app from '../../firebase/firebase.init';
```
- Step 11: Write code in Login component ```JavaScript 
const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const handleUserSingIn = ()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            const user= result.user;
            console.log(user);
        })
        .then((err)=>{
            console.log(err);
        })
    }

```
- Step 12: Go to firebase profile Dashboard and go to left hand sidebar > build > Authentication > Getting started 
- Step 13: Go to sign-in-method > click on google or any other platform by which you want to authenticate your login form. > enable > config your email > and finally click on save button.

- Step 13: Go to docs of firebase it's position in the top write corner of page.
- click on build menu > Authenticatin menu > click on web that's position leftsidebar 
- click on getting started
- initialized getAuth(); GoogleAuthProvider(), singInWithPopup()
