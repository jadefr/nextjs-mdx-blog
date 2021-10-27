import Image from "next/image"
import styles from '../styles/Card.module.css'

const Card = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className="card mb-3 pointer" style={{ maxHeight: '340px' }}>

                <div className="styles.blog-container">



                    <div className="row justify-content">
                        <div className="col-md-8">
                            <h5 className="card-title">{post.frontMatter.title}</h5>
                            <p className="card-text">{post.frontMatter.description}</p>
                            <p className="card-text">
                                <small className="text-muted">{post.frontMatter.date}</small>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-2 m-auto">
                        <Image
                            src={post.frontMatter.thumbnailUrl}
                            className="img-fluid mt-1 rounded-start"
                            alt="thumbnail"
                            width={500}
                            height={400}
                            objectFit="cover"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card