import { Star } from '@mui/icons-material';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
];

const ITEM_HEIGHT = 48;

function Favorites({
  children,
  onClick,
  title,
  last = false
}: MenuOptionButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelection = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className={`hover:bg-[#4f5d73]/20 ${
        last ? 'rounded-b-2xl py-1 portrait:md:py-3' : ''
      }`}
    >
      <Button
        className='w-full py-3 landscape:sm:py-2 text-start
      px-2 font-roboto grid grid-cols-5 text-white portrait:font-sm'
        onClick={handleClick}
        startIcon={
          <Star style={{ color: 'rgb(79, 93, 115)' }} fontSize='medium' />
        }
      >
        <div className='grid col-span-1 h-full'>{children}</div>
        <p className='col-span-4 portrait:md:text-xl text-white font-roboto'>
          {title.toLowerCase()}
        </p>
      </Button>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleSelection}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            background: 'rgba(25, 24, 30, 2)'
          }
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={onClick}
            style={{ color: '#ffffff' }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Favorites;
