import { useMutation } from "@apollo/client";
import UserContext from "@app/context/UserContext";
import UserService from "@app/services/User";
import { ADD_USER } from "@app/utils/graphql/mutations";
import { Input } from "components/forms";
import { Footer, Header } from "components/layout";
import Modal from "components/Modal";
import React from "react";
import { useHistory } from "react-router-dom";

function CreateAccountView() {
  // It's like a global useState 🤓.
  const [user, setUser] = React.useContext(UserContext);

  const history = useHistory();

  React.useEffect(() => {
    if (user) {
      // We should not be on this page because we are logged in
      history.push("/");
    }
  }, [history, user]);

  const [addUser, { error }] = useMutation(ADD_USER, {
    onCompleted: ({ addUser: { token, user } }) => {
      UserService.login(token);
      setUser(user);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser({
      variables:
        // Creates an object with the form data by pairing the inputs' name with the value
        Object.fromEntries(new FormData(e.target)),
    });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <h2 className="text-xl text-center mb-4">Create an Account</h2>
        {error && (
          <Modal
            // TODO: Customize error messages to be more user-friendly
            message={error.message}
          />
        )}
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-2 rounded-sm w-max"
          >
            Create Account
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default CreateAccountView;
