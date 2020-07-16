## Basic React Scaffold:
The goal of this exercise is scaffold out a basic react project using webpack.
___

As UI engineers, we need to take into account several parameters during our builds and deployments. Over a piece of software's lifespan it's common to outgrow basic webpack configurations. It is important to account for the following:

1. Deployments into prexisting software infrastructures
2. Toggling features per client or environment
3. The size of the codebase and the rate at which refactors take place,
4. Supporting new polyfills and deprecating old ones

Due to these factors a successful front end engineer should have a solid grasp of node.js and webpack

**The following is a spec checklist for our desired functionality:**
- [ ] Compile Javascript files that may contain JSX and polyfill your favorite JS features
- [ ] Compile .scss files and autoprefix CSS3/CSS4 features
- [ ] Demonstrate its functionality by creating two basic javascript (React) and Sass files, and allow webpack to compile them
  - These files can look and behave however you want them to - a basic header tag with minimal styling is sufficient
- [ ] When building for production, include an h1 tag in your JSX that states that the app is currently running in production
- [ ] When compiling in development mode, the same h1 tag should read "This app is running in development mode"

**A few things to keep in mind during this exercise:**

1. For the sake of brevity there is no need to compile images of any kind or polyfill old browsers - the goal is to simply demonstrate some basic webpack functionality without the help of tools like Create React App, Yeoman, etc.
2. During a production build it is nice to see optimized files
3. You will get bonus points for lazy loaded chunks