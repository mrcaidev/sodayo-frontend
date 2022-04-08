import Typography from "@mui/material/Typography";

export function Loading() {
  return (
    <Typography
      component="h1"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "5rem",
        fontWeight: "bolder",
      }}
    >
      LOADING...
    </Typography>
  );
}
