import { Input } from "components/forms";
import { Footer, Header } from "components/layout";
import React from "react";

function LoginView() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <form className="flex flex-col gap-4 items-center">
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
