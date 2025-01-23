import Squiggle from "@/app/components/Squiggle";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import UserForm from "@/app/components/UserForm";
import handleUserContactSubmission from "@/app/lib/handleUserContactSubmission";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = async ({ slice }: ContactFormProps): Promise<JSX.Element> => {
  const client = createClient();
  const services = await client.getAllByType("service");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="dark py-24 relative">
      <Squiggle />
      <div className="max-w-lg mx-auto font-sauce">
        <div className="bg-secondary text-primary">
          <div className="flex flex-col items-center py-6 gap-4">
            <h3 className="text-4xl w-3/4 text-center mb-8 font-body">Ready to get started?</h3>
            <p className="w-4/5 text-center">Schedule a free consultation with our team today.</p>
          </div>
          <UserForm services={services} handleSubmit={handleUserContactSubmission} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
