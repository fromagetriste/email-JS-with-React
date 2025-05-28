import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";
import { ToastContainer, toast } from "react-toastify";

export const ContactUs = () => {
  // to toggle the spinner // para activar el spinner // pour activer le spinner :
  const [isLoading, setIsLoading] = useState(false);

  //
  const form = useRef();

  const myInputStyle =
    "text-slate-300 border-2 border-slate-300 m-4 p-4 rounded-lg outline-0 focus:bg-slate-900 focus:border-amber-300 transition w-[100%]";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          form.current.reset(); // to remove form entries // eliminar entradas del formulario // vider les champs du formulaire
          setIsLoading(false);
          toast.success(
            "You received an email confirmation (check your spams)",
            {
              position: "bottom-center",
              autoClose: 2000,
              closeOnClick: false,
              pauseOnHover: true,
              theme: "dark",
            }
          );
        },
        (error) => {
          form.current.reset();
          setIsLoading(false);
          toast.error("Your message could not be sent", {
            position: "bottom-center",
            autoClose: 2000,
            closeOnClick: false,
            pauseOnHover: true,
            theme: "dark",
          });
          console.error(error);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-1 justify-center items-center w-full md:w-[60%] lg:w-[40%] mt-8 p-4 ml-auto mr-auto"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className={myInputStyle}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className={myInputStyle}
        />
        <textarea
          name="message"
          placeholder="Message ..."
          className={`${myInputStyle} pb-24 `}
        />
        <button
          type="submit"
          value="Send"
          className="cursor-pointer p-4 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition mt-4 w-[100%] font-bold"
          onClick={() => setIsLoading(true)}
        >
          {isLoading ? <Spinner /> : "Send"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};
