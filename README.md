# namaste react

# parcel

- dev build
- local server
- HMR = hot Module replacement
- File Watching Algorithm -written in c++
- Caching - faster Builds
- Image optmization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential bundling - support older browser
- Diagnostic
- Error handling
- HTTPs
- Tree shaking = remove unuseful function
- Different dev and prod bundles

#namste food

/\*\*

- Header
- - Logo
- - Nav items
- Body
- -reasturants container
- -resstuaranst cards
- Header
- -Copyright
- -links
- -adderess
- -contact
-
-
-
- \*/

Two types of exports
-Defaultss export/imports

export default component;
import component from path;

-named export/import

export const component
import const component

# React hooks

(normal utility functions)
-useState()-superpowerful state variable in react
-useEffect()

//if no dependency array => useEffect is called on every render
//if dependency array is empty => useEffect is called on intial render (just once)
// if dependency array is (logbuttoon ) => called everytime logbutton is updated

two types of routing
-client side routing
-server side routing

-added different routes for different restaurants

test

//BUNDLING

//dynamic bundling
//chunking
//code splitting
//lazy loading
//on demand loading

// HIGHR ORDER COMPONENT
// input - restaurantcard => restaurantcardPromoted

// REDUX Toolkit
-install @reduxjs/toolit and rect redux
-Build our own store
-connect our store to our app
-slice(cartSlice)
-dispatch (action)
-selector(read)

//return {items : []} -- this new object wil replaced inside original state
//RTK - either Mutate the existing state or return a new state

#TYPES OF TESTING (developer){
1.unit Testing-checking one component in isolation
2.Integration Testing - Testing the integration of component of multiple component -eg searcing 3. End to End Testing - flow of moving
}

#SETTING UP TESTING
Install React Testiing Library
install jest
intall babel dependencies
bable.configl.js
config parcel file to  disable default babel tansilation
jest - npx create-jest 
jest -install  jsdom library 
__test__ --test folder
__ = dunder method
npm i -d babel-preset-react
include babel-preset-react inside babel config
install - npm i -D @testing-library/jest-dom