import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {


  return (
    <body class="flex flex-column">


      <div class="container" id="Home">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 border-bottom ">
          <div class="col-md-3 mb-2 mb-md-0"><a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">

            <span class="fs-4">Bank</span>
          </a></div>
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#Home" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#Features" class="nav-link px-2">Features</a></li>
            <li><a href="#About_us" class="nav-link px-2">About us</a></li>
            <li><a href="#FAQs" class="nav-link px-2">FAQs</a></li>
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
            <button type="button" class="btn btn-primary">Sign-up</button>
          </div>
        </header>
      </div>


      <div class="container col-xxl-8 px-4 py-5" id="About_us">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            </div>
          <div class="col-lg-6"><h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">About us</h1>
            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
              popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.</p>

          </div>
        </div>
      </div>


      <div class="container px-4 py-3" id="Features">
        <h1 class="text-center  pb-2">our Banks top
          features</h1>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3 p-2 rounded">
              
            </div>
            <div><h3 class="fs-2 text-body-emphasis">Secure Login</h3>
              <p>We protect your account with a range of security options, including biometric login, which lets you
                use your fingerprint or face to sign in, and two-factor authentication (2FA), which adds an extra
                layer of security by requiring a second verification step. You'll also receive instant alerts for
                any unusual activity.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3 p-2 rounded">
              
            </div>
            <div><h3 class="fs-2 text-body-emphasis">Instant Budgeting</h3>
              <p>Take charge of your finances with our smart budgeting tools. You can create custom budgets, track
                your spending in real time across different categories, and get instant notifications when you're
                close to exceeding a limit. Our app makes it easy to visualize your financial habits and helps you
                stay on track toward your goals.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3 p-2 rounded">
             
            </div>

            <div><h3 class="fs-2 text-body-emphasis">Privacy Controls</h3>
              <p>
                You have complete control over your data. Our privacy settings allow you to manage how your
                information is used, from personalizing your experience to opting out of marketing communications.
                We are committed to transparency and give you the power to review and adjust your preferences at any
                time.
              </p>
            </div>
          </div>
        </div>
      </div>


      <section class="container px-lg-5 px-4 py-5" id="FAQs">
        <h2 class="text-center  pb-3">frequently asked questions</h2>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                How do I set up a new account?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Setting up a new account is fast and easy. </strong>Simply download the app, tap "Sign Up,"
                and follow the prompts to enter your information. You'll need a
                valid ID to complete the process
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What should I do if I forget my password?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>If you forget your password, just tap "Forgot Password" on the login screen. </strong>
                We'll send a secure link to your registered email address or phone number to help you reset
                it.accordion-body,
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Is my personal information secure?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Our app is free to download and use for most standard transactions. <strong>
                  Some services, like international transfers, may have a small fee.
                </strong> You'll always be notified of any potential charges before you complete a transaction.
              </div>
            </div>
          </div>
        </div>
      </section>



      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#Home" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#Features" class="nav-link px-2 text-body-secondary">Features</a></li>
            <li class="nav-item"><a href="#About_us" class="nav-link px-2 text-body-secondary">About us</a></li>
            <li class="nav-item"><a href="#FAQs" class="nav-link px-2 text-body-secondary">FAQs</a></li>
          </ul>
          <p class="text-center text-body-secondary">© 2025 by Luka</p></footer>
      </div>


    </body>

  )
}

export default App
