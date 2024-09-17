import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import DefaultButton from "../../Buttons/DefaultButton";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if form is submitted

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Navn må være minst 2 tegn")
      .max(50, "Navn kan ikke være mer enn 50 tegn")
      .required("Navn er påkrevd"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{7,15}$/, "Telefonnummeret må være gyldig")
      .required("Telefonnummer er påkrevd"),
    email: Yup.string()
      .email("E-post må være en gyldig e-postadresse")
      .required("E-post er påkrevd")
      .max(254, "E-post kan ikke være mer enn 254 tegn"),
    message: Yup.string()
      .min(10, "Melding må være minst 10 tegn")
      .max(1000, "Melding kan ikke være mer enn 1000 tegn")
      .required("Din Melding er påkrevd"),
    privacy: Yup.boolean().oneOf(
      [true],
      "Du må godta personopplysningslagringen"
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: any, event: any) => {
    console.log("Form data is valid:", data);
    setFormSubmitted(true);
    event.target.submit();
  };

  if (formSubmitted) {
    return (
      <p className="text-center text-4xl p-10">
        Tusen takk for at du tar kontakt. Du hører fra oss!
      </p>
    );
  }

  return (
    <div className="mx-auto bg-grey text-white p-8 rounded-lg shadow-sm shadow-grey font-primary">
      <h2 className="text-2xl font-bold text-center mb-6">Kontakt Oss</h2>
      <form
        action="https://formsubmit.co/d4508af5612ce880ec4233ef611cf5dd"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Navn"
            {...register("name")}
            className="w-full p-2 rounded-md bg-white text-black"
          />
          {errors.name && (
            <p className="text-danger text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-post"
            {...register("email")}
            className="w-full p-2 rounded-md bg-white text-black"
          />
          {errors.email && (
            <p className="text-danger text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Telefonnummer"
            {...register("phoneNumber")}
            className="w-full p-2 rounded-md bg-white text-black"
          />
          {errors.phoneNumber && (
            <p className="text-danger text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Din Melding"
            {...register("message")}
            className="w-full p-2 h-32 rounded-md bg-white text-black"
          />
          {errors.message && (
            <p className="text-danger text-sm">{errors.message.message}</p>
          )}
        </div>
        <div className="mb-4 flex items-start">
          <input type="checkbox" {...register("privacy")} className="mr-2" />
          <label className="text-sm">
            Jeg godtar at ISSAS lagrer opplysningene jeg har oppgitt i dette
            skjemaet.
          </label>
        </div>
        {errors.privacy && (
          <p className="text-danger text-sm">{errors.privacy.message}</p>
        )}

        {/* Hidden input fields for FormSubmit settings */}
        <input type="hidden" name="_next" value="https://www.vg.no" />
        <input type="hidden" name="_captcha" value="false" />

        <p className="text-white text-sm mb-4">
          Lagring skjer etter gjeldende lovverk. Les vår{" "}
          <a href="/personvern" className="underline text-personvern">
            personvernerklæring
          </a>
          .
        </p>
        {isValid && (
          <div className="flex items-center justify-center mt-2">
            <DefaultButton ariaLabel="Send" size="large">
              Send
            </DefaultButton>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
