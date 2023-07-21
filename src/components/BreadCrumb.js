import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function handleClick(event) {
  event.preventDefault();
}

const BreadCrumb = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        // sx={{ mb: 2 }}
        sx={{
          md: 2,
          "& ol": {
            justifyContent: "right",
            margin: "auto",
          },
        }}
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Portfolio</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
