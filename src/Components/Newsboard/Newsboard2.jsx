import React, { useEffect, useState } from "react";
import Newsitem from "../Newsitem/Newsitem";

const Newsboard = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${
            props.catagory
          }&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles || []); // Fallback to an empty array if undefined
      } catch (error) {
        console.error("Error fetching data:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, [props.catagory]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {articles?.length > 0 ? (
          articles.map((news, index) => (
            <Newsitem
              key={index}
              title={news.title || "No Title Available"}
              description={news.description || "No Description Available"}
              src={news.urlToImage || "https://via.placeholder.com/150"}
              url={news.url}
            />
          ))
        ) : (
          <p> ...</p>
        )}
      </div>
    </div>
  );
};

export default Newsboard;
