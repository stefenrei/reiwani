import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const BasicButtonGroup = () => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button Link href="/">Main</Button>
      <Button Link href="/home">Home</Button>
      <Button Link href="/beige">Beige</Button>
    </ButtonGroup>
  );
}

export default BasicButtonGroup