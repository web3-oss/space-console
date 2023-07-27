import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import KpiBox from "../../components/KpiBox";
import EmailIcon from "@mui/icons-material/Email";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER 
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>*/}

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
              <EmailIcon
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
              <EmailIcon
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
            <LineChart isDashboard={true} />
          </Box>
        </Box>


        {/* TRANSACTION LISTS*/}

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="10px"

        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
