import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

export const ProductCard = React.memo(({ id, title, description, href, icon, isActive, onMouseOver, onMouseLeave }) => {
  return (
    <Link href={href}>
      <li
        className='relative p-6 cursor-pointer'
        onMouseOver={() => onMouseOver(id)}
        onMouseLeave={() => onMouseLeave(0)}
      >
        <div
          className={`absolute inset-0  bg-white rounded-lg shadow-card-shadow cursor-pointer hover:w-full transition-width duration-500 ease-in-out  ${
            isActive ? 'w-full' : 'w-[88%]'
          } shadow-card-shadow group hover:bg-secondary ${isActive ? 'bg-secondary' : 'bg-white'}`}
        />
        <div className='relative z-10'>
          <div className='flex items-center space-x-5'>
            <div className='flex justify-center flex-shrink-0 w-16'>
              <img className='' src={icon} alt={title} />
            </div>
            <div className='max-w-[235px] xl:max-w-[275px]'>
              <h1 className={`text-xl font-bold group-hover:text-white ${isActive ? 'text-white' : 'text-primary'}`}>
                {title}
              </h1>
              <p
                className={`text-sm13 group-hover:opacity-100 group-hover:text-white ${isActive && 'text-white'} ${
                  isActive ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {description}
              </p>
            </div>
            <div>
              <button
                type='button'
                className={`transform inline-flex items-center p-1 text-white border border-transparent shadow-sm rounded-2xl  group-hover:bg-white ${
                  isActive ? 'bg-white' : 'bg-secondary'
                }`}
              >
                <svg
                  className={`w-8 h-8 group-hover:text-secondary ${isActive ? 'text-secondary' : 'text-white'}`}
                  x-description='Heroicon name: solid/chevron-right'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
});

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

ProductCard.defaultProps = {};

export default ProductCard;
