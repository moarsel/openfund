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
      <Private unauthenticated="home">
        <Route path="/account" page={AccountPage} name="account" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
