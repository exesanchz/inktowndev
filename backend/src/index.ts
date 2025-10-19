import express from "express";
import cors from "cors";
import { artists } from "./data/artists";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/artists", (req, res) => res.json(artists));
app.get("/artists/:id", (req, res) => {
  const artist = artists.find((a) => a.id === Number(req.params.id));
  if (!artist) return res.status(404).json({ message: "Not found" });
  res.json(artist);
});

app.post("/bookings", (req, res) => {
  console.log("New booking:", req.body);
  res.status(201).json({ success: true });
});

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
