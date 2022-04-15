import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import bigDataSvg from "public/assets/images/big-data.svg";
import securitySvg from "public/assets/images/security.svg";

export default function IndexPage() {
  return (
    <Container component="main" maxWidth="lg">
      <Typography
        component="h1"
        variant="h1"
        align="center"
        sx={{
          my: 7,
          fontSize: { xs: "5rem", sm: "8rem" },
          fontWeight: "bolder",
          background: "-webkit-linear-gradient(315deg, #9ac8e2 35%, #42b883)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        速达优
      </Typography>
      <Box textAlign="center">
        <Button
          variant="outlined"
          size="large"
          sx={{ mx: 3, fontWeight: "bold" }}
        >
          <Link href="/square">
            <a>我想接单</a>
          </Link>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ mx: 3, fontWeight: "bold" }}
        >
          <Link href="/square">
            <a>马上下单</a>
          </Link>
        </Button>
      </Box>
      <Box
        component="section"
        sx={{
          my: 5,
          display: "flex",
          flexWrap: "wrap-reverse",
          justifyContent: "space-around",
          alignItems: "center",
          rowGap: 5,
        }}
      >
        <Box component="article" sx={{ cursor: "default" }}>
          <Typography
            component="h2"
            variant="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "3rem" },
              fontWeight: 600,
              transition: "linear 0.2s",
            }}
          >
            优质快速 一点即达
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
          >
            面向高校师生的跑腿服务，
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
          >
            为您带来更便捷的校园生活。
          </Typography>
        </Box>
        <Image src={bigDataSvg} alt="" />
      </Box>
      <Grid
        component="section"
        container
        justifyContent="center"
        alignItems="center"
        sx={{ my: 5, cursor: "default" }}
      >
        <Grid item xs={12} lg={4} textAlign="center">
          <Image src={securitySvg} alt="" />
        </Grid>
        <Grid container item xs={12} lg={8}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              "padding": 5,
              "borderRadius": 5,
              "transition": "0.2s",
              "&:hover": {
                bgcolor: "background.paper",
              },
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              fontWeight="bold"
              align="center"
              gutterBottom
            >
              业务全面
            </Typography>
            <Typography component="p" variant="h6">
              外卖、快递、超市、打印……您没有理由为琐碎事务而特意奔波！
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              "padding": 5,
              "borderRadius": 5,
              "transition": "0.2s",
              "&:hover": {
                bgcolor: "background.paper",
              },
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              fontWeight="bold"
              align="center"
              gutterBottom
            >
              社区互助
            </Typography>
            <Typography component="p" variant="h6">
              顺路帮同学捎个快递、打份资料，就能赚钱！
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              "padding": 5,
              "borderRadius": 5,
              "transition": "0.2s",
              "&:hover": {
                bgcolor: "background.paper",
              },
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              fontWeight="bold"
              align="center"
              gutterBottom
            >
              过程透明
            </Typography>
            <Typography component="p" variant="h6">
              工作人员均经实名认证，提供多种联系方式，保障您的权益与安全！
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              "padding": 5,
              "borderRadius": 5,
              "transition": "0.2s",
              "&:hover": {
                bgcolor: "background.paper",
              },
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              fontWeight="bold"
              align="center"
              gutterBottom
            >
              送货上门
            </Typography>
            <Typography component="p" variant="h6">
              面对面交货付款，为您节省每一秒的宝贵时间！
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
