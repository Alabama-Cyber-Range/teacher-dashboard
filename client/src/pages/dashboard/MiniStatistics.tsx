import { Card, useTheme } from "@aws-amplify/ui-react";

interface MiniStatisticProps {
  title: string;
  amount: string;
  icon?: JSX.Element;
  percentage?: number;
}

const MiniStatistics = (props: MiniStatisticProps) => {
  const { tokens } = useTheme();
  return (
    <Card
      height="100%"
      borderRadius="15px"
      className="bg-gradient-red"
      backgroundColor={tokens.colors.background.primary.value}
      >
      <div className="card-content">
        <div className="card-title"> {props.title} </div>
        <div className="card-statistics-amount">{props.amount}</div>
      </div>
    </Card>
  );
};

export default MiniStatistics;
