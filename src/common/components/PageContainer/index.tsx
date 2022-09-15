import { Paper } from "@mui/material";

const PageContainer: React.FC<{}> = ({ children }) => {
  return <Paper className="page-paper-container">{children}</Paper>;
};

export default PageContainer;
