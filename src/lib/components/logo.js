/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { styled, useTheme } from '@mui/material/styles'


const LogoStyle = styled('img')({
  right: 0,
  bottom: 0,
  height: 60,
  
})

export default function Logo({ isSticky, footer, ...props }) {
  return (
      <LogoStyle src='/images/skkapd-logo-blue-small.png' alt="dropbox" />
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
