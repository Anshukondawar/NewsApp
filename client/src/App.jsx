


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NewsCard from "./NewsCard";
import { useSwipeable } from "react-swipeable";


function App() {
  const [news, setNews] = useState([]);
  const [currIdx, setCurrIdx] = useState(0); // Start with the first news item

  useEffect(() => {
    // Fetching data from Express API
    axios
      .get("http://localhost:5000/api/news")
      .then((response) => {
        setNews(response.data); // Load news articles into state
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  // Swipe Handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrIdx((prev) => Math.min(prev + 1, news.length - 1)),
    onSwipedRight: () => setCurrIdx((prev) => Math.max(prev - 1, 0)),
  });

  return (
    <div className="App">
      <h1>News Articles</h1>
      <div {...swipeHandlers}>
        {news.length > 0 && <NewsCard article={news[currIdx]} />} {/* Display current article */}
      </div>
      <div className="pagination">
        {news.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currIdx ? "active" : ""}`}
            onClick={() => setCurrIdx(index)} // Change current index
          />
        ))}
      </div>
    </div>
  );
}

export default App;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ReactSwipe from 'react-swipe';
// import './App.css';
// import NewsCard from './NewsCard';

// function App() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/news')
//       .then(response => {
//         setNews(response.data);
//       })
//       .catch(err => console.error("Error fetching news:", err));
//   }, []);

//   return (
//     <div className="App">
//       <h1>News Articles</h1>
//       {news.length > 0 && (
//         <ReactSwipe
//           className="carousel"
//           swipeOptions={{
//             continuous: true,
//             stopPropagation: true,
//             speed: 300,
//           }}
//         >
//           {news.map((article) => (
//             <NewsCard  article={article} />
//           ))}
//         </ReactSwipe>
        
//       )}
       
//     </div>
//   );
// }
// export default App;
