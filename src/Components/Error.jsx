import { useRouteError } from 'react-router-dom';

const Error = () => {
  const { status, statusText, data } = useRouteError();
  return (
    <>
      <h1>
        {status}: {statusText}
      </h1>
      <h2>Reason : {data}</h2> 
      <h1></h1>
    </>
  );
};

export default Error;
