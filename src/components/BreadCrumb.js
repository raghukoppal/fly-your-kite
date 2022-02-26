import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function handleClick(event) {
  event.preventDefault();
}

const BreadCrumb = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Typography color="text.primary">Stocks</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
