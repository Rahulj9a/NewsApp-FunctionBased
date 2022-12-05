import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
//<iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW">via GIPHY</a></p>

export class News extends Component {
     static defaultProps = {
          country: "in",
          pageSize: "9",
          category: "general",

     };
     static propTypes = {
          country: PropTypes.string,
          pageSize: PropTypes.string,
          category: PropTypes.string,
     };

     constructor(props) {
          super(props);
          this.state = {
               articles: [],
               loading: true,
               page: 1,
               totalResults: 0,
          };
          document.title = `NewsHub-${this.props.category}`;
          /* this.handlePrevClick = this.handlePrevClick.bind(this);
          this.handleNextClick = this.handleNextClick.bind(this); */
     }

     gettingData = async () => {
          this.props.setProgress(0)
          this.setState({page: this.state.page + 1 });
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          let data = await fetch(url);
          let parseData = await data.json();
          this.props.setProgress(50);
          this.setState({
               articles: parseData.articles,
               loading: false,
               totalResults: parseData.totalResults,
          });
          this.props.setProgress(100);
     };

     componentDidMount() {
          this.gettingData();
     }

     fetchMoreData = async () => {
          this.setState({ page: this.state.page + 1 });
           
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          let data = await fetch(url);
          let parseData = await data.json();
          this.setState({
               articles: this.state.articles.concat(parseData.articles),
               loading: false,
               totalResults: parseData.totalResults,
          });
     };
     /* async handlePrevClick() {
          this.gettingData(this.state.page - 1);
          this.setState((state) => ({
               page: state.page - 1,
          }));
     }

     async handleNextClick() {
          if (
               this.state.page + 1 <=
               Math.ceil(this.state.totalResults / this.props.pageSize)
          ) {
               this.gettingData(this.state.page + 1);
               this.setState((state) => ({
                    page: state.page + 1,
               }));
          }
     } */

     render() {
          /* if (!this.state.loading) { way1*/
          return (
               <>
                    <h2>Top Headlines - {`${this.props.category}`}</h2>
                    {this.state.loading&&<Loading/>}
                    <InfiniteScroll
                         dataLength={this.state.articles.length}
                         next={this.fetchMoreData}
                         hasMore={
                              this.state.articles.length !== this.state.totalResults
                         }
                         loader={<Loading />}
                    >
                         <div className="container my-3">
                              <div className="row">
                                   {this.state.articles.map((element) => {
                                        return (
                                             <div
                                                  className="col-md-4"
                                                  key={
                                                       element.url
                                                  } /* it is better to set key for eveery element in map to DOM  */
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
                                                       imageUrl={
                                                            element.urlToImage
                                                       }
                                                       newsUrl={element.url}
                                                  />
                                             </div>
                                        );
                                   })}
                              </div>
                         </div>
                    </InfiniteScroll>

                    {/* <div className="container d-flex justify-content-between">
                         <button
                              type="button"
                              className="btn btn-dark"
                              onClick={this.handlePrevClick}
                              disabled={this.state.page <= 1}
                         >
                              &larr; Previous Page
                         </button>
                         <button
                              type="button"
                              className="btn btn-dark"
                              onClick={this.handleNextClick}
                              disabled={
                                   this.state.page + 1 >
                                   Math.ceil(
                                        this.state.totalResults /
                                             this.props.pageSize,
                                   )
                              }
                         >
                              Next Page &rarr;
                         </button>
                    </div> */}
               </>
          );
          {
               /* } else {
               return (
                     <Loading/>
               );
          }    */
          }
     }
}

export default News;
