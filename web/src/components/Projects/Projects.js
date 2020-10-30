import { Link, routes } from '@redwoodjs/router'
import { Card } from '../UI/Card/Card'

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-5 justify-items-auto sm:grid-cols-2 md:grid-cols-3 md:justify-items-auto">
      {projects.map((project) => (
        <Link
          to={routes.project({ id: project.id })}
          title={project.name + ' details'}
          key={project.id}
          className="w-full my-1 rounded focus:opacity-75 hover:opacity:75"
        >
          <Card>
            <img
              src={project.coverImage}
              className="w-full"
              width="100"
              height="100"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold truncate">
                <h2>{project.name}</h2>
              </div>
              <p className="text-base text-gray-700 truncate">
                {project.shortDescription}
              </p>
              <div>Goal: {project.goalAmount}</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsList
