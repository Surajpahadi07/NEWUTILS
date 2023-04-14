import React from 'react'

export default function Home(props) {
  return (
    <>
<section className={`mb-4 mb-3 bg-${props.mode} ${props.mode === "light"?"text-dark":"text-light"}`}>

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row my-3">

        <div className="container">
            <form id="contact-form" name="contact-form " action="mail.php" method="POST">

                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="md-form ">
                            <label for="name" className="my-1">Your name</label>
                            <input type="text" id="name" name="name" placeholder='Enter your name' className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="md-form mb-0">
                            <label for="email" className="my-1">Your email</label>
                            <input type="text" id="email" name="email" placeholder='Enter your Email' className="form-control"/>
                        </div>
                    </div>

                </div>

                <div className="row my-3">
                  <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="md-form mb-0">
                            <label for="subject" className="my-1">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                <div className="col-md-2"></div>
                    <div className="col-md-8">

                        <div className="md-form">
                            <label for="message" className="my-1">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary my-3" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>

    </div>

</section>
    </>
  )
}
