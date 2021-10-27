import Image from "next/image"
import styles from '../styles/Card.module.css'

const Card = ({ post }) => {
    return (
        // <div className={styles.container}>
        <div className="card mb-3 pointer">

            <Image
                src={post.frontMatter.thumbnailUrl}
                className="img-fluid mt-1 rounded-start"
                alt="thumbnail"
                width={720}
                height={270}
                objectFit="cover"
            />
            <div className="card-body">
                <h5 className="card-title">{post.frontMatter.title}</h5>
                <p className="card-text">{post.frontMatter.description}</p>
                <p className="card-text"><small className="text-muted">{post.frontMatter.date}</small></p>
            </div>

        </div>
        // </div>
    )
}

export default Card