import { navigate, routes } from '@redwoodjs/router'
import { useCart } from 'src/components/Cart/CartContext'

const Project = ({ project }) => {
  const { addItem } = useCart()

  function handleSubmit(amount) {
    addItem({
      item: {
        amount: amount,
        id: project.id,
        name: project.name,
        ownerEmail: project.ownerEmail,
        logo: project.logo,
        shortDescription: project.shortDescription,
        longDescription: project.longDescription,
        coverImage: project.coverImage,
        stripeId: project.stripeId,
        goalAmount: project.goalAmount,
      },
    })
    navigate(routes.checkout())
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Project {project.id} Detail
          </h2>
        </header>
        <button onClick={() => handleSubmit(20)}>Add to cart</button>

        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{project.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{project.name}</td>
            </tr>
            <tr>
              <th>Owner email</th>
              <td>{project.ownerEmail}</td>
            </tr>
            <tr>
              <th>Logo</th>
              <td>{project.logo}</td>
            </tr>
            <tr>
              <th>Short description</th>
              <td>{project.shortDescription}</td>
            </tr>
            <tr>
              <th>Long description</th>
              <td>{project.longDescription}</td>
            </tr>
            <tr>
              <th>Cover image</th>
              <td>{project.coverImage}</td>
            </tr>
            <tr>
              <th>Stripe id</th>
              <td>{project.stripeId}</td>
            </tr>
            <tr>
              <th>Goal amount</th>
              <td>{project.goalAmount}</td>
            </tr>
            <tr>
              <th>Video link</th>
              <td>{project.videoLink}</td>
            </tr>
            <tr>
              <th>Website link</th>
              <td>{project.websiteLink}</td>
            </tr>
            <tr>
              <th>Donations</th>
              <td>{JSON.stringify(project.donations)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Project
