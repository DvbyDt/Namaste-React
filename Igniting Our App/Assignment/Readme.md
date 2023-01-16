# Chapter 02 - Assignment - Igniting our App


### What is 'NPM' ?
- Our React application utilizes a lot packages and modules to perform different functionalities. The role of npm is basically to manage all these packages and contrary
to popular belief the full form of NPM is not 'Node Package Manager'. The more apt full form of 'npm' will be (if there was any) Node PM. This can be seen on npm's documentation
also. 
![image](https://user-images.githubusercontent.com/68496657/212459984-67ad9b5f-b242-462d-bc00-28116ccce0b8.png)


### What is Parcel/Webpack ? Why do we use it ?
- Parcel/ Webpack are bundlers we use in our React appliaction. Bundler basically is a **development tool** combines a lot of JS files into one single production ready file
which can be run or loaded into the browser. There are many bundlers like Parcel,Webpack,Vite etc.
The reason we are using bundler is because: 
1. It helps the developers to maintain relationship dependency in our project. Our packages or modules or files may be dependent on other files which in turn may be dependent on othe files. So, bundlers creates a dependency graph to keep a track of all the dependencies and that makes it easier for us.
2. It also helps us to run our code on older browsers which doesn't have the new changes and functionalities.
3. It also helps in optimizing code and reduce the size of a code files by mimifying them into a single file.
4. It also helps in Image optimization and rather assets optimization. So, that the media doesn't become the heavy part of our application.

### What is `.parcel-cache`?
- '.parcel-cache' file is generated when we build our application by using the command 'npx parcel build entrypoint_of_your_app'. Parcel does a lot of things like Hot Module Replacement(HMR),
TreeShaking, HTTPS on dev etc. To perform all the functionalities parcel requires some space in our memory and that's why it creates 'parcel-cache' file. So, when our project builds
for the first time at that point of time this file is created and it stores the information about of project so, that next time our project builds it doesn't 
have to re-parse re-analyze everything from scratch. This is one of the main reasons why Parcel is so fast.

### What is `npx` ? 
- 'npx' is the execution package present inside npm. Using npx you can execute any package that is present inside the npm registry. The reason we use npx is compared to 
'npm install' npx basically downloades the packages exxecutes it immediately and removes it from the memory so, that it doesn't clog the memory.

### What is difference between `dependencies` vs `devDependencies`?
- 'dependencies' are basically your project requires some files to function in a proper way and these files are inturn dependent on other files som this is basically 
dependencies. All the dependencies are specified in the package.json also with the basica information about our project. 
- 'devDependencies' there are some files in the package.json which are just required in the development phase of our project.So, these are called as devDependencies and
are denoted by the command -D or --save-dev.

### What is Tree Shaking ?
- Tree Shaking is done by our bundler (**in our case Parcel**). As our project imports and exports lot of files for functionalites. Our bundler basically identifes the unwanted code
and unused files and just removes them in order to make our build time faster. Parcel analyzes the imports and exports and removes the dead and unwanted code. This is
basically also called as 'dead code elimination'.

### What is Hot Module Replacement ?
- If we make change to a file Parcel automatically builds our project and reloads the browser to reflect the change. But in some cases it may not even reload the 
browser after a change because of HMR. The default behaviour of Parcel is after a change is made to a file it will reload the browser but in some cases even after a change
the project will build and there would be no page reload required for your change to reflect in the browser. Suppose if you are making changes in CSS file that will be
automatically reflected without any reloads. The main use of HMR is we can retain the application state.

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- **Image Optimization** : Images or media are one the heaviest files in our project but Parcel optimizes them. Parcel uses **transformer** to reduce the size,convert it to a differnt format and to  reduce the quality to reduce the file size All the things can be passed as parameters or configuration files. These optimizations can be lossy as well as lossless. But usually lossless optimizations are by default done in the production mode, the size of the files isn't reduced to much.
- **HTTPS on dev** : Sometimes we require our project to run using HTTPS and not HTTP on the devlopment environment. Parcel provides this functionality of using HTTPS on dev.We just have to specify while running our application: npx parcel index.html --https
- **Minification** : Parcel out of the box includes minifiers for HTML,CSS,JS and SVGs. Minification is basically dividing your files into smaller chunks by removing whitespace,renaming variables and many optimizations. Minification is by default enabled whenever you build your application. It uses tesers for JS,lightining CSS for CSS,HTMLnano for HTML and SVGgo for SVGs. You can also disable minification on build using the CLI.
- **Content Hashing**: Parcel provides various optimizations for Content Hashing,Brwoser hashing, CDN Hashing. Parcel associates a hash with all output filenames for lon term caching in the browser.So, when  the contents of the bundle changes the filename is updated with a new hash and the olderbrowser or CDN cache is marked as invalid. 
- **Caching** : Parcel builds everything and keeps it on the disk in a folder called '.parcel-cache'. So, if any file is changed now Parcel will just modify that particular file and not build the entire app it will just build the files that have changed since, last time. This significantly reduces our build time.

### What is `.gitignore` ? What should we add and not add into it ?
- '.gitgnore' is a file which accounts for the files that have to be ignored while pushing our changes to our github repo. All the content that is auto-generated like node_modules etc should
be put into it and the all the content that is user generated should not be put into it.

### What is the difference between `package.json` and `package-lock.json` ? 
- 'package.json' is a file that stores the information about the project and all the dependencies that have to be included in it. It maintains the configurations that npm requires to run itself kind of like metadata for our project.
- 'package-lock.json' is file that locks the excat dependency versions required by our project. It descibes what excat version of the dependency was installed in our system. This is also helpful for other devs to know in what excat version our project ran.

### Why should I not modify `package-lock.json` ?
- This file contains the excat version of the dependencies that have be used by our application. If you modify this the original version in which the app ran might throw some unexpected errors.

### What is `node_modules` ? Is it a good idea to push that on git ?
- node_modules is the folder which contains all the dependencies which are required in your project directly or as dependency of dependency or transitive dependency. No, it's not a good idea to push it on git because of the size of it and also the server itself will generate it's own node_modules based on package.json and package-lock.json. So, whenever you do npm install it will install all the required node_modules from web to your local machine.

### What is the `dist` folder ?
- dist folder basically contains the optimized and minified files that we have created or we use in our project. It removes the whitespaces and also renames the 
variables in order to create an optimized file. It is created during the build process when we use the command: npx parcel index.html build. It is created in our production build.

### What is `browserlists` ? 
- browserlists is a tool which ensures our application runs in the browser for which the condition is specified inside the brwoserlist. Suppose inside browserlists
I specify "last 2 Chrom versions" so, it will definitely run on the last 2 chrome versions but might or might not work on other browsers. The reason we need it because we write our
code using the latest ES6 syntax but we might want to run it in the browser which doesn't have the latest syntax so, browserlist helps us in that regard because our bundlers
creates separate bundles for the browsers they want to support. If we want to support older browsers then it will create a legacy build which will include all the polyfills without ES6 support and
if we want to support the newer browsers it will create a modern bundles which will support the newer browsers.

### ^ - caret and ~ - tilda ?
The packages in our package.json file have a version associated with them and that version's syntax is like Major.Minor.Patch for example 2.3.1. 
- Tilda notation is used to approximately make the version equal to the latest version. It works on the patches and will update all the future patch version without incrementing the major and minor versions. Patches are nothing but small bug fixes in the dependency or pacakges. Let's suppose the version you have is 2.3.1 so, using tilde notation it will be approaximately equal to 2.3.^ any upcoming patch versions.
- ^ caret notation basically works on the Minor and patches. It basically makes your package compatible with the latest version.It will increment your minor and patch version but not your major version. Suppose if you have a package version 2.3.1 so, using caret notation it will be equivalent to all further Minor and patch versions like 2.^.^ .









