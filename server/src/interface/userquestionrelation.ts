interface UserQuestionRelation {
    user_id: string; // ID del usuario
    user: string; // Referencia al ID del usuario en la colección de usuarios
    question_id: string; // ID de la pregunta
    question: string; // Referencia al ID de la pregunta en la colección de preguntas
}