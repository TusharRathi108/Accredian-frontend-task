// Components
import ReferrerForm from "@/components/referrer-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  // use-state to close the modal after successsfull form submission
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // function to open the modal when button is clicked
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  // function to close the modal when submission is done
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-2 flex-grow">
      {/* Image */}
      <div
        className="h-[400px] w-full lg:h-full lg:w-1/2 bg-hero-image bg-cover bg-center bg-no-repeat shadow-md shadow-slate-100"
        style={{
          clipPath: "xywh(0 0 100% 100% round 30% 5% 30% 5% )",
        }}
      />
      {/*  */}
      <div className="h-full w-full lg:w-1/2 flex flex-col justify-center items-center rounded-3xl shadow-lg text-wrap shadow-slate-700 bg-slate-900">
        {/* Heading */}
        <h1 className="text-2xl lg:text-4xl text-center font-playwrite-it-regular text-slate-200 font-bold mb-4">
          Refer Top Talent, Earn Rewards!
        </h1>
        {/* Short Description */}
        <p className="text-lg text-center px-3 mb-8 font-playwrite-it-regular text-slate-200">
          Know a professional who'd be a perfect fit? Refer them and earn
          exclusive rewards. It's a win-win!
        </p>
        {/* Form Modal */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant={"outline"}
              className="text-slate-200 text-2xl px-14 py-10 rounded-2xl font-playwrite-it-regular shadow-inner shadow-slate-100 hover:bg-slate-100 hover:text-slate-900 hover:shadow-inner hover:shadow-slate-900 transition-all duration-500 ease-in-out"
              onClick={handleOpenDialog}
            >
              {" "}
              Refer a Professional{" "}
            </Button>
          </DialogTrigger>
          {/* Content of the modal */}
          <DialogContent className="bg-slate-950/75 border-2 border-slate-400 backdrop-blur-sm h-[700px] w-2/3 flex flex-col text-white">
            {/* Title for the form */}
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">
                Kindly fill up the form!
              </DialogTitle>
            </DialogHeader>
            {/* Form for the referral */}
            <ScrollArea className="max-h-[600px]">
              <ReferrerForm onClose={handleCloseDialog} />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LandingPage;
