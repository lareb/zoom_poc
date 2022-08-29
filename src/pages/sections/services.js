/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'src/pages/components/section-heading';
import Feature from 'src/pages/components/cards/feature';

import individual from 'public/images/icons/individual.png';
import team from 'public/images/icons/team.png';
import org from 'public/images/icons/org.png';

const data = [
  {
    id: 1,
    icon: '/images/icons/individual.png',
    title: 'Hire Individuals',
    description: `Reach professionals with just the right skills and experience.`,
  },
  {
    id: 2,
    icon: '/images/icons/team.png',
    title: 'Hire A Team',
    description: `Are you looking for a team with just the right and demanding skillsets, join now.`,
  },
  {
    id: 3,
    icon: '/images/icons/org.png',
    title: 'Analyze the Trend',
    description: `Analyze the trend before targeting the talent, Skapp'd rich data will help you to target the best talent in the industry.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Great organization run with great talent"
          description="Build an incredible workplace and grow your business with Skkap's all-in-one platform with amazing talent."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
