import ClassCompTodo from "../odin-mini/class-comp/App";
import CV from "../odin-mini/cv/App";
import List from "../odin-mini/list/App";
import Memory from "../odin-mini/memory-game/App";
import First from "../Interview/1st/App";
import Second from "../Interview/2nd/App";
import type { RouteObject } from "react-router-dom";
const route: RouteObject[] = [
  {
    path: "/",
    element: <ClassCompTodo></ClassCompTodo>,
  },
  {
    path: "cv",
    element: <CV></CV>,
  },
  {
    path: "list",
    element: <List></List>,
  },
  {
    path: "memory",
    element: <Memory></Memory>,
  },
  {
    path: "1",
    element: <First></First>,
  },
  {
    path: "2",
    element: <Second></Second>,
  },
];
export default route;
