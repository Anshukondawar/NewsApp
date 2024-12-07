// import React from 'react'
// import './App.css'
// const NewsCard = ({item}) => {
//   return (
//     <div>
//         <ul>
//         {news.map(item => (
//           <li key={item.id}>
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
//             <img src={item.image} alt={item.title} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default NewsCard


import React from "react";
import "./App.css";

const NewsCard = ({ article }) => {
  return (
    <div>
      <li>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
        <img src={article.image} alt={article.title} />
      </li>
    </div>
  );
};

export default NewsCard;
