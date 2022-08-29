/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'src/pages/components/link';
import LogoSvg from 'src/pages/components/icons/logo';
import { styled, useTheme } from '@mui/material/styles'


const LogoStyle = styled('img')({
  right: 0,
  bottom: 0,
  height: 60,
  
})

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <LogoStyle src='/images/skkapd-logo-blue-small.png' alt="dropbox" />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
