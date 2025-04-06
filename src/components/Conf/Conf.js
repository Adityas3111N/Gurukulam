const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    volunteerServiceId: import.meta.env.VITE_EMAILJS_VOLUNTEER_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    volunteerTemplateId: import.meta.env.VITE_EMAILJS_VOLUNTEER_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };
  
  export default emailConfig;
  