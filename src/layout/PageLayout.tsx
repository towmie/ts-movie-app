import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "./../ui/Sidebar";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#10141f",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          color: "#fff",
          padding: 3,
          gap: 3,
          overflowY: "hidden",
          height: "100vh",
        }}
      >
        <Sidebar />
        <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
      </Box>
    </div>
  );
}
