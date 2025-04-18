
import { Mail, Instagram, Youtube, Clapperboard } from 'lucide-react';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const ContactFooter = () => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this to your backend
    console.log(values)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    form.reset()
  }

  return (
    <>
      <section id="contact" className="pt-20 pb-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Email Us</h3>
                <p className="text-gray-600 mb-4 text-center">For support and general inquiries</p>
                <a href="mailto:connect@justjam.app" className="text-primary hover:text-primary-dark font-medium block text-center">
                  connect@justjam.app
                </a>
              </div>

              {/* Social Media Links */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Follow Us</h3>
                <div className="flex justify-center gap-6">
                  <a href="#" className="social-icon instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="social-icon tiktok">
                    <FaTiktok size={22} />
                  </a>
                  <a href="#" className="social-icon youtube">
                    <Youtube size={24} />
                  </a>
                  <a href="#" className="social-icon twitter">
                    <FaXTwitter size={22} />
                  </a>
                  <a href="#" className="social-icon bluesky">
                    <Clapperboard size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary-dark text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="/" className="text-2xl font-bold">Just<span className="text-accent">Jam</span></a>
              <p className="mt-2 text-sm text-gray-300">Made by music lovers, for music lovers.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a href="#features" className="text-gray-300 hover:text-white text-sm">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white text-sm">How It Works</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white text-sm">Testimonials</a>
              <a href="#download" className="text-gray-300 hover:text-white text-sm">Download</a>
              <a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} JustJam. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
