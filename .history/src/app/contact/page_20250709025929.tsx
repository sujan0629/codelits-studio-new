import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We&apos;d love to hear from you. Whether you have a question about our services or want to start a project, we&apos;re here to help.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
            <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@codelits.studio</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94000</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className="font-headline text-2xl font-bold mb-8">Send us a Message</h2>
            <ContactForm />
        </div>

      </div>
    </div>
  );
}
