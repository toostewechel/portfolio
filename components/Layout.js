const layoutStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "932px",
  padding: "16px",
};

const Layout = (props) => <div style={layoutStyle}>{props.children}</div>;

export default Layout;
