import React, { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import emailConfig from "../../Conf/Conf.js";

// Lazy load components
const DonateForm = lazy(() => import("./DonateForm"));
const ThankYouOverlay = lazy(() => import("./ThankYouOverlay"));

const DonatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      if (/^\d*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const sendEmail = async () => {
    const { default: emailjs } = await import("emailjs-com");
    const { toast } = await import("react-hot-toast");

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      amount: formData.amount,
      message: formData.message,
    };

    try {
      setIsSending(true);
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      toast.success("Thank you for your generosity!");
      setShowThankYou(true);
      setFormData({ name: "", email: "", amount: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong while sending the email.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const { toast } = await import("react-hot-toast");

    if (!formData.name || !formData.email || !formData.amount) {
      toast.error("Please fill all required fields.");
      return;
    }

    await sendEmail();
  };

  return (
    <>
      <section className="min-h-screen bg-[#fffdf8] py-20 px-6 sm:px-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#f0e9dd] shadow-2xl rounded-3xl max-w-3xl w-full p-8 sm:p-10 relative"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#003d30] mb-4">
              Be the Reason a Child Smiles Today
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10 text-sm sm:text-base">
              Your donation isn't just money — it's a chance, a hope, a future.
              Every rupee goes directly to empowering one child's dreams.
            </p>
          </motion.div>

          <Suspense fallback={<div className="text-center py-10">Loading Form...</div>}>
            <DonateForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSending={isSending}
            />

          </Suspense>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-[#003d30] mb-2">
              UPI / PayTM QR
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Scan the QR below or send to <strong>example@upi</strong>
            </p>
            <div className="flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src="/QR.webp"
                alt="PayTM QR Code"
                className="w-40 h-40 object-contain border rounded-xl shadow-md"
              />
            </div>

            <motion.button
              whileTap={{ scale: isSending ? 1 : 0.95 }}
              onClick={handleSubmit}
              disabled={isSending}
              className={`cursor-pointer mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${isSending
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-yellow-400 text-[#003d30] hover:bg-yellow-500"
                }`}
            >
              <FaCheckCircle />
              {isSending ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "I've Completed the Payment"
              )}
            </motion.button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <Suspense fallback={null}>
              <ThankYouOverlay onClose={() => setShowThankYou(false)} />
            </Suspense>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DonatePage;
