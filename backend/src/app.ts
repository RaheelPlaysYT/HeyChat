import express from "express";
import authRoutes from "../src/routes/authRoutes";
import chatRoutes from "../src/routes/chatRoutes";
import messageRoutes from "../src/routes/messageRoutes";
import userRoutes from "../src/routes/userRoutes";

const app = express();

app.use(express.json())  // parses incoming JSON request bodies and makes them available as req.body in your route handlers
app.get("/health", (req,res) => {
    res.json({ status:"ok", message:"Server is running" })
});

app.use("/api/auth", authRoutes)
app.use("/api/chats", chatRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

export default app;