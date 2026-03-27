import "./App.css"; // Imports the CSS file for this component

function App() { // Creates a React component called App
  return ( // Starts the JSX that will be shown in the browser
    <div className="container mt-5">
      {/* container = Bootstrap layout class for centered responsive width
          mt-5 = Bootstrap class for top margin */}

      <div className="card p-4 shadow-sm">
        {/* card = Bootstrap card style
            p-4 = padding on all sides
            shadow-sm = small shadow */}

        <h1 className="mb-3">Weather App</h1>
        {/* h1 = main heading
            mb-3 = margin bottom */}

        <p className="mb-0">My React weather app is ready to build.</p>
        {/* p = paragraph text
            mb-0 = no bottom margin */}
      </div>
    </div>
  ); // Ends the JSX return
}

export default App; // Makes App available to other files