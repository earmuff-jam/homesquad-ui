import { KeyboardArrowDownRounded } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useGetGroupTypesQuery } from '../../services/dashboard';

export default function ViewGroupType({ selectedGroupType, setSelectedGroupType }) {
  const { data: groupItems = [] } = useGetGroupTypesQuery();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelection = (ev) => {
    setSelectedGroupType(ev);
    handleClose();
  };

  return (
    <>
      <Box>
        <Button variant="contained" disableElevation onClick={handleClick} endIcon={<KeyboardArrowDownRounded />}>
          Select Group
        </Button>
      </Box>
      <Typography variant="caption" fontStyle={'italic'}>
        Associated with {selectedGroupType?.name}
      </Typography>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {groupItems.map((v) => (
          <MenuItem key={v.id} onClick={() => handleSelection(v)}>
            {v.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
