import mongoose from 'mongoose';

import { IQuestion } from '../interfaces/IQuestion';
import { IUser } from '../interfaces/IUser';
import { IUserQuestionRelation, UserQuestionRelationDocument } from '../interfaces/IUserQuestionRelation';

// Definición de esquemas utilizando mongoose.Schema
const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    user_firstname: {
        type: String,
        required: true,
    },
    user_lastname: {
        type: String,
        required: true,
    },
    user_nickname: {
        type: String,
        required: true,
    },
    user_birthday: {
        type: Date,
        required: true,
    },
    user_password: {
        type: String,
        required: true,
    }
});

const questionSchema = new mongoose.Schema({
    question_id: {
        type: String,
        required: true,
        unique: true,
    },
    question_text: {
        type: String,
        required: true,
    },
    question_request_1: {
        type: String,
        required: true,
    },
    question_request_2: {
        type: String,
        required: true,
    },
    question_request_3: {
        type: String,
        required: true,
    },
    question_request_4: {
        type: String,
        required: true,
    },
    question_request_5: {
        type: String,
        required: true,
    },
    question_request_correct: {
        type: String,
        required: true,
    },
});

const userQuestionRelationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
});

// Creación de modelos a partir de los esquemas
const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionSchema);
const UserQuestionRelation = mongoose.model('UserQuestionRelation', userQuestionRelationSchema);

// Clase Config con métodos relacionados con la base de datos
export class Config {
    dbUri = process.env.MONGODB_URI;

    public async connectToDatabase() {
        if (!this.dbUri) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        try {
            await mongoose.connect(this.dbUri);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    public async disconnectFromDatabase() {
        try {
            await mongoose.connection.close();
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
            throw error;
        }
    }

    public async clearDatabase() {
        try {
            const collections = mongoose.connection.collections;
            for (const key in collections) {
                const collection = collections[key];
                await collection.deleteMany({});
            }
            console.log('Cleared database');
        } catch (error) {
            console.error('Error clearing database:', error);
            throw error;
        }
    }

    public async dropDatabase() {
        try {
            await mongoose.connection.db.dropDatabase();
            console.log('Dropped database');
        } catch (error) {
            console.error('Error dropping database:', error);
            throw error;
        }
    }

    public async createDatabase() {
        try {
            const db = mongoose.connection.db;

            // Crea la colección 'users' si no existe
            if (!db.collection('users')) {
                await db.createCollection('users');
                console.log('Colección "users" creada con éxito');
            }

            // Crea la colección 'questions' si no existe
            if (!db.collection('questions')) {
                await db.createCollection('questions');
                console.log('Colección "questions" creada con éxito');
            }

            // Crea la colección 'userquestionrelation' si no existe
            if (!db.collection('userquestionrelation')) {
                await db.createCollection('userquestionrelation');
                console.log('Colección "userquestionrelation" creada con éxito');
            }

            console.log('Todas las colecciones creadas con éxito');
        } catch (error) {
            console.error('Error creando la base de datos:', error);
            throw error;
        }
    }

    public async createUser(user: IUser): Promise<IUser> {
        try {
            const newUser = new User(user);
            await newUser.save();
            return newUser;
        } catch (error) {
            console.error('Error creating the user:', error);
            throw error;
        }
    }
    
    public async createQuestion(question: IQuestion): Promise<IQuestion> {
        try {
            const newQuestion = new Question(question);
            await newQuestion.save();
            return newQuestion;
        } catch (error) {
            console.error('Error creating the question:', error);
            throw error;
        }
    }

    public async createUserQuestionRelation(userQuestionRelation: IUserQuestionRelation): Promise<UserQuestionRelationDocument> {
        try {
            const newUserQuestionRelation = new UserQuestionRelation(userQuestionRelation);
            await newUserQuestionRelation.save();
            return newUserQuestionRelation as unknown as UserQuestionRelationDocument;
        } catch (error) {
            console.error('Error creating the user-question relation:', error);
            throw error;
        }
    }
    
    
    public async getAllUsers() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            console.error('Error al obtener todos los usuarios:', error);
            throw error;
        }
    }
    public async getAllQuestions() {
        try {
            const questions = await Question.find();
            return questions;
        } catch (error) {
            console.error('Error al obtener todas las preguntas:', error);
            throw error;
        }
    }
}
