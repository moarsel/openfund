import { Link, routes } from '@redwoodjs/router'

const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <section key={project.id}>
          <h2>{project.name}</h2>
          <div>{project.ownerEmail}</div>
          <div>{project.logo}</div>
          <p>{project.shortDescription}</p>
          <p>{project.longDescription}</p>
          <img src={project.coverImage} width="100" />
          <div>{project.stripeId}</div>
          <div>Goal: {project.goalAmount}</div>
          <div>{project.videoLink}</div>
          <div>
            Website: <a href={project.websiteLink}>{project.websiteLink}</a>
          </div>
          <Link
            to={routes.project({ id: project.id })}
            title={'Show project ' + project.id + ' detail'}
          >
            Show
          </Link>
        </section>
      ))}
    </>
  )
}

export default ProjectsList
