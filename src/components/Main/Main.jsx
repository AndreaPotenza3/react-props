import Card from '../post/Card/card'
import { posts } from '../../posts.jsx'
import Tags from '../Tags/Tags'

function Main() {

    const tags = []

    posts.forEach(post => {
        const postTags = post.tags
        postTags.forEach((tag) => {
            !tags.includes(tag) && tags.push(tag)

        });
    });
    console.log(tags)
    return (
        <>
            <main>
                <div className='container'>
                    <Tags tags={tags} />
                    <div className="row">

                        {posts.map((post) => (
                            <div key={post.id} className="col-6">
                                {post.published === true && <Card title={post.title} tags={post.tags} content={post.content} image={post.image} />}
                            </div>
                        ))}
                    </div>


                </div>


            </main >
        </>
    )
}

export default Main