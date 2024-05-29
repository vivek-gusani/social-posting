import { useState } from "react";
// import { useHistory } from "react-router-dom";


function SignInModal({ signInUser }: { signInUser: () => void }) {
  const [emailInput, setEmailInput] = useState("");
  const [accessCodeInput, setAccessCodeInput] = useState("");
  const [currentPage, setCurrentPage] = useState("email");

  function checkValidEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function getAccessCode() {
    console.log("Clicked get access code");

    if (!checkValidEmail(emailInput)) {
      alert("Please enter a valid email address.");
      return;
    }

    setCurrentPage("accessCode");
  }

  function submitAccessCode() {
    console.log("Clicked submit access code");

    const correctAccessCode = "000000";

    if (!/^\d{6}$/.test(accessCodeInput)) {
      alert("Please enter a valid six-digit access code.");
      return;
    }

    if (accessCodeInput !== correctAccessCode) {
      alert("Incorrect access code. Please try again.");
      return;
    }

    if (accessCodeInput === correctAccessCode) {
      console.log("Correct access code. Redirecting to home page...");
    }
    signInUser();
    
  }

  function resetSignIn() {
    setEmailInput("");
    setAccessCodeInput("");
    setCurrentPage("email");
  }

  return (
    <div className="SignInModal p-6 text-left">
      {currentPage === "email" ? (
        <div className="SignInScreen flex flex-col justify-between text-sm ">
          <div className="info flex flex-col gap-2">
            <h2 className="sign-in-header text-2xl font-semibold">
              Sign in to continue
            </h2>
            <p className="sign-in-text">
              Enter your email address below to sign in to or create your
              Aesthetic account.
            </p>
          </div>

          <div className="form-group flex flex-col gap-3 justify-start mt-6">
            <div className="form-item flex flex-col gap-2 justify-start">
              <label htmlFor="email" className="text-left">
                Email address
              </label>
              <input
                className="form-input"
                onChange={(e) => setEmailInput(e.target.value)}
                value={emailInput}
                type="email"
                id="email"
                name="email"
                placeholder="Type email address here..."
              />
            </div>

            <button className="btn-main" onClick={getAccessCode}>
              Get access code
            </button>
            <button className="btn-google">Sign in with Google</button>
          </div>
        </div>
      ) : currentPage === "accessCode" ? (
        <div className="AccessCodeScreen flex flex-col justify-between text-sm">
          <div className="info flex flex-col gap-2">
            <h2 className="sign-in-header text-2xl font-semibold">
              Enter code
            </h2>
            <p className="sign-in-text">
              Enter the 6-digit code we just sent to {emailInput} below to
              continue.
            </p>
          </div>

          <div className="form-group flex flex-col gap-3 justify-start mt-6">
            <div className="form-item flex flex-col gap-2 justify-start">
              <label htmlFor="email">Access code</label>
              <input
                className="form-input"
                onChange={(e) => setAccessCodeInput(e.target.value)}
                value={accessCodeInput}
                type="text"
                id="accessCode"
                name="accessCode"
                placeholder="Type code here..."
              />
            </div>

            <button className="btn-main" onClick={submitAccessCode}>
              Access your account
            </button>

            <button className="sign-in-text text-center" onClick={resetSignIn}>
              Use another email address
            </button>
          </div>
        </div>
      ) : (
        <div>Default Page</div>
      )}
    </div>
  );
}

export default SignInModal;
