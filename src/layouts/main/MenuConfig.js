import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';

// ----------------------------------------------------------------------
const link1 = '/#websection';
const baseUrl = window.location.origin.toString();
const url = baseUrl + link1;
const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: 'https://equityswap.io',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Features',
    path: url,
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Docs',
    path: 'https://docs.equityswap.io',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Resources',
    path: '#',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    children: [
      { title: 'Whitepaper', path: '#' },
      { title: 'Economics paper', path: '#' },
      { title: 'Token Metrics', path: '/tokenomics' },
      { title: 'Ecosystem', path: '/ecosystem' }
    ]
  },
  {
    title: 'Contact',
    path: '#footer',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  }
];

export default menuConfig;
