// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/donations/new" page={NewDonationPage} name="newDonation" />
      <Route path="/donations/{id:Int}/edit" page={EditDonationPage} name="editDonation" />
      <Route path="/donations/{id:Int}" page={DonationPage} name="donation" />
      <Route path="/donations" page={DonationsPage} name="donations" />
      <Route path="/projects/new" page={NewProjectPage} name="newProject" />
      <Route path="/projects/{id:Int}/edit" page={EditProjectPage} name="editProject" />
      <Route path="/projects/{id:Int}" page={ProjectPage} name="project" />
      <Route path="/projects" page={ProjectsPage} name="projects" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
