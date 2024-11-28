import Card from '../post/Card/card'
import { posts } from '../../posts.jsx'

function Main() {

    return (
        <>
            <main>
                <div className='container'>
                    <div className="row">

                        {posts.map((post) => (
                            <div key={post.id} className="col-6">
                                {post.published === true && <Card title={post.title} tags={post.tags} content={post.content} image={post.image} />}
                            </div>
                        ))}
                        {/* <div className="col-6">
                            <Card />
                        </div>
                        <div className="col-6">
                            <Card />
                        </div>
                        <div className="col-6">
                            <Card />
                        </div> */}
                    </div>


                </div>


            </main >
        </>
    )
}

export default Main