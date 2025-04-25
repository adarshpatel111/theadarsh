// utils/email.ts
import nodemailer from "nodemailer";

export const sendEmail = async ({ formData }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.REACT_APP_EMAIL_USER,
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
  });


  const mailOptions = {
    from: `"Contact Form" <${process.env.REACT_APP_EMAIL_USER}>`,
    to: process.env.REACT_APP_EMAIL_RECEIVER,
    subject: `New Contact: ${formData.subject || "No Subject"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Message from ${
          formData.name || "Anonymous"
        }</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: inline-block; width: 80px;">Email:</strong>
          <a href="mailto:${
            formData.email
          }" style="color: #2563eb; text-decoration: none;">
            ${formData.email}
          </a>
        </div>
        
        ${
          formData.subject
            ? `
        <div style="margin-bottom: 15px;">
          <strong style="display: inline-block; width: 80px;">Subject:</strong>
          ${formData.subject}
        </div>
        `
            : ""
        }
        
        <div style="margin-top: 20px;">
          <strong style="display: block; margin-bottom: 10px;">Message:</strong>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 4px; line-height: 1.6;">
            ${formData.message}
          </p>
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
          This email was sent from your website's contact form
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Failed to send email.");
  }
};
