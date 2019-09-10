import React from 'react';
import Link from 'next/link';

const SubMenuLinks = props => (
  <div className='content'>
    <div className='links'>
      <h2 style={{ color: props.isNews && 'darkred' }}>
        {props.isNews ? 'Latest News' : props.isJob ? 'Industry' : 'Class'}
      </h2>
      <div className='items mb-20'>
        {props.byClass.map(({ name, link }, i) => (
          <Link
            to={link}
            key={i + name}
            style={{ width: props.isNews && '100%' }}
          >
            <span>
              {name} {props.isJob || props.isNews ? '' : 'Class'}
            </span>
            <div className='baf'>
              <div className='border' />
            </div>
          </Link>
        ))}
      </div>
      <div className='m-10' />
      <h2 style={{ color: props.isNews && 'darkred' }}>
        {props.isNews ? 'Hot News' : props.isJob ? 'City' : 'Boards'}
      </h2>
      <div className='items'>
        {props.byBoard.map(({ name, link }, i) => (
          <Link
            to={link}
            key={i + name}
            style={{ width: props.isNews && '100%' }}
          >
            <p>
              {name} {props.isJob || props.isNews ? '' : 'Board'}
            </p>
            <div className='baf'>
              <div className='border' />
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div className={`info ${props.imageClass}`} />
  </div>
);

export default SubMenuLinks;
