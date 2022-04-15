import GppBadIcon from "@mui/icons-material/GppBad";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import Chip from "@mui/material/Chip";
import { Role } from "constants/role.constant";

interface Props {
  role: Role;
}

export function RoleChip({ role }: Props) {
  switch (role) {
    case Role.customer:
      return (
        <Chip
          label="顾客"
          icon={<GppMaybeIcon />}
          variant="outlined"
          color="warning"
          size="small"
        />
      );
    case Role.courier:
      return (
        <Chip
          label="骑手"
          icon={<GppGoodIcon />}
          variant="outlined"
          color="success"
          size="small"
        />
      );
    case Role.staff:
      return (
        <Chip
          label="官方骑手"
          icon={<GppGoodIcon />}
          variant="outlined"
          color="success"
          size="small"
        />
      );
    case Role.leader:
      return (
        <Chip
          label="创业者"
          icon={<GppGoodIcon />}
          variant="outlined"
          color="success"
          size="small"
        />
      );
    default:
      return (
        <Chip
          label="未知身份"
          icon={<GppBadIcon />}
          variant="outlined"
          color="error"
          size="small"
        />
      );
  }
}
