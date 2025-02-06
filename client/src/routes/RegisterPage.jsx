import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div className="flex pt-8 flex-col md:flex-row h-[calc(100vh-80px)]">
      <div className="w-full md:w-1/2 h-full relative">
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};

export default RegisterPage;
