// Modules
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// Form Schema with zod
const schema = z.object({
  username: z
    .string()
    .trim()
    .email()
    .min(5, { message: "email must be at least 5 characters" })
    .max(80, { message: "email must be fewer than 80 characters" }),
  password: z
    .string()
    // No Trim
    .min(8, { message: "password must be at least 8 characters" })
    .max(80, { message: "password must be fewer than 80 characters" }),
  code: z
    .string()
    .trim()
    .min(1, { message: "code must be at least 1 character" })
    .max(16, { message: "code must be fewer than 16 characters" }),
});
type FormData = z.infer<typeof schema>;

const PageRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onTouched",
    resolver: zodResolver(schema),
  });
  const submitRegister = (data: FieldValues) => {
    console.log("FORM SUBMITTED", data);
  };

  return (
    <div className="row">
      <div className="col col-12 col-lg-4 offset-lg-4">
        <h1 className="mt-3 mb-3 text-center">
          <i className="bi bi-person-plus-fill"></i> Register
        </h1>
        <form onSubmit={handleSubmit(submitRegister)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <input
              {...register("username")}
              id="email"
              type="email"
              className="form-control"
            />
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              className="form-control"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Code
            </label>
            <input
              {...register("code")}
              id="code"
              type="text"
              className="form-control"
            />
            {errors.code && (
              <p className="text-danger">{errors.code.message}</p>
            )}
          </div>
          <div className="text-center">
            <Button variant="primary" disabled={!isValid} type="submit">
              {isValid ? "Register" : "Not Valid Please Fix"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageRegister;