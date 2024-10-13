import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country: "in",
        pagesize: 5
    }

    static propTypes = {
        county: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
    }

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32333d8f5c8544b2b99164598f5726d5&page=1&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
        this.props.setProgress(100);
    }

    handleNext = async () => {
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32333d8f5c8544b2b99164598f5726d5&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    handlePrevious = async () => {
        console.log("p");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32333d8f5c8544b2b99164598f5726d5&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=32333d8f5c8544b2b99164598f5726d5&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
        
    };

    render() {
        console.log("render");
        return (
            <div className='px-24 py-12 space-y-6'>
                <h1 className='text-3xl font-semibold'>NewsNinja - Top Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    // loader={<h4>Loading...</h4>}
                >
                    <div className='grid grid-cols-3 gap-6 '>
                        {this.state.articles.map((element) => {
                            return <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} className='col-span-1 transition-all hover:scale-105' />

                        })}
                    </div>
                </InfiniteScroll>
                {/* <div className='flex justify-between items-center'>
                    <button disabled={this.state.page <= 1} className=' px-5 py-3 border rounded-md bg-blue-600 text-white hover:bg-blue-800 disabled:bg-blue-300' onClick={this.handlePrevious}>&larr; Previous</button>
                    <p className=' text-slate-600'>Page no. {this.state.page}</p>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className=' px-5 py-3 border rounded-md bg-blue-600 text-white hover:bg-blue-800 disabled:bg-blue-300' onClick={this.handleNext}>Next &rarr;</button>
                </div> */}
            </div >
        )
    }
}

export default News
