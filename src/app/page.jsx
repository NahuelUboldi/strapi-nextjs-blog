import Card from '@/components/card/card';
import { IconTypes } from '@/components/button/button';

function Home() {
  return (
    <>
      <div className='container pb-80'>
        <Card
          label='Product Reviews'
          title='Class aptent taciti sociosqu ad litora torquent per conubia nostra'
          summary='Mauris interdum felics lacus. Praesent nulla libero, vulputate ut lorem ace, sollicitudin fringilla velit. Quisque velit elit.'
          href='#'
          btnIcon={IconTypes.ARROW_RIGHT}
          className='mb-30'
        />

        <div className='row'>
          <div className='col col_4 m-mw-100'>
            <Card
              label='Opinions'
              title='Class aptent taciti sociosqu ad litora torquent per conubia nostra'
              summary='Mauris interdum felics lacus. Praesent nulla libero, vulputate ut lorem ace, sollicitudin fringilla velit. Quisque velit elit.'
              href='#'
              btnIcon={IconTypes.ARROW_RIGHT}
            />
          </div>
          <div className='col col_4 m-mw-100'>
            <Card
              label='Product Reviews'
              title='Class aptent taciti sociosqu ad litora torquent per conubia nostra'
              summary='Mauris interdum felics lacus. Praesent nulla libero, vulputate ut lorem ace, sollicitudin fringilla velit. Quisque velit elit.'
              href='#'
              btnIcon={IconTypes.ARROW_RIGHT}
            />
          </div>
          <div className='col col_4 m-mw-100'>
            <Card
              label='Travel Guides'
              title='Class aptent taciti sociosqu ad litora torquent per conubia nostra'
              summary='Mauris interdum felics lacus. Praesent nulla libero, vulputate ut lorem ace, sollicitudin fringilla velit. Quisque velit elit.'
              href='#'
              btnIcon={IconTypes.ARROW_RIGHT}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
