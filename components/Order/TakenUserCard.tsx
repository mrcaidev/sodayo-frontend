import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { User } from "interfaces/user.entity";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { CreditChip } from "./CreditChip";
import { PhoneChip } from "./PhoneChip";
import { RoleChip } from "./RoleChip";

interface Props {
  user: User | null;
}

export function TakenUserCard({ user }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  if (!user) {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar />}
          title={
            <Typography component="p" variant="h6">
              等待骑手接单中……
            </Typography>
          }
        />
      </Card>
    );
  }

  const { id, phone, role, credit } = user;
  const avatarUrl = user.avatarUrl || undefined;
  const realName = user.realName || "匿名骑手";

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} alt={realName} />}
        title={
          <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
            <Typography component="span" variant="h6">
              {realName}
            </Typography>
            <RoleChip role={role} />
          </Box>
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
      <CardContent>
        <Stack direction="row" spacing={2}>
          <PhoneChip phone={phone} />
          <CreditChip credit={credit} />
        </Stack>
      </CardContent>
    </Card>
  );
}
