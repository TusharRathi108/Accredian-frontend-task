// Components
import { Button } from "@/components/ui/button";
import ReferrerForm from "@/components/referrer-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LandingPage = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-2 flex-grow">
      <div
        className="h-[400px] w-full lg:h-full lg:w-1/2 bg-hero-image bg-cover bg-center bg-no-repeat shadow-md shadow-slate-100"
        style={{
          clipPath: "xywh(0 0 100% 100% round 30% 5% 30% 5% )",
        }}
      />
      <div className="h-full w-full lg:w-1/2 flex flex-col justify-center items-center rounded-3xl shadow-lg text-wrap shadow-slate-700 bg-slate-900">
        <h1 className="text-2xl lg:text-4xl text-center font-playwrite-it-regular text-slate-200 font-bold mb-4">
          Unlock Rewards with Referrals!
        </h1>
        <p className="text-lg text-center px-3 mb-8 font-playwrite-it-regular text-slate-200">
          Invite your friends and earn exclusive perks. It's simple and
          rewarding!
        </p>
        <Dialog>
          <DialogTrigger>
            <Button
              variant={"outline"}
              className="text-slate-200 text-2xl px-14 py-10 rounded-2xl font-playwrite-it-regular shadow-md shadow-slate-100 hover:bg-slate-100 hover:text-slate-900 hover:shadow-inner hover:shadow-slate-900 transition-all duration-500 ease-in-out"
            >
              {" "}
              Refer a friend{" "}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-950/50 border-2 border-slate-400 backdrop-blur-sm h-5/6 w-2/3 flex flex-col text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">
                Kindly fill up the form!
              </DialogTitle>
            </DialogHeader>
            <ScrollArea>
              <ReferrerForm />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LandingPage;
