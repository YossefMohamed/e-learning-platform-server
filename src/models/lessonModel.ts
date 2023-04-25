import mongoose, { Schema, Document } from "mongoose";

export interface ILesson extends Document {
  name: string;
  video: string;
  homework: string;
  file: string;
  extraResources: string;
  description: string;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - lastName
 *        - gender
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *    UserSignInInput:
 *      required:
 *        - email
 *        - password
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        password:
 *          type: string
 */

const LessonSchema: Schema<ILesson> = new mongoose.Schema<ILesson>(
  {
    name: {
      type: String,
      required: true,
    },

    video: {
      type: String,
    },

    homework: {
      type: String,
    },

    file: {
      type: String,
    },
    extraResources: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,

    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
      virtuals: true,
    },
  }
);

const Lesson = mongoose.model<ILesson>("Lesson", LessonSchema);
export default Lesson;
