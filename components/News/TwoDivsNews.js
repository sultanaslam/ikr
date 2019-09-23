import React from 'react';
import Link from 'next/link';

export const TwoDivsNews = ({ data }) => (
  <div className='international-news'>
    <h2 className='h2 text-center'>
      <Link href={'/news/5d62832498672e34b4edc7ea-international-news'}>
        International News
      </Link>
    </h2>
    <div className='news-container'>
      <div className='hot-news'>
        {data
          .filter((v, i) => i < 2)
          .map((v, i) => (
            <div className='card box-shadow bd-t-pink' key={i + v._id}>
              <Link
                href={`/news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}
              >
                <h3 className='p-10 theme-color'>
                  {v.heading.length < 75
                    ? v.heading
                    : v.heading.slice(0, 67) + '...'}
                </h3>
              </Link>
              <Link
                href={`/news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}
              >
                <img src={v.image} alt={v.name} />
              </Link>
              <p className='p-10'>
                {v.info.length < 100 ? v.info : v.info.slice(0, 95) + '...'}
              </p>
              <div className='p-10 text-right'>
                <Link
                  href={`/news-details/${v._id}-${v.heading.replace(
                    / /g,
                    '-'
                  )}`}
                  key={i + v._id}
                >
                  <span className=' grey-link'>Read Details</span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
    <style jsx>{`
      .international-news {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
      }
      .international-news .hot-news {
        display: flex;
      }
      @media screen and (max-width: 768px) {
        .international-news .hot-news {
          flex-direction: column;
        }
      }
      .international-news .hot-news .card {
        flex-basis: 49%;
        background: #fff;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 3px;
      }
      .international-news .hot-news .card:nth-child(1) {
        margin-right: 1%;
      }
      .international-news .hot-news .card:nth-child(2) {
        margin-left: 1%;
      }
      @media screen and (max-width: 768px) {
        .international-news .hot-news .card {
          flex-basis: 100%;
          margin-bottom: 5px;
        }
      }
      .international-news .hot-news .card p {
        margin: 0;
        height: 40px;
        overflow: hidden;
      }
      .international-news .hot-news .card h3 {
        padding-top: 10px;
        padding-bottom: 10px;
        min-height: 45px;
        cursor: pointer;
      }
      .international-news .hot-news .card img {
        width: 100%;
        height: 300px;
        cursor: pointer;
      }
      .international-news .hot-news .card img:hover {
        -webkit-filter: contrast(1.1);
        filter: contrast(1.1);
        -webkit-filter: brightness(1.2);
        filter: brightness(1.2);
      }
      @media screen and (max-width: 768px) {
        .international-news .hot-news .card img {
          height: auto;
        }
      }
      .grey-link {
        color: grey;
      }
      .grey-link:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default TwoDivsNews;
