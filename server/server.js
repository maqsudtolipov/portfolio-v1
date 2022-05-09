const app = require("./app");

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`💎 Server is running on port ${port}`);
});
