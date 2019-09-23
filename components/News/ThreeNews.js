import React from 'react';
import Link from 'next/link';

export const ThreeNews = ({ data, link, heading }) => (
  <div className='three-news-box'>
    <h2 className='h2 text-center'>
      <Link href={link}>{heading}</Link>
    </h2>
    <div className='news-container'>
      <div className='hot-news'>
        {data
          .filter((v, i) => i < 3)
          .map((v, i) => (
            <div className='card box-shadow bd-t-pink' key={i + v._id}>
              <Link
                href={`/news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}
              >
                <h3 className='p-10 theme-color'>
                  {v.heading.length < 63
                    ? v.heading
                    : v.heading.slice(0, 55) + '...'}
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
                >
                  <button className='detail-news-btn'>Read Details</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default ThreeNews;
