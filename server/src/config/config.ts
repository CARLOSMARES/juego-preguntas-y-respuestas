import mongoose from 'mongoose';

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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
});

// Creación de modelos a partir de los esquemas
const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionSchema);
const UserQuestionRelation = mongoose.model('UserQuestionRelation', userQuestionRelationSchema);

// Clase config con métodos relacionados con la base de datos
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
            // Si las colecciones ya existen, no es necesario crearlas de nuevo
            if (mongoose.connection.collections['users']) {
                console.log('Collection users already exists');
            } else {
                await mongoose.connection.db.createCollection('users', {
                    validator: {
                        $jsonSchema: {
                            bsonType: 'object',
                            required: ['user_id', 'user_firstname', 'user_lastname', 'user_nickname', 'user_birthday', 'user_password'],
                            properties: {
                                user_id: { bsonType: 'string' },
                                user_firstname: { bsonType: 'string' },
                                user_lastname: { bsonType: 'string' },
                                user_nickname: { bsonType: 'string' },
                                user_birthday: { bsonType: 'date' },
                                user_password: { bsonType: 'string' },
                            }
                        }
                    }
                });
                console.log('Created collection users');
            }

            if (mongoose.connection.collections['questions']) {
                console.log('Collection questions already exists');
            } else {
                await mongoose.connection.db.createCollection('questions', {
                    validator: {
                        $jsonSchema: {
                            bsonType: 'object',
                            required: ['question_id', 'question_text', 'question_request_1', 'question_request_2', 'question_request_3', 'question_request_4', 'question_request_5', 'question_request_correct'],
                            properties: {
                                question_id: { bsonType: 'string' },
                                question_text: { bsonType: 'string' },
                                question_request_1: { bsonType: 'string' },
                                question_request_2: { bsonType: 'string' },
                                question_request_3: { bsonType: 'string' },
                                question_request_4: { bsonType: 'string' },
                                question_request_5: { bsonType: 'string' },
                                question_request_correct: { bsonType: 'string' },
                            }
                        }
                    }
                });
                console.log('Created collection questions');
            }

            if (mongoose.connection.collections['userquestionrelation']) {
                console.log('Collection userquestionrelation already exists');
            } else {
                await mongoose.connection.db.createCollection('userquestionrelation', {
                    validator: {
                        $jsonSchema: {
                            bsonType: 'object',
                            required: ['user_id', 'question_id', 'user', 'question'],
                            properties: {
                                user_id: { bsonType: 'objectId' },
                                question_id: { bsonType: 'objectId' },
                                user: { bsonType: 'objectId' },
                                question: { bsonType: 'objectId' },
                            }
                        }
                    }
                });
                console.log('Created collection userquestionrelation');
            }

            console.log('Database setup complete');
        } catch (error) {
            console.error('Error creating database:', error);
            throw error;
        }
    }
}
