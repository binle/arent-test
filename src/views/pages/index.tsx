export * from './authentication';
export * from './column';
export * from './home';
export * from './my-record';

export const ErrorPage = (props: { message?: string }) => {
  return (
    <div className="not-found-page">{props.message || 'There are some error, we are checking and come back soon!'}</div>
  );
};

export const NotFoundPage = () => {
  return <div>Page is not founded!</div>;
};
