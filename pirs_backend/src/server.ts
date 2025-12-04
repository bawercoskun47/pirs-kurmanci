import "dotenv/config";
import { createServer } from "http";

import app from "./app";
import { setupSocketIO } from "./socket/gameSocket";

const PORT = process.env.PORT ?? 4000;

// HTTP sunucusu oluştur
const httpServer = createServer(app);

// Socket.IO'yu başlat
setupSocketIO(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 API li ser portê ${PORT} destpê dike`);
  console.log(`🎮 Multiplayer WebSocket amade ye`);
});
