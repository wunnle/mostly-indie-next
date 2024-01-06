import styles from './PostsHolder.module.css'

const PostsHolder = ({ children }) => {
  return <div className={styles.homeLinks}>{children}</div>
}

export default PostsHolder
