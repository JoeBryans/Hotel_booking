"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardTitle } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import googleLogo from "../../assets/google.png";
import { useEffect } from "react";
import axios from "axios";
const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  // fullname:z.string()
  email: z.string().email("invalid email"),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters." }),
});

const SignUp = () => {
  //   const { data: session, status } = useSession();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  //   async function onSubmit(data) {
  //     try {
  //       const res = await signIn("credentials", {
  //         email: data.email,
  //         password: data.password,
  //         redirect: false,
  //       });
  //       console.log(res);

  //       // if (res.ok) {
  //       //   router.push("/");
  //       // }
  //       // if (res.error) {
  //       //   setError(error)
  //       // }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  async function onSubmit(data) {
    try {
      const res = await axios.post("/api/sign-up", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      //   router.push("/");

      // if (res.error) {
      //   setError(error)
      // }
    } catch (err) {
      console.log(err);
    }
  }
  async function SignWithGoogle() {
    // try {
    //   const res = await fecth({
    //     method: "POST",
    //     url: "http://localhost:3000/api/sign-up",
    //     body: {
    //       name: data.name,
    //       email: data.email,
    //       phone: data.phone,
    //       password: data.password,
    //     },
    //   });
    //   router.push("/");
    // if (res.error) {
    //   setError(error)
    // }
    // } catch (err) {
    //   console.log(err);
    // }
  }

  //   if (status === "authenticated") {
  //     router.push("/");
  //   }

  return (
    <div className="w-full px-3 min-h-[100vh] flex justify-center items-center ">
      <Card className="mx-auto p-3 h-max  w-[380px]">
        {" "}
        <CardTitle className="text-center ">Sign in</CardTitle>
        <div className="flex flex-col gap-1 items-center">
          <Button
            className="w-full flex gap-4 items-center bg-blue-600 font-semibold hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 mt-2"
            onClick={SignWithGoogle}
          >
            <Image src={googleLogo} width={20} alt="google" /> Sign in with
            Google
          </Button>
          <span className="">or</span>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FullName</FormLabel>
                  <FormControl>
                    <Input placeholder="fullname" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="phone" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 font-semibold hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 mt-2"
            >
              Sign in
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
