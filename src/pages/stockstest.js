import { withLayout } from '../components/layout';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import StocksSelector from '../components/StocksSelector';
import StartStopBtns from '../components/StartStopBtns';
import StocksGridTest from '../components/StocksGridTest';

const Stocks = () => {
  return (
    <>
      <Typography variant="h5" mt={2} mb={2}>
        Stocks Dashboard
      </Typography>
      <Card>
        <CardContent>
          <StocksGridTest />
          <StartStopBtns />
        </CardContent>
      </Card>
    </>
  );
};

export default withLayout(Stocks);
