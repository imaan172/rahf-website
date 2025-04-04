import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const collections = [
  { name: "Jou Ma Se", subtitle: "New Releases", image: "../images/new_collection-cover.jpeg", path: "/ready-to-wear#jouMaSe" },
  { name: "Watermelon Seeds", subtitle: "Palestine Collection", image: "../images/ws_collection-cover.jpeg", path: "/ready-to-wear#watermelonSeeds" },
  { name: "Bloom", subtitle: "Spring Collection", image: "../images/bloom_collection-cover.jpeg", path: "/accessories#bloom" },
  { name: "Timeless Denims", subtitle: "Classic Wear", image: "../images/ts_collection-cover.jpeg", path: "/ready-to-wear#timelessDenims" },
];

const NewRelease = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <Box>
      {collections.map((collection, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${collection.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)", 
              }}
            >
              {collection.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)", 
              }}
            >
              {collection.subtitle}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)", 
                color: "white",
                border: "1px solid white",
                fontSize: { xs: "0.8rem", md: "1.2rem" },
                padding: { xs: "0.5rem 1rem", md: "1rem 2rem" },
                backdropFilter: "blur(2px)", 
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)", 
                },
              }}
              onClick={() => handleNavigate(collection.path)}
            >
              Shop
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NewRelease;


