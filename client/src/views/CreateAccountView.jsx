import { useMutation } from "@apollo/client";
import { ADD_USER } from "@app/utils/graphql/mutations";
import { Input } from "components/forms";
import { Footer, Header } from "components/layout";
import Modal from "components/Modal";
import React from "react";

function CreateAccountView() {
  const [addUser, { error }] = useMutation(ADD_USER, {});

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
