/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Button, Container } from 'theme-ui';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SectionHeading from 'src/lib/components/section-heading';
import BlogPost from 'src/lib/components/cards/blog-post';


const data = [
  {
    id: 1,
    thumb: '/images/blog/1.png',
    commentCount: 22,
    link: '/meeting',
    title: `Acoustic guitar class for beginners`,
  },
  {
    id: 2,
    thumb: '/images/blog/2.png',
    commentCount: 15,
    link: '/meeting',
    title: `Become a professional drummer with Jack Neil`,
  },
  {
    id: 3,
    thumb: '/images/blog/3.png',
    commentCount: 18,
    link: '/meeting',
    title: `Katthakk in 45 days, Step up with Manisha`,
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: 'unslick',
    },
  ],
};

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section} variant="section.blog">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Popular Music classes from the experts"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click."
        />
        <Slider sx={styles.grid} {...settings}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  heading: {
    mb: [30, 30, 30, 50, 60],
    maxWidth: [300, 300, 660, 500, null, 'none'],
    h2: {
      fontSize: ['24px', '24px', '24px', '32px', null, null, '40px'],
    },
    p: {
      lineHeight: [2.48],
      maxWidth: [520],
      m: ['10px auto 0'],
    },
  },
  grid: {
    gap: 30,
    display: ['grid', null, null, 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};
