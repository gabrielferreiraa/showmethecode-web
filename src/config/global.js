const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__

export default {
  devTools: (reduxDevTools && reduxDevTools()) || "",
  colors: {
    primaryColor: "#2ED096",
    secondaryColor: "#908F8F",
    darkColor: "#515151",
    github: "#333333",
    google: "#4285F4",
  },
  layout: {
    borderRadius: "5px",
  },
  font: {
    thin: "Roboto-Thin",
    light: "Roboto-Light",
    regular: "Roboto-Regular",
    medium: "Roboto-Medium",
    bold: "Roboto-Bold",
    black: "Roboto-Black",
  },
}
