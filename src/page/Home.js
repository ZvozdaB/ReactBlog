
import Loader2 from "../components/Loader2/Loader2";
import PostsPrev from "../components/PostsPrev";

export default function Home({ posts, morePosts, postEnd, loading}){
    return (
        <main className="container mx-auto pb-24">
            <div className="grid   auto-rows-max grid-cols-2 gap-6 pt-5 mb-6">
                {posts.map(post => <PostsPrev 
                    key={post.id} 
                    title={post.title} 
                    body={post.body}
                    id={post.id}
                /> )}
            </div>
            { (postEnd || loading )|| 
                <div className="flex justify-center">
                    <button className="py-2 px-4 bg-sky-500 rounded text-white" onClick={morePosts}> More posts </button>
                </div>}
            { loading && <Loader2/>}
        </main>
    )
}