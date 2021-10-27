import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

const Blog= ({ posts }) => {
    return (
        <div className="mt-5">
            {posts.map((post,index) => (
                <Link href={'/blog/' + post.slug} passHref key={index}>
                    <Card post={post}/>
                </Link>
            ))}
        </div>
    )
}


export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            frontMatter,
            slug: filename.split('.')[0]
        }
    })

    return {
        props: {
            posts
        }
    }
}

export default Blog