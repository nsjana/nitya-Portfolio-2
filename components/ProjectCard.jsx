import { useState } from 'react'

export default function ProjectCard({title,description,live,source,thumb}){
  return (
    <article className="project-card">
      <div className="project-thumb">{thumb || 'Thumb'}</div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="project-links">
          {live ? <a href={live} target="_blank">Live</a> : null}
          {live && source ? ' · ' : null}
          {source ? <a href={source} target="_blank">Source</a> : null}
        </p>
      </div>
    </article>
  )
}
