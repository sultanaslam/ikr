import React from 'react';
import Link from 'next/link';

const LatestNewsSmall = ({ latest }) => (
  <div className='three-news-box'>
    <div className='news-container'>
      <div className='hot-news'>
        {latest
          .filter((v, i) => i < 3)
          .map((v, i) => (
            <div
              key={i + v._id}
              className='card pt-5'
              style={{ background: '#ffffffbf', paddingBottom: 10 }}
            >
              <Link
                href={`news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}
              >
                <img src={v.image} alt={v.name} />
              </Link>
              <Link
                href={`news-details/${v._id}-${v.heading.replace(/ /g, '-')}`}
              >
                <h3 className='p-10' style={{ padding: '5px 10px' }}>
                  {v.heading.length < 63
                    ? v.heading
                    : v.heading.slice(0, 55) + '...'}
                </h3>
              </Link>
              <p className='p-10'>
                {v.info.length < 90 ? v.info : v.info.slice(0, 80) + '...'}
              </p>
              <span className='p-10'>
                {v.category && (
                  <Link
                    href={`news-details/${v._id}-${v.heading.replace(
                      / /g,
                      '-'
                    )}`}
                    key={i + v._id}
                  >
                    <i className='news-tag'>
                      {v.category.name.slice(0, v.category.name.indexOf(' '))}
                    </i>
                  </Link>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  </div>
);
export default LatestNewsSmall;
