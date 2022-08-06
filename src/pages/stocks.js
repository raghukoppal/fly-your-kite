import { withLayout } from '../components/layout';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import StocksSelector from '../components/StocksSelector';
import StartStopBtns from '../components/StartStopBtns';
import StocksGrid from '../components/StocksGrid';

const Stocks = () => {
  return (
    <>
      <Typography variant="h5" mt={2} mb={2}>
        Stocks Dashboard
      </Typography>
      <Card>
        <CardContent>
          <StocksSelector />
          <StartStopBtns />
          <StocksGrid />
        </CardContent>
      </Card>
    </>
  );
};

export default withLayout(Stocks);
