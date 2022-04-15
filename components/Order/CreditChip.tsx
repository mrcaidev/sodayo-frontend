import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Chip from "@mui/material/Chip";

interface Props {
  credit: number;
}

export function CreditChip({ credit }: Props) {
  return (
    <Chip
      label={`${credit.toFixed(1)} / 5.0`}
      icon={<MilitaryTechIcon />}
      variant="outlined"
      color={credit >= 3 ? "primary" : credit >= 1.5 ? "warning" : "error"}
      size="small"
      clickable
    />
  );
}
