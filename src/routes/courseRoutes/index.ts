import { Router } from "express";
import { createCourseRouter } from "./createCourse";
import { requireLogin } from "../../middlewares/protect-route";
import { getCoursesRouter } from "./getCourses";
import { editCourseRouter } from "./editCourse";
import { protect } from "../../middlewares/auth";
import { getCoursesByYearRouter } from "./getCoursesByYear";
import { deleteCourseRouter } from "./deleteCourse";

const courseRouter = Router();
courseRouter.use(getCoursesRouter);
courseRouter.use(getCoursesByYearRouter);

courseRouter.use(protect);
courseRouter.use(createCourseRouter);
courseRouter.use(deleteCourseRouter);

courseRouter.use(editCourseRouter);

export { courseRouter };
