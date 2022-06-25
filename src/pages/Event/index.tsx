import {useParams} from 'react-router-dom';
import {Header, SideBar, Video} from '@components';

export default function Event() {
    const {slug} = useParams<{slug: string}>();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug}/> : <div className="flex-1" />}
                <SideBar />
            </main>
        </div>
    );
}
