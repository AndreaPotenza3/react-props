import Card from '../post/Card/card'
import { posts } from '../../posts'

function Main() {

    return (
        <>
            <main>
                <div className='container'>
                    <div className="row">

                        {posts.map((post) => (
                            <div key={post.id} className="col-6">
                                <Card title={post.title} tags={post.tags} content={post.content} />
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