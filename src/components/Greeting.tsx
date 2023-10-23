import axios from 'axios';
import useSWR from 'swr';

const Greeting = () => {
  const { data } = useSWR<{ name: string }>('/api/name', (url: string) =>
    axios.get<{ name: string }>(url).then((res) => res.data),
  );

  return data ? <div>{`Hello, ${data.name}!`}</div> : null;
};

export default Greeting;
