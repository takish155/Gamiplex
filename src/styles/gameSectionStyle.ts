import { SxProps } from "@mui/material";

export const paperStyle: SxProps = {
  "&:hover": {
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
  },
  width: "250px",
  overflow: "hidden",
  borderRadius: "1.5rem",
};

export const imageContainerStyle: SxProps = {
  position: "relative",
  width: "full",
  paddingTop: "75%",
  marginBottom: 5,
  borderRadius: "3xl",
  overflow: "hidden",
};

export const infoContainerStyle: SxProps = {
  width: "90%",
  marginX: "auto",
  marginBottom: 5,
};

export const detailsContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

export const headingStyle: SxProps = {
  fontSize: "1.5rem",
  lineHeight: "1.2",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "1rem",
};

export const ratingStyle: SxProps = {
  fontSize: "1.1rem",
  fontWeight: "700",
  width: "30%",
  textAlign: "center",
  borderRadius: "6px",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
};