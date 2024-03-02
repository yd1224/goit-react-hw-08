import { Helmet } from "react-helmet-async";
export const DocTitle = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};
