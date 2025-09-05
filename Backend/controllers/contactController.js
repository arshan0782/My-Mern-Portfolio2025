
import errorMiddlewareHandler from "../middlewares/error.js";
import Contactform  from "../models/userSchema.js";


export const submitContactForm = async (req, res, next) => {
  const { name, number, email, message } = req.body;

  if (!name || !number || !email || !message) {
    return next(
      new errorMiddlewareHandler("Please fill all the fields properly.", 400)
    );
  }

  try {
    await Contactform.create({ name, number, email, message });
    res
      .status(201)
      .json({ success: "Your message has been sent successfully!" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const ValidationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new errorMiddlewareHandler(ValidationErrors, 400));
    }

    return next(error);
  }
};
    