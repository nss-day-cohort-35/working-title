import authProcessor from "./auth/authProcessor";
import newsProcessor from "./news/newsProcessor";
import tasksProcessor from "./tasks/tasksProcessor";

authProcessor.Login()

console.log("Starting...");

newsProcessor.start();
tasksProcessor.start();
