const layoutStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "1240px",
  padding: "32px 16px 16px 32px",
};

const Layout = (props) => <div style={layoutStyle}>{props.children}</div>;

export default Layout;
