import React, { Fragment } from 'react';
import Link from 'next/link';

const LatestNewsSmall = ({ latest }) => (
  <div className='three-news-box' style={{ marginTop: 0 }}>
    <div className='news-container'>
      {latest.length && (
        <div
          className='single-card card'
          style={{
            background: `url(${latest[0].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='overlay'>
            <Link
              href={`news-details/${latest[0]._id}-${latest[0].heading.replace(
                / /g,
                '-'
              )}`}
            >
              <h2>{latest[0].heading}</h2>
            </Link>
          </div>
        </div>
      )}
      <div className='hot-news'>
        {latest
          .filter((v, i) => i < 5 && i > 0)
          .map((v, i) => (
            <div
              key={i + v._id}
              className='card pt-5'
              style={{ background: '#ffffffbf' }}
            >
              <Link
                href={`news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}
              >
                <Fragment>
                  <img src={v.image} alt={v.name} />
                  <span className='category'>
                    {v.category && v.category.name}
                  </span>
                </Fragment>
              </Link>
            </div>
          ))}
      </div>
    </div>
    <style jsx>
      {`
        .news-container {
          display: flex;
        }
        .news-container .single-card {
          flex-basis: 50%;
          height: 405px;
        }
        .news-container .single-card h2 {
          margin: 0;
          color: #fff;
          padding: 10px;
        }
        .news-container .single-card h2:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .news-container .single-card .overlay {
          height: 100%;
          width: 100%;
          background: linear-gradient(0deg, #ffffff00, #000000);
        }
        .news-container .hot-news {
          flex-basis: 50%;
        }
        .news-container .hot-news .card {
          flex-basis: 49%;
        }
        .news-container .hot-news .card:nth-child(1),
        .news-container .hot-news .card:nth-child(4) {
          margin-left: 0.5%;
        }
        .news-container .hot-news .card {
          padding-bottom: 5px;
        }
        .news-container .hot-news .card:nth-child(n + 2) {
          padding-bottom: 0;
        }
        .news-container .hot-news .card img {
          cursor: pointer;
          width: 100%;
          height: 200px;
        }
        .news-container .hot-news .card .category {
          cursor: pointer;
          position: absolute;
          background: #ffffffaa;
          padding: 5px;
          font-weight: bold;
        }
      `}
    </style>
  </div>
);
export default LatestNewsSmall;
