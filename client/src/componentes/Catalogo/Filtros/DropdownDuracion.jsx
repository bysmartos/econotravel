import * as React from 'react';
import { Button, Box, Menu, MenuItem } from '@mui/material';

function DropdownDuracion({filterer3}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    filterer3(event.target.textContent);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Button style={{ fontSize: "0.8rem", textTransform: 'capitalize', color: "#2f2f2f", fontWeight: "bold" }} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Duración</Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
        <MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>Corta Duración</MenuItem>
        <MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>Larga Duración</MenuItem>
      </Menu>
    </Box>
  );
}
export default DropdownDuracion;