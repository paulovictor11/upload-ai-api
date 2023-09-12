import { fastify } from "fastify";

const app = fastify();

app.get("/", () => {
    return "UPLOAD.AI API";
});

app.listen({
    port: 3333,
}).then(() => console.log("HTTP Server running! 🚀"));
