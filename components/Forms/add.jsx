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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
const formSchema = z.object({
  name: z.string(),
  location: z.string(),
});

const Add = () => {
  //   const { data: session, status } = useSession();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data) {
    try {
      const res = await axios.post("/api/hotel", {
        name: data.name,
        location: data.location,
      });
      console.log(res);

      // if (res.ok) {
      //   router.push("/");
      // }
      // if (res.error) {
      //   setError(error)
      // }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card className="mx-auto p-3 h-max  w-[380px]">
      {" "}
      <CardTitle className="text-center ">Sign in</CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="location" {...field} type="password" />
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
            create{" "}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default Add;
