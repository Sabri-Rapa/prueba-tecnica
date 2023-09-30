const server = require("./src/app");
const { conn } = require("./src/db.js");

const PORT = process.env.PORT || 5000;

conn.sync({ force: true }).then(async () => {
    server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

