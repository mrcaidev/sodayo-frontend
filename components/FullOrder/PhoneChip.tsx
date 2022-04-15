import PhoneIcon from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";

interface Props {
  phone: string;
}

export function PhoneChip({ phone }: Props) {
  return (
    <Chip
      label={phone}
      icon={<PhoneIcon />}
      variant="outlined"
      color="primary"
      size="small"
      clickable
    />
  );
}
