import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Result() {
  const resultVal = localStorage.getItem("resultVal");
  const navigate = useNavigate();
  let message = "";

  switch (resultVal) {
    case "hbv":
      message = (
        <section className="message container pt-5 mt-4 pb-lg-5 pb-0">
          <div className="row d-flex justify-content-xl-between justify-content-center">
            <div className="col-xl-6">
              <h1 className="text-danger">
                Your uploaded image indicates the presence of tissue with
                hypertrophic vessels in your larynx.
              </h1>
              <p className="text-warning">
                As an AI language model, I'm here to provide assistance and
                offer insights to the best of my abilities based on the
                information and data I've been trained on. While I can't
                guarantee the accuracy or certainty of solutions to problems, I
                can certainly provide a second opinion or perspective. It's
                always a good idea to cross-reference information and consult
                with experts or additional sources when dealing with important
                matters.
              </p>
            </div>
            <img
              className="col-xl-6 img"
              src="https://media.istockphoto.com/id/134843485/vector/confused-emoticon.jpg?s=612x612&w=0&k=20&c=GnHI36kUMFWfl2FAFzDnGUiVSswjUXtVx46Up2qPwDc="
              alt="Confused emoticon"
            />
          </div>
        </section>
      );
      break;

    case "ipcl":
      message = (
        <section className="message container pt-5 mt-4 pb-lg-5 pb-0">
          <div className="row d-flex justify-content-xl-between justify-content-center">
            <div className="col-xl-6">
              <h1 className="text-danger">
                Your uploaded image shows tissue with intrapapillary capillary
                loops in your larynx.
              </h1>
              <p className="text-warning">
                As an AI language model, I'm here to provide assistance and
                offer insights to the best of my abilities based on the
                information and data I've been trained on. While I can't
                guarantee the accuracy or certainty of solutions to problems, I
                can certainly provide a second opinion or perspective. It's
                always a good idea to cross-reference information and consult
                with experts or additional sources when dealing with important
                matters.
              </p>
            </div>
            <img
              className="col-xl-6 img"
              src="https://media.istockphoto.com/id/134843485/vector/confused-emoticon.jpg?s=612x612&w=0&k=20&c=GnHI36kUMFWfl2FAFzDnGUiVSswjUXtVx46Up2qPwDc="
              alt="Confused emoticon"
            />
          </div>
        </section>
      );
      break;

    case "le":
      message = (
        <section className="message container pt-5 mt-4 pb-lg-5 pb-0">
          <div className="row d-flex justify-content-xl-between justify-content-center">
            <div className="col-xl-6">
              <h1 className="text-danger">
                Your uploaded image suggests the presence of tissue with
                leukoplakia in your larynx.
              </h1>
              <p className="text-warning">
                As an AI language model, I'm here to provide assistance and
                offer insights to the best of my abilities based on the
                information and data I've been trained on. While I can't
                guarantee the accuracy or certainty of solutions to problems, I
                can certainly provide a second opinion or perspective. It's
                always a good idea to cross-reference information and consult
                with experts or additional sources when dealing with important
                matters.
              </p>
            </div>
            <img
              className="col-xl-6 img"
              src="https://media.istockphoto.com/id/134843485/vector/confused-emoticon.jpg?s=612x612&w=0&k=20&c=GnHI36kUMFWfl2FAFzDnGUiVSswjUXtVx46Up2qPwDc="
              alt="Confused emoticon"
            />
          </div>
        </section>
      );
      break;

    default:
      message = (
        <section className="message container pt-5 mt-4 pb-lg-5 pb-0">
          <div className="row d-flex justify-content-xl-between justify-content-center">
            <div className="col-xl-6">
              <h1 className="text-success">
                Congratulations! Your uploaded image shows healthy laryngeal
                tissue.
              </h1>
              <p className="text-success">
                Healthy tissue indicates that there are no signs of
                abnormalities or disease in your larynx. This is excellent news
                and suggests that your larynx is functioning as it should. While
                your larynx appears healthy, it's still important to maintain
                good vocal hygiene and overall health. Regular check-ups with
                your healthcare provider can help ensure that any potential
                issues are caught early.
              </p>
            </div>
            <img
              className="col-xl-6 img"
              src="https://i.pinimg.com/564x/bb/19/2d/bb192d00960abc2efa068122e8fd44d8.jpg"
              alt="Happy emoticon"
            />
          </div>
        </section>
      );
      break;
  }

  return (
    <div>
      <div className="rslt d-flex justify-content-end mx-3 my-3">
        <Link to={"/"}>
          <button className="btn rounded-pill navigate-btn ">
            Navigate to Home
          </button>
        </Link>
      </div>
      {message}
    </div>
  );
}
