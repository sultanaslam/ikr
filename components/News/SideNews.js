import React, { Fragment } from 'react';
import Link from 'next/link';

const SideNews = ({ latest }) => (
  <div className='side-news'>
    {latest.map((v, i) => (
      <div
        key={i + v._id}
        className='side-news-card'
        style={{ background: '#ffffffbf', marginBottom: 10 }}
      >
        <Link href={`/news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}>
          <Fragment>
            <div className='overlay' />
            <img src={v.image} alt={v.name} />
          </Fragment>
        </Link>
        <Link href={`/news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}>
          <h3 className='p-10' style={{ padding: '5px 10px' }}>
            {v.heading}
          </h3>
        </Link>
      </div>
    ))}
    <style jsx>{`
      .side-news-card {
        position: relative;
      }
      .side-news-card img {
        width: 100%;
        position: relative;
      }
      .side-news-card h3 {
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        margin: 0;
        padding: 0 5px;
        color: #fff;
        z-index: 2;
      }
      .side-news-card .overlay {
        cursor: pointer;
        position: absolute;
        top: 0;
        height: 99%;
        width: 100%;
        background: #7579ff;
        background: linear-gradient(0deg, #000000, #ffffff00);
        transition: background-color 2s ease-out;
        z-index: 1;
        opacity: 0.8;
      }
      .side-news-card .overlay:hover {
        background: linear-gradient(0deg, #000000, #222222);
        transition: background-color 2s ease-in;
      }
    `}</style>
  </div>
);
export default SideNews;
