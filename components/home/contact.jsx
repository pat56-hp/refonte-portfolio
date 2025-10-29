import React, { useState } from "react";
import TitleSection from "../title-section";
import { Facebook, Github, Linkedin, MapPin, Twitter } from "lucide-react";
import RsItem from "../rs-item";
import Label from "../ui/label";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import Button from "../ui/button";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);

  //Soumission du formulaire de contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const payload = {
      name: form.elements.namedItem("name")?.value,
      email: form.elements.namedItem("email")?.value,
      subject: form.elements.namedItem("subject")?.value,
      message: form.elements.namedItem("message")?.value,
    };

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => null); // éviter le crash si pas JSON

      if (!resp.ok) {
        throw new Error(data?.error || `Erreur HTTP ${resp.status}`);
      }

      setTimeout(() => {
        setLoading(false);
        setSend(true);
        toast.success("Votre message a bien été envoyé.");

        // Réinitialisation du formulaire
        form.reset();
      }, 800);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error(error.message || "Oups, quelque chose a mal fonctionné.");
    }
  };

  return (
    <div className="grid gap-y-22" id="contact">
      <TitleSection
        title={"Me contacter"}
        subtitle={
          "Prêt à donner vie à vos idées ? Contactez-moi dès maintenant."
        }
      />
      <div className="bg-secondary border border-primary rounded-lg sm:p-12 p-2">
        <div className="flex lg:flex-row flex-col-reverse justify-between lg:gap-25 gap-6">
          <div className="flex lg:flex-col flex-row flex-wrap gap-4">
            <RsItem
              classParent="!gap-2 sm:!gap-5 hover:text-foreground group"
              classIconParent="!bg-white w-10 h-10 group-hover:border group-hover:border-primary"
              icon={<Facebook className="w-5 h-5" />}
            >
              <span className="group-hover:underline flex-1">
                /patrick.aime.714
              </span>
            </RsItem>
            <RsItem
              classParent="!gap-2 sm:!gap-5 hover:text-foreground group"
              classIconParent="!bg-white w-10 h-10 group-hover:border group-hover:border-primary"
              icon={<Twitter className="w-5 h-5" />}
            >
              <span className="group-hover:underline flex-1">@ParkeurH</span>
            </RsItem>
            <RsItem
              classParent="!gap-2 sm:!gap-5 hover:text-foreground group"
              classIconParent="!bg-white w-10 h-10 group-hover:border group-hover:border-primary"
              icon={<Linkedin className="w-5 h-5" />}
            >
              <span className="group-hover:underline flex-1">
                /in/Patrick-aime
              </span>
            </RsItem>
            <RsItem
              classParent="!gap-2 sm:!gap-5 hover:text-foreground group"
              classIconParent="!bg-white w-10 h-10 group-hover:border group-hover:border-primary"
              icon={<Github className="w-5 h-5" />}
            >
              <span className="group-hover:underline flex-1">@Pat56-hp</span>
            </RsItem>
            <RsItem
              classParent="!gap-2 sm:!gap-5 hover:text-foreground group"
              classIconParent="!bg-white w-10 h-10 group-hover:border group-hover:border-primary"
              icon={<i className="fi fi-rr-marker text-sm" />}
            >
              <span className="group-hover:underline flex-1">
                Abidjan, Côte d’Ivoire
              </span>
            </RsItem>
            <RsItem
              classParent="!gap-2 sm:!gap-5 hover:text-foreground group"
              classIconParent="!bg-white w-10 h-10 group-hover:border group-hover:border-primary"
              icon={<i className="fi fi-rr-phone-call text-sm" />}
            >
              <span className="group-hover:underline flex-1">
                (225) 07 083 777 51
              </span>
            </RsItem>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="grid gap-1">
                <Label label="Nom & prénom(s)" htmlFor="name" required={true} />
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nom & prénom(s)"
                  required
                />
              </div>
              <div className="grid gap-1">
                <Label label="Email" htmlFor="email" required={true} />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Adresse email"
                  required
                />
              </div>
            </div>
            <div className="grid gap-1">
              <Label label="Objet" htmlFor="subject" required={true} />
              <select
                required
                id="subject"
                name="subject"
                className="bg-secondary-foreground border border-primary rounded-sm px-4 py-3 placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Sélectionner un objet</option>
                <option value="demande">Demande</option>
                <option value="reclamation">Réclamation</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div className="grid gap-1">
              <Label label="Message" htmlFor="message" required={true} />
              <Textarea
                id="message"
                name="message"
                placeholder="Votre message"
                required
              />
            </div>
            <div className="">
              <Button
                disabled={loading}
                type="submit"
                className={`${
                  loading
                    ? `!bg-primary/50 hover:cursor-progress !border-none`
                    : `!bg-foreground hover:!bg-primary hover:text-foreground  text-primary`
                } sm:w-auto w-full gap-3 flex !px-20`}
              >
                {loading ? (
                  <>
                    <i className="fi fi-rr-spinner animate-spin flex items-center"></i>
                    En cours d'envoi
                  </>
                ) : (
                  <>
                    <i className="fi fi-rr-comment"></i>
                    Envoyer
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
