import { EmailData } from "./ContactModal";
export type Res = {
  success: boolean;
  message: string;
};
export const sendEmail = async (data: EmailData) => {
  const accessKey = "308380e4-aa53-4dc5-9aeb-1875e60cd4bc";
  const formData = new FormData();
  formData.append("access_key", accessKey || "");
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("subject", data.subject);
  formData.append("message", data.message);
  let res: Res;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();

    if (responseData.success) {
      res = {
        success: true,
        message: "Form Submitted Successfully",
      };
    } else {
      console.log("Error", responseData);
      res = {
        success: false,
        message: responseData.message,
      };
    }
  } catch (error) {
    console.error("Error submitting the form", error);

    res = {
      success: false,
      message: "An error occurred. Please try again.",
    };
  }
  return res;
};
