import { z } from "zod";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReferralFormSchema } from "@/schemas/referal-form";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// icons
import { IoDiamondSharp } from "react-icons/io5";

// Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Zod schema for form validation
type FormSchema = z.infer<typeof ReferralFormSchema>;

// interface for close dialog
interface ReferrerFormProps {
  onClose: () => void;
}

const ReferrerForm = ({ onClose }: ReferrerFormProps) => {
  // use react-hook-form for getting form values
  const { control, handleSubmit, formState } = useForm<FormSchema>({
    resolver: zodResolver(ReferralFormSchema),
    defaultValues: {
      rname: "",
      remail: "",
      rphone: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Form-errors from zod
  const formError = () => {
    // errors from form validation
    const errors = formState.errors;

    // error messages
    const errorMessages = Object.values(errors)
      .map((error) => error.message)
      .filter(Boolean) as string[];

    // toast notification for errors from zod
    if (errorMessages.length > 0) {
      errorMessages.forEach((message) => toast.error(message));
    }
  };

  // use-effect for showing errors
  useEffect(formError, [formState.errors]);

  // submit form data
  const onSubmit: SubmitHandler<FormSchema> = async (formData) => {
    try {
      // post form data to DB
      await axios.post("http://localhost:3000/api/refer", formData);

      toast.success("Thank you for your referral!");
      onClose();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        // toast.error(error.response?.data);
      }
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex flex-col gap-4 ">
          {/* Divider - One */}
          <div className="border-dashed border border-slate-200 mt-3" />
          <div className="flex justify-center">
            <IoDiamondSharp className="absolute top-[3px] text-3xl" />
          </div>

          {/* Form - One */}
          <Label className="text-center"> Referral Details </Label>
          {/* Referrer Name */}
          <Label htmlFor="terms">Referral Name</Label>
          <Controller
            name="rname"
            control={control}
            render={({ field }) => (
              <Input
                type="name"
                placeholder="john doe"
                className={`${
                  formState.errors.rname ? "border border-red-400" : ""
                }`}
                {...field}
              />
            )}
          />
          {/* Referral Email */}
          <Label htmlFor="terms">Referral E-mail</Label>
          <Controller
            name="remail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="john.doe@gmail.com"
                className={`${
                  formState.errors.remail ? "border border-red-400" : ""
                }`}
                {...field}
              />
            )}
          />
          {/* Referral Phone Number */}
          <Label htmlFor="terms">Phone Number</Label>
          <Controller
            name="rphone"
            control={control}
            render={({ field }) => (
              <Input
                type="phone"
                max={10}
                placeholder="phone number...."
                className={`${
                  formState.errors.rphone ? "border border-red-400" : ""
                }`}
                {...field}
              />
            )}
          />

          {/* Divider - Two */}
          <div className="border-dashed border border-slate-200 mt-3" />
          <div className="flex justify-center">
            <IoDiamondSharp className="absolute top-[316px] text-3xl" />
          </div>

          {/* Form - One */}
          <Label className="text-center"> Your Details </Label>
          {/* Name */}
          <Label htmlFor="terms">Name</Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                type="name"
                placeholder="sam reznick"
                className={`${
                  formState.errors.name ? "border border-red-400" : ""
                }`}
                {...field}
              />
            )}
          />

          {/* Email */}
          <Label htmlFor="terms">Email</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="sam.reznick@gmail.com"
                className={`${
                  formState.errors.email ? "border border-red-400" : ""
                }`}
                {...field}
              />
            )}
          />

          {/* Phone Number */}
          <Label htmlFor="terms">Phone Number</Label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                type="phone"
                placeholder="phone number...."
                className={`${
                  formState.errors.phone ? "border border-red-400" : ""
                }`}
                {...field}
              />
            )}
          />

          {/* Tell us more about your referral */}
          <Label htmlFor="terms">Tell us about yourself!</Label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Textarea
                placeholder="Type your message here."
                className={`${
                  formState.errors.message ? "border border-red-400" : ""
                }`}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            variant={"outline"}
            className="bg-slate-900 text-slate-100 shadow-inner shadow-slate-100 uppercase border hover:bg-slate-100 hover:text-slate-900 hover:shadow-slate-900 hover:border-slate-950 transition duration-200 ease-linear"
          >
            {" "}
            Refer{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReferrerForm;
