// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/project/{id:Int}" page={ProjectPage} name="project" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/confirm-email" page={ConfirmEmailPage} name="confirmEmail" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/signin" page={SignInPage} name="signIn" />
      <Route path="/sign-up" page={SignUpPage} name="signUp" />
      <Route path="/checkout" page={CheckoutPage} name="checkout" />
      <Route path="/order/{id}" page={OrderPage} name="order" />
      <Private unauthenticated="home" role="admin">
        <Route path="/admin/users/new" page={AdminNewUserPage} name="newUser" />
        <Route path="/admin/users/{id:Int}/edit" page={AdminEditUserPage} name="editUser" />
        <Route path="/admin/users/{id:Int}" page={AdminUserPage} name="user" />
        <Route path="/admin/users" page={AdminUsersPage} name="users" />
        <Route path="/admin/donations/new" page={AdminNewDonationPage} name="newDonation" />
        <Route path="/admin/donations/{id:Int}/edit" page={AdminEditDonationPage} name="editDonation" />
        <Route path="/admin/donations/{id:Int}" page={AdminDonationPage} name="donation" />
        <Route path="/admin/donations" page={AdminDonationsPage} name="donations" />
        <Route path="/admin/projects/new" page={AdminNewProjectPage} name="newProject" />
        <Route path="/admin/projects/{id:Int}/edit" page={AdminEditProjectPage} name="editProject" />
        <Route path="/admin/projects/{id:Int}" page={AdminProjectPage} name="project" />
        <Route path="/admin/projects" page={AdminProjectsPage} name="projects" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
