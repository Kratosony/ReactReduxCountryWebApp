export const styles = {
  root: {
    display: "flex",
    position: "relative",
    backgroundColor: "#d4d4d4",
  },
  drawerPaper: {
    height: "100%",
    position: "fixed",
    width: "8em",
    backgroundColor: "#e10e74",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  content: {
    marginLeft: "10em",
    marginTop: "4vh",
    height: "96vh",
    flexGrow: 1,
    width: `calc(100% - 8em)`,
  },
};

export default styles;
