import React from 'react';
import NewsSearcher from '../../components/components_news/news_searcher/NewsSearcher';
import NewsCarts from '../../components/components_news/news_carts/NewsCarts';

const News = () => {
    return (
        <div className=''>
            <div className="">
                <NewsSearcher />
                <NewsCarts />
            </div>
        </div>
    );
}

export default News;
