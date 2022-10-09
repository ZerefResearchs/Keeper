import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

function Footer() {
  const year = new Date().getFullYear();

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <footer>
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: 40,
          width: "100%",
          height: "2.5rem"
        }}
      >
        <h4 style={{ padding: 15 }}>Page: {page}</h4>
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </div>

      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
