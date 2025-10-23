import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 👇 Tambahkan ini (route root)
app.get("/", (req, res) => {
  res.send("API Cuci Sepatu Supabase menyala abangkuhh 🔥");
});

// route utama
app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
