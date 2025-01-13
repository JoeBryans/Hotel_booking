import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export const GetUser = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <h1>get user</h1>
    </>
  );
};
