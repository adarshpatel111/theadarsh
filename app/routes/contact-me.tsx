import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { sendEmail } from "utils/email";
import { useFetcher } from "react-router";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Adarsh || Contact Me" },
    { name: "description", content: "Welcome to Adarsh's PortFolio!" },
  ];
}
export async function action({ request }) {
  const body = await request.formData();
  const name = body.get("name");
  const email = body.get("email");
  const subject = body.get("subject");
  const message = body.get("message");
  try {
    await sendEmail({
      formData: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    });
    return { message: `Hello, ${name}. Your message has been sent!` };
  } catch (error) {
    return { error: "Failed to send email" };
  }
}
export default function ContactPage() {
  const fetcher = useFetcher();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  useEffect(() => {
    if (fetcher.state === "idle") {
      if (fetcher.data?.message) {
        // Reset form fields on success
        nameRef.current.value = "";
        emailRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";

        toast(fetcher.data.message);
      } else if (fetcher.data?.error) {
        // Show error toast on failure
        toast(fetcher.data.error);
      }
    }
  }, [fetcher.state, fetcher.data]);
  const isSubmitting = fetcher.state === "idle";
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-primary p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-full text-white mr-4">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Email
                    </h3>
                    <a
                      href="mailto:adarshpatel11012001@gmail.com"
                      className="text-secondary hover:text-black transition"
                    >
                      adarshpatel11012001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-full text-white mr-4">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Phone
                    </h3>
                    <a
                      href="tel:+918320018439"
                      className="text-secondary hover:text-black transition"
                    >
                      +91 8320018439
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-full text-white mr-4">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Location
                    </h3>
                    <p className="text-secondary">Vadodara, Gujarat</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-secondary">
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition"
                  >
                    <FaGithub className="text-gray-700 text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition"
                  >
                    <FaLinkedin className="text-gray-700 text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition"
                  >
                    <FaTwitter className="text-gray-700 text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-primary text-secondary p-8 rounded-2xl shadow-lg border"
            >
              <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-secondary mb-6">
                I'm available for freelance work and collaborations. Get in
                touch to discuss your project.
              </p>
              <div className="h-1 bg-secondary bg-opacity-20 w-full mb-6"></div>
              <p className="text-secondary">
                Typically reply within{" "}
                <span className="font-bold">24 hours</span> on weekdays.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Send Me a Message
            </h2>

            <fetcher.Form method="post" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={nameRef}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black bg-gray-50 text-black"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  ref={emailRef}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black bg-gray-50 text-black"
                  placeholder="you@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  ref={subjectRef}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black bg-gray-50 text-black"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  ref={messageRef}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-black bg-gray-50 text-black"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-primary bg-secondary cursor-pointer hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300"
                >
                  {!isSubmitting ? (
                    <>SENDING.....</>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </fetcher.Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
