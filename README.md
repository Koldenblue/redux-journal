# Redux Journal

![image](https://img.shields.io/badge/license-MIT%20License-green)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#installation">Installation</a>
3. <a href="#discussion">Code Discussion</a>
4. <a href="#contributions">Contributions</a>
5. <a href="#license">License</a>
6. <a href="#questions">Issues and Questions</a>
<hr><h3 id='description'>Description</h3>
The <a href='https://dashboard.heroku.com/apps/redux-journal'>deployed website</a> is a simple journal which demonstrates the use of React with the Redux library, as well as a non-relational database through MongoDB. 

The app is simple in its functionality. Users may write journal entries, then store and delete them. On the front-end, React is used to present the components that make up the user interface. The Redux library is used as well for UI bindings. For example, the Redux store is used to store dark/light themes as a global state. This state is passed down to all props. Redux is also used to provide global functions such as api calls to UI elements.

On the back-end, MongoDB is used to store user journal entries. HTML routing is accomplished with react-router-dom. Express.js is used to route api and database functions. 

<h3 id='discussion'>Code Discussion</h3>
There are two major advantages to Redux. One is the ease of storage of state variables in the Redux store. These state variables in the Redux store are akin to global variables. This global state is easily accessible by all props. The second advantage to Redux is in debugging. Changes to and the history of the Redux store state are easily visible, using the Redux browser extension. Furthermore, state changes are rewindable, recordable, and replayable - all very useful functionality for debugging purposes.

For an app of this small scale, Redux may not be necessary. The number of components is relatively small, and likewise there is only small advantage to having a global Redux store of state and functions. However, with additional added functionality and size, Redux can start to show its advantage in terms of ease of programming. For example, Redux may pass a globally needed variable such as the user authentication state to all components. Redux can also be used to lessen the complication of prop drilling. In this app, the dark/light theme state is stored in the global Redux store. The alternative without using Redux would be to have the dark/light state as part of a higher order component, and then passing that state down to every single component through props. The advantage of a global store becomes apparent here - the larger the app becomes, the more complicated it becomes to have to pass down a single needed state to every component through props. The advantage of Redux shows itself through easily accessible global state and associated debugging functionality. 

<h3 id='installation'>Installation</h3>
Simply visit the deployed website for a quick demonstration. Alternatively, if cloning this repository, necessary packages can be installed in a terminal running Node.js by using the command 'npm install'. The app can then be run in a browser, at localhost:3000, by using the command 'npm start'.

<h3 id='contributions'>Contributions</h3>
Contact the author through Github or through email.

<h3 id='license'>License</h3>
This project is licensed under the MIT License.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions may be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>
