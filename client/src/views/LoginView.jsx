import { useMutation } from "@apollo/client";
import UserContext from "@app/context/UserContext";
import UserService from "@app/services/User";
import { LOGIN } from "@app/utils/graphql/mutations";
import { Input } from "components/forms";
import { Footer, Header } from "components/layout";
import React from "react";
import { useHistory } from "react-router-dom";

// TODO: Abstract out Login with CreateAccount (2 much code duplication)
function LoginView() {
  // It's like a global useState 🤓.
  const [user, setUser] = React.useContext(UserContext);

  // ⚠️ Must be declared b4 referenced in useEffect
  const history = useHistory();

  React.useEffect(() => {
    if (user) {
      // We should not be on this page because we are logged in
      history.push("/");
    }
  }, [history, user]);

  const [login, { error }] = useMutation(LOGIN, {
    onCompleted: ({ login: { token, user } }) => {
      UserService.login(token);
      setUser(user);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      variables:
        // Creates an object with the form data by pairing the inputs' name with the value
        Object.fromEntries(new FormData(e.target)),
    });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <h2 className="text-xl text-center mb-4">Login</h2>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <Input type="email" label="email" />
          <Input type="password" label="password" />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-2 rounded-sm w-max"
          >
            Login
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default LoginView;
