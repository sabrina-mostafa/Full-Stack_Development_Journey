import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleFormSubmission(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));  // fro checking/understanding the multiple submitting error at a time
    console.log("the submitted data: ", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmission)}>

        <div>
          <label> First Name </label>
          <input 
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName",
            {
              required: true,
              minLength: { value: 3, message: "Minimum length at least 3" },
              maxLength: { value: 6, message: "Maximum length is 6" },
            })}  />
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
        </div>  <br />

        <div>
          <label> Middle Name </label>
          <input 
          className={errors.middleName? "input-error" : ""}
          {...register("middleName", 
            {
              required: true,
              minLength: { value: 3, message: "Minimum length at least 3" },
              maxLength: { value: 6, message: "Maximum length is 6" },
            }
          )} />
          {errors.middleName && <p className="error-msg">{errors.middleName.message}</p>}
        </div>  <br />

        <div>
          <label> Last Name </label>
          <input 
          className={errors.middleName? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              required: true,
              value: /^[A-Za-z]+$/i ,
              message: "Last Name is not as per the rules"
            }
          })} />
          {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
        </div>  <br />

        <input type="submit" disabled={isSubmitting} 
        value={isSubmitting ? "Submitting":"Submit"} />

      </form>
    </div>
  );
}

export default App;
