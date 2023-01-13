import React from "react";

const NewsItem = (props) => {
     return (
          <>
               <div
                    className="card my-3"
                    style={{
                         Width: "18rem",
                         minHeight: "420px",
                         maxHeight: "420px",
                    }}
               >
                    <img
                         src={
                              !props.imageUrl
                                   ? "https://www.bing.com/ck/a?!&&p=3336a7fc2c2e1588JmltdHM9MTY2NjIyNDAwMCZpZ3VpZD0yNWI3Y2U1My1lMzA4LTZmNGQtMjg0My1kZmRiZTIxZTZlMWImaW5zaWQ9NTQ0Mw&ptn=3&hsh=3&fclid=25b7ce53-e308-6f4d-2843-dfdbe21e6e1b&u=a1L2ltYWdlcy9zZWFyY2g_cT1uZXdzK2RlZmF1bHQrcGljJmlkPUFBNkVDMkU2M0RCMEMyQzgyQ0MzM0IxRDAxMzAwQzk0NDM1ODhFNDkmRk9STT1JUUZSQkE&ntb=1"
                                   : props.imageUrl
                         }
                         className="card-img-top"
                         alt={props.title}
                         style={{ height: "180px" }}
                    />
                    <div className="card-body">
                         <h5 className="card-title">{props.title}...</h5>
                         <p className="card-text">{props.description}...</p>
                         <a
                              href={props.newsUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-primary"
                         >
                              Read More
                         </a>
                    </div>
               </div>
          </>
     );
};

export default NewsItem;
