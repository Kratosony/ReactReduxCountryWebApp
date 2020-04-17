const styles = {
  actions: {
    display: "flex",
    margin: 0,
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    padding: 0,
    margin: 0,
    borderRadius: 0,
    height: 60,
    backgroundColor: "#320B38",
    color: "#fff",
    "&[disabled]": {
      opacity: 0.6,
    },
    "&:hover": {},
  },
  acceptButton: {
    flexGrow: 3,
    "&:hover": {},
  },
};

export default styles;
