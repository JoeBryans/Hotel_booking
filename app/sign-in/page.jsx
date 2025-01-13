import SignIn from "@/components/Forms/signIn";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

const page = () => {
  // const { data: sassion, status } = useSession;
  // console.log(status);
  // const router = useRouter();
  // if (status === "authenticated") {
  //   router.push("/");
  // }
  return (
    <div className="w-full px-3 min-h-[100vh] flex justify-center items-center ">
      <SignIn />
    </div>
  );
};

export default page;
