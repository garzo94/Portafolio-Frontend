import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { sectionName } from "../components/Variants";

export default function About() {
  const imageVariants: Variants = {
    offscreen: {
      y: 300,
      rotate: -10,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.8,
      },
    },
  };

  const aboutVariants: Variants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2.8,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Box
        id="About"
        sx={{
          height: { lg: "400px", md: "350px", sm: "625px", xs: "650px" },
          width: "100vw",
          position: "relative",
          bgcolor: "#262626",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          pt: { lg: 0, md: 5, sm: 0 },
          pb: { lg: 5, md: 15, sm: 12, xs: 14 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            borderRight: "1600px solid #131313",
            borderTop: "200px solid transparent",
          }}
        ></Box>
        <motion.div variants={sectionName}>
          <Typography
            sx={{
              color: "rgba(0,0,0,0.5)",
              position: "absolute",
              top: { lg: -65, md: -45, sm: -15, xs: -20 },
              left: { lg: 75, md: 40, sm: 20, xs: 35 },
              fontSize: { lg: "45px", md: "35px", sm: "32px", xs: "25px" },
              zIndex: 1,
              fontWeight: 600,
            }}
          >
            About
          </Typography>
        </motion.div>

        <Box
          sx={{
            zIndex: "1",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            mt: { lg: 0, md: 0, sm: 2, xs: 3 },
          }}
        >
          <motion.div variants={imageVariants}>
            <CardMedia
              component="img"
              image="/assets/me.png"
              alt="Me"
              sx={{
                width: { lg: "425px", md: "380px", sm: "325px", xs: "300px" },
                height: { lg: "425px", md: "380px", sm: "325px" },
                m: 1,
                mt: { lg: 0, md: 0, sm: 0, xs: 3 },
                objectFit: "cover",
              }}
            />
          </motion.div>
        </Box>
        <motion.div variants={aboutVariants}>
          <Box
            sx={{
              width: "95%",

              p: 2,
              borderRadius: 10,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              backgroundColor: "rgba(0,0,0,0.6)",
              alignItems: {
                lg: "center",
                md: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                mb: 2,
                fontSize: "25px",
              }}
            >
              Alexander Garzo
            </Typography>
            <Typography
              sx={{
                width: { lg: "550px", md: "375px", sm: "525px", xs: "320px" },
                color: "rgba(255,255,255,0.65)",
                textAlign: "justify",
                fontSize: { lg: "18px", md: "17px", sm: "16px" },
                fontStyle: "italic",
                lineHeight: 2,
              }}
            >
              As a full-stack developer with over 2 years of experience, I
              specialize in web development and automation. Utilizing my
              expertise in TypeScript and React.js for frontend development and
              Python and Django for backend development, I am committed to
              create visually appealing, user-friendly, solve solutions and
              profitable applications. Let's work together to bring your ideas
              to life.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
}
