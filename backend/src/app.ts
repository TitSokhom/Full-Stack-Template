import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "English AI Tutor API is running",
  });
});

export default app;