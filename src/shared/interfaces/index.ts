export interface Lesson {
    id: string;
    title: string;
}

export interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: Date;
        lessonType: 'live' | 'class';
    }[];
}
