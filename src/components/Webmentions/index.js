import { useEffect, useState } from 'react'

import styles from './Webmentions.module.css'

const wpType = {
  like: 'liked',
  reply: 'replied',
  repost: 'reposted'
}

const Webmentions = ({ slug }) => {
  const [mentions, setMentions] = useState([])

  useEffect(() => {
    fetch(
      `https://webmention.io/api/mentions.json?target=https://mostlyindie.com/${slug}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMentions(data.links)
      })
  }, [slug])

  if (mentions.length === 0) {
    return null
  }

  const replyCount = mentions.filter(m => m.activity.type === 'reply').length
  const postCount = mentions.filter(m => m.activity.type === 'repost').length

  if (mentions.filter(m => m.activity.type !== 'like').length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      <hgroup className={styles.titleGroup}>
        <h3 className={styles.title}>Mentions</h3>
        <p className={styles.counts}>
          {[
            postCount > 0 && `${postCount} retweets`,
            replyCount > 0 && `${replyCount} replies`
          ]
            .filter(a => a)
            .join(', ')}
        </p>
      </hgroup>
      {mentions
        .filter(m => m.activity.type !== 'like')
        .map(m => (
          <div key={m.id} className={styles.mention}>
            <div className={styles.profilePhotoHolder}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.data.author.photo}
                alt={m.data.author.name}
                className={styles.profilePhoto}
              />
            </div>
            <div className={styles.content}>
              <a
                href={m.data.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <strong className={styles.author}>{m.data.author.name}</strong>{' '}
                <span className={styles.mentionAction}> {wpType[m.activity.type]}</span>
              </a>
              <div className={styles.mentionText}>
                {m.data.content ? (
                  <div dangerouslySetInnerHTML={{ __html: m.data.content }} />
                ) : (
                  <a
                    href={m.data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.url}
                  >
                    {m.data.url.replace(/https?:\/\//, '')}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Webmentions
