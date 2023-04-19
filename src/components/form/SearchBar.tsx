import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { SearchIcon } from "../icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selected, setSelected] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFocus = () => {
    setSelected(true);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    /* logic in here */
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onHandleSubmit}
      sx={{
        borderRadius: 20,
        border: selected ? "1px solid #333" : "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "gray",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        aria-label="search"
      >
        <SearchIcon initialSize={28} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
