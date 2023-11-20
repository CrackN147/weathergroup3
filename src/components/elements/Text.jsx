export const Text = ({type = 'small-card', children}) => {
  return (
    <p className={`${type}-text`}>
      {children}
    </p>
  );
};