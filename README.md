# Birthdays app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Getting started

- Download the project as a zip and extract it or fork the project.
- Open you terminal of choice in the root of the project
- Install the packages by running `npm i`
- Then run `npm run start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### To run the tests

- Open a terminal and run `npm test`

### To run the cypress tests

- In one terminal run `npm run start`
- In another terminal run `npm run e2e:test`
- Then once the Cypress Test Runner has launched select the test to run.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run e2e:test`

Launches the Cypress Test Runner. Clicking on a test from the runner will launch a browser and will execute the test.

**Note: `npm run start` must also be running in a separate terminal**

## Technical choices

- I chose to use TailwindCSS for the styling as it is quick and easy to use and provides consistensy across the app.
- I added in custom hooks so that should another dev continue work on this project, they would be able to reuse the logic in their own components easily. It also reduced the amount of code in my home component, making it easier to read and maintain.
- I used a library to sort the data instead of writing one from scratch. This saved me a significant amount of time which I used to build out the rest of my app more. The array sort library is used by millions so I knew it had been throroughly tested, so I wouldn't need to spend time writing one myself. I checked the code breifly and found that it has a time complexity of O(n) and a space complexity of O(1), something that I would not be able to improve.
- I would have used TS to get the benefit of static type checking. However, I have never used it in the context of React before, so I decided it would be too risky to use for the first time in a coding interview.
- Same scenario with Graph QL. I think it is really cool, and my app would have benefitted by having more targeted data retrieval, but I went with REST as that is what I am familiar with.


## Trade-offs

- Pagination or ordering. I had to decide whether I should prioritise fast data retrieval or whether the data should be sorted (and have slow retrieval) This was becuase the API did not allow for server-side sorting, so I knew I would have to do it on the client side. Howeveer, this meant that I would not be able to implement a load more pagination pattern, which would allow for a shorter loading time. I went with ordering because it was specified in the requirements.
- Due to the limitations of the API, there is no option to search for a user by their uuid. 
If there was this option, I would have modified the details url to include a id parameter, so that the details page for a spesific user could be accessed.

## Further work

- Dark mode theme.
- State management system so that on return to the home view, the data isn't fetched again. Should only be fetched once per user session.
- Sorting and filtering options.
- Additionals tests. Tidy up and complete the user-card snapshot test. More snapshot tests for each of the components. A test for the useFetch hook. E2E tests for the unhappy path.
- Add a router guard to the details page to prevent it from being directly accessed while data is being passed to it from the card component.
- Tidy up the initial rendering of the home page. It takes a moment to sort the users so just an empty component is displayed, when it needs to show the spinner. (Ran out of time to fix this)