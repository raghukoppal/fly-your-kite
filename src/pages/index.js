import { withLayout } from '../components/layout';
import useFetch from '../utils/useFetch';

const Home = () => {
  const [data, isLoading] = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      {data &&
        data.map(({ id, title }) => {
          return <p key={id}>{title}</p>;
        })}
    </>
  );
};

export default withLayout(Home);
