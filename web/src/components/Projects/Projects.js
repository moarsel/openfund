import { Link, routes } from '@redwoodjs/router'
import { Card } from '../UI/Card/Card'
import { ContributionBar } from '../UI/ContributionBar/ContributionBar'

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
              className="object-cover w-full h-64"
              width="100"
              height="100"
            />
            <ContributionBar
              contributionsTotal={project.contributionsTotal}
              currentMatchingAmount={project.currentMatchingAmount}
              goalAmount={project.goalAmount}
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                <h2>{project.name}</h2>
              </div>
              <p className="text-base text-gray-700">
                {project.shortDescription}
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsList
