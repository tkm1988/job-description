import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo.jsx'
import 'github-markdown-css/github-markdown.css'

export const Head = () => <SEO />

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <article className="markdown-body">
          <h1>{frontmatter.title}</h1>
          更新日：{frontmatter.date}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
