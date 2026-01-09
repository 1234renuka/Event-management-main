import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import indexRouter from "./routes/index.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


const allowedOrigins = [
  "https://event-management-main-jet.vercel.app",
  "https://event-management-main-n6mcdniq4-renuka-thakurs-projects.vercel.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow Postman / server-to-server

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// optional: handle preflight explicitly
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", indexRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Error in starting server", err);
  }
};

startServer();
