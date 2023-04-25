import { Router } from "express";

import { userRouter } from "./userRoutes";
import { courseRouter } from "./courseRoutes";
import { yearRouter } from "./yearRoutes";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/courses", courseRouter);
indexRouter.use("/years", yearRouter);

export { indexRouter };
