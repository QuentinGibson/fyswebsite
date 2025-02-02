"use client";

import { useForm } from "@tanstack/react-form";
import { asText, Content } from "@prismicio/client";
import { userSchema } from "../lib/userSchema";
import clsx from "clsx";

interface UserFormProps {
  services: Content.ServiceDocument[];
  handleSubmit: (userInput: any) => Promise<void>;
}

export default function UserForm({ services, handleSubmit }: UserFormProps) {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      message: "",
      services: "",
    },
    onSubmit: async (value) => {
      await handleSubmit(value).then(() => form.reset());
    },
    validators: {
      onChange: userSchema,
    },
  });

  return (
    <>
      {form.state.isSubmitted && form.state.errors.length === 0 && (
        <p className="text-emerald-300 py-2 px-4">Sent successfully! We got your message!</p>
      )}
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          form.handleSubmit();
        }}>
        <div className="py-6 mx-4 grid grid-flow-row gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <form.Field name="firstName">
                {(field) => (
                  <div className="flex flex-col text-sm">
                    <label className="font-bold mb-2" htmlFor={field.name}>
                      First Name*
                    </label>
                    <input
                      className={clsx(
                        "py-4 px-5 text-slate-800 placeholder:text-dark mx-1 border-[0.8px] border-primary/20",
                        field.state.meta.errors.length > 0 &&
                          field.state.meta.isTouched &&
                          "border-2 border-red-500"
                      )}
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="First Name"
                      required
                    />
                    {field.state.meta.isTouched &&
                      field.state.meta.errors.map((error, index) => (
                        <p key={index} className="text-red-500">
                          {error}
                        </p>
                      ))}
                  </div>
                )}
              </form.Field>
            </div>
            <form.Field name="lastName">
              {(field) => (
                <div className="flex flex-col text-sm">
                  <label className="font-bold mb-2" htmlFor={field.name}>
                    Last Name*
                  </label>
                  <input
                    className={clsx(
                      "py-4 px-5 text-slate-800 placeholder:text-dark mx-1 border-[0.8px] border-primary/20",
                      field.state.meta.isTouched &&
                        field.state.meta.errors.length > 0 &&
                        "border-2 border-red-500"
                    )}
                    type="text"
                    name={field.name}
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Last Name"
                    required
                  />
                  {field.state.meta.isTouched &&
                    field.state.meta.errors.map((error, index) => (
                      <p key={index} className="text-red-500">
                        {error}
                      </p>
                    ))}
                </div>
              )}
            </form.Field>
          </div>
          <form.Field name="services">
            {(field) => (
              <div className="flex flex-col text-sm">
                <label className="font-bold mb-2 text-sm" htmlFor={field.name}>
                  Service you are interested in*
                </label>
                <select
                  className={clsx(
                    "py-4 px-5 text-slate-800 placeholder:text-dark mx-1 border-[0.8px] border-primary/20",
                    field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 &&
                      "border-2 border-red-500"
                  )}
                  name={field.name}
                  id={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  defaultValue={services[0].id}
                  required>
                  {services &&
                    services.map((service) => {
                      return (
                        <option key={service.id} value={service.id}>
                          {asText(service.data.name)}
                        </option>
                      );
                    })}
                </select>
                {field.state.meta.isTouched &&
                  field.state.meta.errors.map((error, index) => (
                    <p key={index} className="text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            )}
          </form.Field>
          <form.Field name="emailAddress">
            {(field) => (
              <div className="flex flex-col text-sm">
                <label className="font-bold mb-2 text-sm" htmlFor={field.name}>
                  Email Address*
                </label>
                <input
                  className={clsx(
                    "py-4 px-5 text-slate-800 placeholder:text-dark mx-1 border-[0.8px] border-primary/20",
                    field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 &&
                      "border-2 border-red-500"
                  )}
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  placeholder="Email here"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                />
                {field.state.meta.isTouched &&
                  field.state.meta.errors.map((error, index) => (
                    <p key={index} className="text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            )}
          </form.Field>
          <form.Field name="message">
            {(field) => (
              <div className="flex flex-col text-sm">
                <label className="font-bold mb-2 text-sm" htmlFor={field.name}>
                  Message*
                </label>
                <textarea
                  name={field.name}
                  id={field.name}
                  placeholder="Leave a message here"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className={clsx(
                    "w-full text-slate-800 placeholder:text-dark h-20 p-6",
                    field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 &&
                      "border-2 border-red-500"
                  )}></textarea>
                {field.state.meta.isTouched &&
                  field.state.meta.errors.map((error, index) => (
                    <p key={index} className="text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            )}
          </form.Field>

          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <div className="flex flex-col">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="py-3 px-6 bg-slate-900 text-white font-bold text-lg">
                  {isSubmitting ? "..." : "Submit"}
                </button>
              </div>
            )}
          </form.Subscribe>
          <div className="flex flex-col">
            <p className="text-primary text-[12px] font-medium">* We don&apos;t share your data.</p>
          </div>
        </div>
      </form>
    </>
  );
}
