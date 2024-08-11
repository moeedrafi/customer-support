"use client";

import { z } from "zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  message: z.string().min(2, { message: "Enter a message" }),
});

export const ChatForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <div className="lg:px-40 p-5 border-t-2 flex items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex gap-2 items-center"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter a Message"
                    className="rounded-xl py-6 bg-[#222141]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="rounded-full p-3">
            <Send size={18} />
          </Button>
        </form>
      </Form>

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <Input className="w-full rounded-2xl" placeholder="Enter a Message" />
        <button
          type="submit"
          className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"
        >
          <Plane />
        </button>
      </form> */}
    </div>
  );
};
