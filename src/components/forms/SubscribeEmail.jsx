import { useState } from "react";
import Swal from "sweetalert2";
import MainBtn from "../buttons/MainBtn";

const SubscribeEmail = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribe = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      // perform the subscription action here
      Swal.fire("Great!", "Now you are subscribed", "success");
    } else {
      Swal.fire(
        "Error",
        "Please ensure that you are using a valid email address",
        "error"
      );
    }
  };

  const validateEmail = (email) => {
    // This is a simple email validation function with regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form
      className="flex gap-2 justify-center"
      onSubmit={subscribe}>
      <input
        className="rounded-full  focus:outline-1 outline-primary"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <button
        className="w-fit"
        type="submit">
        <MainBtn textDisplay="Send" />
      </button>
    </form>
  );
};
export default SubscribeEmail;
