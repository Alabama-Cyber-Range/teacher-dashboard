import { useEffect, useState } from "react";
import {
  View,
  Grid,
  Flex,
  Card,
  Placeholder,
  Heading,
  useTheme,
} from "@aws-amplify/ui-react";
import { MdRemoveRedEye, MdWeb, MdPermIdentity } from "react-icons/md";

import MiniStatistics from "./MiniStatistics";
import TrafficSources from "./TrafficSources";
import SalesSummary from "./SalesSummary";
import TrafficSummary from "./TrafficSummary";
import CustomersSummary from "./CustomersSummary";

import { get_number_of_labs } from "../../services/api";
import { get_number_of_users } from "../../services/api";
import { get_number_of_schools } from "../../services/api";

import "./Dashboard.css";

/// Mock Data
const barChartDataDemo = [
  {
    name: "Alabama Community College System",
    data: [
      11, 8, 9, 10, 3, 11, 11, 11, 12, 13, 2, 12, 5, 8, 22, 6, 8, 6, 4, 1, 8,
      24, 29, 51, 40, 47, 23, 26, 50, 26, 22, 27, 46, 47, 81, 46, 40,
    ],
  },
  {
    name: "Alabama K-12 System",
    data: [
      7, 5, 4, 3, 3, 11, 4, 7, 5, 12, 12, 15, 13, 12, 6, 7, 7, 1, 5, 5, 2, 12,
      4, 6, 18, 3, 5, 2, 13, 15, 20, 47, 18, 15, 11, 10, 9,
    ],
  },
  {
    name: "Other",
    data: [
      4, 9, 11, 7, 8, 3, 6, 5, 5, 4, 6, 4, 11, 10, 3, 6, 7, 5, 2, 8, 4, 9, 9, 2,
      6, 7, 5, 1, 8, 3, 12, 3, 4, 9, 7, 11, 10,
    ],
  },
];

const lineChartData = [
  {
    name: "Alabama Community College System",
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    name: "Alabama K-12 System",
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
  },
];

const customersData = [
  {
    name: "New Users",
    data: [50, 60, 140, 190, 180, 230],
  },
];

const getChartData = () =>
  new Promise((resolve, reject) => {
    if (!barChartDataDemo) {
      return setTimeout(() => reject(new Error("no data")), 750);
    }

    setTimeout(() => resolve(Object.values(barChartDataDemo)), 750);
  });

const Dashboard = () => {
  const [barChartData, setBarChartData] = useState<any | null>(null);
  const [trafficSourceData, setTrafficSourceData] = useState<any | null>(null);
  const [numLabsData, setNumLabsData] = useState<any | null>(null);
  const [numUsersData, setNumUsersData] = useState<any | null>(null);
  const [numSchoolsData, setNumSchoolsData] = useState<any | null>(null);
  const { tokens } = useTheme();

  useEffect(() => {
    const doChartData = async () => {
      const numLabsResult = await get_number_of_labs();
      const numUsersResult = await get_number_of_users();
      const numSchoolsResult = await get_number_of_schools();
      const chartDataResult = await getChartData();
      setNumLabsData(numLabsResult);
      setNumUsersData(numUsersResult);
      setNumSchoolsData(numSchoolsResult);
      setBarChartData(chartDataResult);
      setTrafficSourceData([112332, 123221, 432334, 342334, 133432]);
    };

    doChartData();
  }, []);

  return (
    <>
      <View
        padding="1rem"
        backgroundColor={tokens.colors.background.tertiary.value}
        >
        <Heading level={2}>Dashboard</Heading>
      </View>
      <View
        borderRadius="6px"
        maxWidth="100%"
        padding="0rem"
        minHeight="100vh"
        color={tokens.colors.font.primary.value}
        backgroundColor={tokens.colors.background.tertiary.value}
        >
        <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
          templateRows={{ base: "repeat(4, 10rem)", large: "repeat(3, 8rem)" }}
          gap={tokens.space.xl}
        >
          <View rowSpan={{ base: 1, large: 1 }}>
            <MiniStatistics
              title="Modules"
              amount={numLabsData}
              icon={<MdRemoveRedEye />}
            />
          </View>
          <View rowSpan={{ base: 1, large: 1 }}>
            <MiniStatistics
              title="Schools"
              amount={numSchoolsData}
              icon={<MdWeb />} />
          </View>
          <View rowSpan={{ base: 1, large: 1 }}>
            <MiniStatistics
              title="Users"
              amount={numUsersData}
              icon={<MdPermIdentity />}
            />
          </View>

          <View columnSpan={[1, 1, 1, 2]} rowSpan={{ base: 3, large: 4 }}>
            <Card
            borderRadius="15px"
            backgroundColor={tokens.colors.background.primary.value}
            >
              <div className="card-title">Usage Summary</div>
              <div className="chart-wrap">
                {barChartData ? (
                  <div className="row">
                    <TrafficSummary
                      title="Traffic Summary"
                      data={barChartData}
                      type="bar"
                      labels={[
                        "2022-01-20",
                        "2022-01-21",
                        "2022-01-22",
                        "2022-01-23",
                        "2022-01-24",
                        "2022-01-25",
                        "2022-01-26",
                        "2022-01-27",
                        "2022-01-28",
                        "2022-01-29",
                        "2022-01-30",
                        "2022-02-01",
                        "2022-02-02",
                        "2022-02-03",
                        "2022-02-04",
                        "2022-02-05",
                        "2022-02-06",
                        "2022-02-07",
                        "2022-02-08",
                        "2022-02-09",
                        "2022-02-10",
                        "2022-02-11",
                        "2022-02-12",
                        "2022-02-13",
                        "2022-02-14",
                        "2022-02-15",
                        "2022-02-16",
                        "2022-02-17",
                        "2022-02-18",
                        "2022-02-19",
                        "2022-02-20",
                        "2022-02-21",
                        "2022-02-22",
                        "2022-02-23",
                        "2022-02-24",
                        "2022-02-25",
                        "2022-02-26",
                      ]}
                    />
                  </div>
                ) : (
                  <Flex direction="column" minHeight="285px">
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                  </Flex>
                )}
              </div>
            </Card>
          </View>
          <View rowSpan={{ base: 1, large: 4 }}>
            <Card
            height="100%"
            borderRadius="15px"
            backgroundColor={tokens.colors.background.primary.value}
            >
              <div className="card-title">District Usage</div>
              <div className="chart-wrap">
                {barChartData ? (
                  <TrafficSources
                    title="Traffic Sources"
                    data={trafficSourceData}
                    type="donut"
                    labels={[
                      "District 1",
                      "District 2",
                      "District 3",
                      "District 4",
                      "District 5",
                    ]}
                  />
                ) : (
                  <Flex direction="column" minHeight="285px">
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                  </Flex>
                )}
              </div>
            </Card>
          </View>

          <View columnSpan={[1, 1, 1, 2]} rowSpan={{ base: 3, large: 4 }}>
            <Card
            borderRadius="15px"
            backgroundColor={tokens.colors.background.primary.value}
            >
              <div className="card-title">School System Usage Summary</div>
              <div className="chart-wrap">
                {barChartData ? (
                  <div className="row">
                    <SalesSummary
                      title="Sales Summary"
                      data={lineChartData}
                      type="line"
                      labels={[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ]}
                    />
                  </div>
                ) : (
                  <Flex direction="column" minHeight="285px">
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                  </Flex>
                )}
              </div>
            </Card>
          </View>

          <View rowSpan={{ base: 1, large: 4 }}>
            <Card
            height="100%"
            borderRadius="15px"
            backgroundColor={tokens.colors.background.primary.value}
            >
              <div className="card-title">New Users</div>
              <div className="chart-wrap">
                {barChartData ? (
                  <div className="row">
                    <CustomersSummary
                      title="CutomersSummary"
                      data={customersData}
                      type="line"
                      labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
                    />
                  </div>
                ) : (
                  <Flex direction="column" minHeight="285px">
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                  </Flex>
                )}
              </div>
            </Card>
          </View>
        </Grid>
      </View>
    </>
  );
};

export default Dashboard;
