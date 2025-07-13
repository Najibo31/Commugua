
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Le nom complet doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse e-mail valide.",
  }),
  amount: z.coerce.number().positive({
    message: "Le montant doit être un nombre positif.",
  }),
  frequency: z.enum(["Ponctuel", "Mensuel", "Annuel"]),
  comment: z.string().optional(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "Vous devez confirmer votre promesse de don.",
  }),
});

export function DonationForm({ children }: { children: React.ReactNode }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      amount: undefined,
      frequency: "Ponctuel",
      comment: "",
      confirm: false,
    },
  });

  // NOTE: The onSubmit function is defined but won't be triggered yet,
  // as the form submission button is disabled.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Formulaire soumis (simulation) :", values);
    // Future logic to handle form submission will go here.
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <Form {...form}>
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary text-center">
              Faire une Promesse de Don
            </DialogTitle>
            <FormDescription className="text-center pt-2">
              Association Cultuelle COMUGUA – Communauté Musulmane de Guadeloupe
            </FormDescription>
          </DialogHeader>
          
          <Alert className="bg-secondary/50 border-secondary">
            <Info className="h-4 w-4 text-secondary-foreground" />
            <AlertDescription className="text-xs text-secondary-foreground">
              Ce projet, attendu depuis plus de 35 ans, pourra enfin voir le jour grâce à votre mobilisation. Ne promettez que les sommes que vous pourriez donner.
            </AlertDescription>
          </Alert>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-1">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom et prénom" {...field} />
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
                  <FormLabel>Adresse e-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="votre.email@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Montant de la promesse (€)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="ex: 100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Fréquence du versement</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Ponctuel" />
                        </FormControl>
                        <FormLabel className="font-normal">Ponctuel</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Mensuel" />
                        </FormControl>
                        <FormLabel className="font-normal">Mensuel</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Annuel" />
                        </FormControl>
                        <FormLabel className="font-normal">Annuel</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commentaire (facultatif)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Vous pouvez laisser un message ici..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-background">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Je confirme faire cette promesse de don à titre volontaire.
                    </FormLabel>
                    <FormMessage className="pt-2"/>
                  </div>
                </FormItem>
              )}
            />

            <DialogFooter className="pt-4">
               <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Fermer
                </Button>
              </DialogClose>
              <Button type="submit" disabled>Soumettre (bientôt)</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
