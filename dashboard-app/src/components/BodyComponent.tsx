import Typography from "@mui/material/Typography";

interface IBodyComponentProps {
  bodyContent: string;
}

const TitleComponent: React.FC<IBodyComponentProps> = ({ bodyContent }) => {
  return <Typography sx={{ mt: 2 }}>{bodyContent}</Typography>;
};

export default TitleComponent;
