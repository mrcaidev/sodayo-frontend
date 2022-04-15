import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { User } from "interfaces/user.entity";
import Link from "next/link";
import { MouseEvent, useState } from "react";

interface Props {
  user: User;
}

export function PlacedUserCard({ user }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);
  const { id, phone } = user;
  const avatarUrl = user.avatarUrl || undefined;
  const nickName = user.nickName || `用户${phone.slice(phone.length - 4)}`;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} alt={nickName} />}
        title={
          <Typography component="span" variant="h6">
            {nickName}
          </Typography>
        }
        action={
          <>
            <IconButton onClick={openMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={closeMenu}>
              <MenuItem onClick={closeMenu}>
                <Link href={`space/${id}`}>
                  <a>个人空间</a>
                </Link>
              </MenuItem>
            </Menu>
          </>
        }
      />
    </Card>
  );
}
