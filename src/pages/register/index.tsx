import { Button, Form, Input } from "antd";
import { JordanLogo, Nikelogo } from "../../components/icons/IconSvg";

export const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[460px] min-w-[250px] mx-[36px] w-full">
        <div className="flex items-center">
          <Nikelogo />
          <JordanLogo />
        </div>
        <h1 className="p-3 pl-0 text-3xl">
          Enter your email to join us or sign in.
        </h1>
        <Form className="pt-3">
          <Form.Item layout="vertical" label="Email">
            <Input type="text" placeholder="Email" className="p-4" />
          </Form.Item>
          <br />
          <br />
          <Form.Item layout="vertical" label="Password">
            <Input type="password" placeholder="Password" className="p-4" />
          </Form.Item>
          <br />
          <p className="p-6 pl-0 text-gray-500">
            By continuing, I agree to Nike's{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use.
            </a>
          </p>
          <div className="flex justify-end">
            <Button className="bg-black text-white rounded-full capitalize px-6 py-5 font-bold text">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
