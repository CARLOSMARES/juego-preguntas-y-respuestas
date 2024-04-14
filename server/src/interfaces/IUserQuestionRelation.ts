import mongoose from "mongoose";

export interface IUserQuestionRelation {
    user_id: mongoose.Schema.Types.ObjectId;
    question_id: mongoose.Schema.Types.ObjectId;
}

export type UserQuestionRelationDocument = mongoose.Document & IUserQuestionRelation;