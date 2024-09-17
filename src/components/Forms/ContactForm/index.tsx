import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import DefaultButton from "../../Buttons/DefaultButton";
import { useTranslator } from "../../Translator"; // Import useTranslator

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if form is submitted
  const { translate } = useTranslator(); // Use the translate function from context

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, translate("Navn må være minst 2 tegn"))
      .max(50, translate("Navn kan ikke være mer enn 50 tegn"))
      .required(translate("Navn er påkrevd")),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{7,15}$/, translate("Telefonnummeret må være gyldig"))
      .required(translate("Telefonnummer er påkrevd")),
    email: Yup.string()
      .email(translate("E-post må være en gyldig e-postadresse"))
      .required(translate("E-post er påkrevd"))
      .max(254, translate("E-post kan ikke være mer enn 254 tegn")),
    message: Yup.string()
      .min(10, translate("Melding må være minst 10 tegn"))
      .max(1000, translate("Melding kan ikke være mer enn 1000 tegn"))
      .required(translate("Din Melding er påkrevd")),
    privacy: Yup.boolean().oneOf(
      [true],
      translate("Du må godta personopplysningslagringen")
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
        {translate("Tusen takk for at du tar kontakt. Du hører fra oss!")}
      </p>
    );
  }

  return (
    <div className="mx-auto bg-grey text-white p-8 rounded-lg shadow-sm shadow-grey font-primary">
      <h2 className="text-2xl font-bold text-center mb-6">
        {translate("Kontakt Oss")}
      </h2>
      <form
        action="https://formsubmit.co/d4508af5612ce880ec4233ef611cf5dd"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder={translate("Navn")}
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
            placeholder={translate("E-post")}
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
            placeholder={translate("Telefonnummer")}
            {...register("phoneNumber")}
            className="w-full p-2 rounded-md bg-white text-black"
          />
          {errors.phoneNumber && (
            <p className="text-danger text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            placeholder={translate("Din Melding")}
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
            {translate(
              "Jeg godtar at ISSAS lagrer opplysningene jeg har oppgitt i dette skjemaet."
            )}
          </label>
        </div>
        {errors.privacy && (
          <p className="text-danger text-sm">{errors.privacy.message}</p>
        )}

        {/* Hidden input fields for FormSubmit settings */}
        <input type="hidden" name="_next" value="https://www.vg.no" />
        <input type="hidden" name="_captcha" value="false" />

        <p className="text-white text-sm mb-4">
          {translate("Lagring skjer etter gjeldende lovverk. Les vår ")}{" "}
          <a href="/personvern" className="underline text-personvern">
            {translate("personvernerklæring")}
          </a>
          .
        </p>
        {isValid && (
          <div className="flex items-center justify-center mt-2">
            <DefaultButton ariaLabel={translate("Send")} size="large">
              {translate("Send")}
            </DefaultButton>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
