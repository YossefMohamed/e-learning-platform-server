import { Router } from "express";

import { userRouter } from "./userRoutes";
import { courseRouter } from "./courseRoutes";
import { yearRouter } from "./yearRoutes";
import { unitRouter } from "./unitRoutes";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/years", yearRouter);
indexRouter.use("/courses", courseRouter);
indexRouter.use("/units", unitRouter);

export { indexRouter };
