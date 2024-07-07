import { useForm, SubmitHandler } from "react-hook-form";

// icons
import { IoDiamondSharp } from "react-icons/io5";

// Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ReferrerForm = () => {
  // use react-hook-form for getting form values
    // const { register, control } = useForm();

  return (
    <div className="w-full">
      <form>
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
          <Input type="phone" placeholder="John Doe" />
          {/*  */}
          <Label htmlFor="terms">Referral E-mail</Label>
          <Input type="phone" placeholder="john.doe@gmail.com" />
          {/* Referral Phone Number */}
          <Label htmlFor="terms">Phone Number</Label>
          <Input type="phone" placeholder="Phone Number...." />

          {/* Divider - Two */}
          <div className="border-dashed border border-slate-200 mt-3" />
          <div className="flex justify-center">
            <IoDiamondSharp className="absolute top-[316px] text-3xl" />
          </div>

          {/* Form - One */}
          <Label className="text-center"> Your Details </Label>

          {/* Name */}
          <Label htmlFor="terms">Name</Label>
          <Input type="name" placeholder="Sam Reznick" />

          {/* Email */}
          <Label htmlFor="terms">Email</Label>
          <Input type="email" placeholder="sam.reznick@gmail.com" />

          {/* Phone Number */}
          <Label htmlFor="terms">Phone Number</Label>
          <Input type="phone" placeholder="Phone Number...." />

          {/* Tell us more about your referral */}
          <Label htmlFor="terms">Tell us about yourself!</Label>
          <Textarea placeholder="Type your message here." />

          <Button
            variant={"outline"}
            className="text-slate-100 shadow-inner shadow-slate-100 uppercase border hover:bg-slate-800 hover:text-slate-50 hover:shadow-slate-100 hover:border-slate-950 transition duration-200 ease-linear"
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
