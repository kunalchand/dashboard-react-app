import Typography from "@mui/material/Typography";

interface ITitleComponentProps {
  titleContent: string;
}

const TitleComponent: React.FC<ITitleComponentProps> = ({ titleContent }) => {
  return (
    <Typography variant="h6" component="h2">
      {titleContent}
    </Typography>
  );
};

export default TitleComponent;
