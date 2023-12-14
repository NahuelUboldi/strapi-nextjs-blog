import Image from 'next/image';
import getCategoryColor from '@/helpers/get-category-color';
import styles from './style.module.scss';

function BlogDetails() {
  return (
    <div className='container pb-80'>
      <div className='row mb-50'>
        <div className='col col_9'>
          <div className={`h6 mb-20 c-${getCategoryColor('Product Reviews')}`}>
            Product Reviews
          </div>
          <h2>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra
          </h2>
        </div>
      </div>

      <Image
        className={`${styles.featuredImage} mb-50`}
        src='/img/01-lg.webp'
        alt='thumb'
        width='1280'
        height='387'
      />
      <div className='row'>
        <div className='col col_9'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            officia possimus reprehenderit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tempore rerum dicta tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            officia possimus reprehenderit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Natus doloribus fuga, cum eos officia,
            nesciunt, non beatae temporibus facere ipsa vel voluptatibus eaque
            dolores! Labore, recusandae! Odit architecto animi alias ducimus,
            assumenda illo fugit ullam quia veniam doloremque culpa suscipit,
            nihil quaerat, eligendi ratione deserunt explicabo sed expedita
            saepe natus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            officia possimus reprehenderit. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Rem omnis magnam praesentium vel
            asperiores distinctio consequuntur reprehenderit est ut cum
            perspiciatis aspernatur culpa quaerat labore, ipsam soluta dolorum
            tenetur molestiae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
