import { Link, routes } from '@redwoodjs/router'
import { Card } from '../UI/Card/Card'
import { GitHub, Globe } from 'react-feather'

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-5 justify-items-auto sm:grid-cols-2 md:grid-cols-3 md:justify-items-auto">
      {projects.map((project) => (
        <Card key={project.id} className="w-full p-6 my-1 rounded shadow-lg">
          <div className="flex flex-row items-center pb-4 border-b border-gray-300 w-100">
            <img
              alt=""
              src={project.coverImage}
              className="w-16 h-16 ml-1 border border-gray-300 rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="block mb-2 ml-3 text-2xl font-bold font-display">
                {project.name}
              </h2>
              <div className="flex flex-row ml-3">
                <Link
                  className="flex flex-row items-center mr-4 text-sm hover:underline text-purple"
                  title={project.name + ' homepage'}
                >
                  <Globe className="mr-2" />
                  Website
                </Link>
                <Link
                  title={project.name + ' github'}
                  className="flex flex-row items-center text-sm hover:underline text-purple"
                >
                  <GitHub className="mr-2" />
                  Github
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 ">
            <p className="text-base italic font-bold text-gray-700">
              {project.shortDescription}
            </p>
            <p className="text-base text-gray-700">{project.longDescription}</p>
            <Link to={routes.project({ id: project.id })}>Read more</Link>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default ProjectsList
