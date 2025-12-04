import "dotenv/config";
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    name: "db",
    provider: "postgresql",
    url: process.env.DATABASE_URL!,
  },
});
