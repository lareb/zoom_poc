/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Text, Button } from 'theme-ui';
import SectionHeading from 'src/pages/components/section-heading';
import { LearnMore } from 'src/pages/components/link';

const data = [
  {
    id: 1,
    label: 'Medical and vision',
  },
  {
    id: 2,
    label: 'Life insurance',
  },
  {
    id: 3,
    label: '400(k) savings',
  },
  {
    id: 4,
    label: 'HSAs and FSAs',
  },
  {
    id: 5,
    label: 'Commuter benefits',
  },
  {
    id: 6,
    label: '529 college savings',
  },
];

const WhoYouAre = () => {
  return (
    <Box as="section" variant="section.WhoYouAre">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <Image src='/images/banner.png' alt="banner" width={600} />
          </Box>
          <Box sx={styles.illustration}>
            <Image src='/images/work-hard.png' alt="WhoYouAre" width={550} />
          </Box>

          <Box sx={styles.rightContent}>
            <Button variant="info">I am an Employer</Button>
          </Box>
          <Box sx={styles.illustration}>
            <Button variant="info">I am a Job Seeker</Button>
          </Box>
          
        </Box>
      </Container>
    </Box>
  );
};

export default WhoYouAre;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
    minHeight: [null, null, '70vh', '70vh', '70vh', '90vh'],
  },
  heading: {
    maxWidth: ['none', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', '24px', null, '36px', '31px', '35px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', null, null, '30px', null, null, '100%'],
      top: ['4px', '8px'],
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  learnMore: {
    mt: [4],
    ml: [20, null, null, 0],
    textAlign: [null, null, null, 'center', 'left'],
  },
  illustration: {
    ml: [0, 0, '30px', 0, 0],
    mt: ['50px', null, null, null, 0],
    minWidth: ['auto', null, null, null, null, '600px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
    },
  },
};
