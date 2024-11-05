
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import "./../public/styles.css"; // Also fixed the path for the styles

const container = document.getElementById("root"); 
const root = createRoot(container);
root.render(<App />,root);

// import React from "react";
// import ReactDOM from "react-dom";



//ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
