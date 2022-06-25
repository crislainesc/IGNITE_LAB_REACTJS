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

export interface VideoProps {
    lessonSlug: string;
}

export interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            name: string;
            bio: string;
            avatarURL: string;
        };
    };
}
