import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Section,
} from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo } from 'reduxState/currencySlice';

const Home = () => {
  const exchangeInfo = useSelector(selectExchangeInfo);
  const isError = false;

  return (
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
        <ExchangeForm />

        {exchangeInfo && <ExchangeInfo />}
      </Container>
    </Section>
  );
};

export default Home;
