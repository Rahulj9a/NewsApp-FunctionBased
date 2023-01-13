import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
//<iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW">via GIPHY</a></p>

const News = (props) => {
     const [articles, setarticles] = useState([]);
     const [loading, setloading] = useState(true);
     const [page, setpage] = useState(1);
     const [totalResults, settotalResults] = useState(0);
     document.title = `NewsHub-${props.category}`;

     const gettingData = async () => {
          props.setProgress(0);
          setpage(page + 1);
          let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
          let data = await fetch(url);
          let parseData = await data.json();
          props.setProgress(50);
          setarticles(parseData.articles);
          setloading(false);
          settotalResults(parseData.totalResults);

          props.setProgress(100);
     };

     useEffect(() => {
          gettingData();
     }, []);

     const fetchMoreData = async () => {
          setpage(page + 1);

          let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=popularity&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
          let data = await fetch(url);
          let parseData = await data.json();
          setarticles(articles.concat(parseData.articles));
          setloading(false);
          settotalResults(parseData.totalResults);
     };

     return (
          <>
               <h2
                    style={{ margin: "90px 0px 0px 0px" }}
                    className="text-center"
               >
                    Top Headlines - {`${props.category}`}
               </h2>
               {loading && <Loading />}
               <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading />}
               >
                    <div className="container my-3">
                         <div className="row">
                              {articles.map((element) => {
                                   return (
                                        <div
                                             className="col-md-4"
                                             key={element.url}
                                        >
                                             <NewsItem
                                                  title={
                                                       element.title
                                                            ? element.title.slice(
                                                                   0,
                                                                   45,
                                                              )
                                                            : ""
                                                  }
                                                  description={
                                                       element.description
                                                            ? element.description.slice(
                                                                   0,
                                                                   88,
                                                              )
                                                            : ""
                                                  }
                                                  imageUrl={element.urlToImage}
                                                  newsUrl={element.url}
                                             />
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               </InfiniteScroll>
          </>
     );

    
};
 News.defaultProps = {
      country: "in",
      pageSize: "9",
      category: "general",
 };
 News.propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.string,
      category: PropTypes.string,
 };

export default News;
