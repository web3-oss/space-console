import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";
import KpiBox from "../../components/KpiBox";
import Header from "../../components/Header";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
const Bitcoin = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BITCOIN" subtitle="Bitcoin Dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"

        >
          <KpiBox
            title="12,361"
            subtitle="KPI 1"
            increase="+14%"
            icon={
              <CurrencyBitcoinIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"

        >
          <KpiBox
            title="431,225"
            subtitle="KPI 2"
            progress="0.50"
            increase="+21%"
            icon={
              <CurrencyBitcoinIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="10px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                TOTAL MARKET VOLUME
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Bitcoin;
