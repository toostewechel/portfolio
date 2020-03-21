import Header from "./Header";

const layoutStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "932px",
  padding: "16px"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
