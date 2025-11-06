"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  // Formspree form ID'nizi buraya ekleyin
  // Örnek: "xpznvwrd" şeklinde olmalı
  const [state, handleSubmit] = useForm("mgvpapnd");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return (
      <div className="container mx-auto py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
          >
            <CheckCircle2 className="h-20 w-20 text-green-500" />
          </motion.div>
          <h2 className="text-3xl font-bold">Mesajınız Gönderildi!</h2>
          <p className="text-muted-foreground max-w-md">
            Mesajınız için teşekkür ederim. En kısa sürede size geri dönüş yapacağım.
          </p>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            variant="outline"
          >
            Yeni Mesaj Gönder
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-4 mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          İletişim
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Herhangi bir sorunuz, öneriniz veya proje teklifiniz varsa benimle
          iletişime geçmekten çekinmeyin.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                İletişim Bilgileri
              </CardTitle>
              <CardDescription>
                Aşağıdaki kanallardan benimle iletişime geçebilirsiniz.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">E-posta</h4>
                <a
                  href="mailto:fuatogur0@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  fuatogur0@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-1">GitHub</h4>
                <a
                  href="https://github.com/fuatogur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/fuatogur
                </a>
              </div>
              {/* <div>
                <h4 className="font-semibold mb-1">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/fuatogur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/fuatogur
                </a>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Genellikle 24-48 saat içinde yanıt veriyorum.
                </p>
              </div> */}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Mesaj Gönderin</CardTitle>
              <CardDescription>
                Formu doldurarak doğrudan mesaj gönderebilirsiniz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Adınız</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={state.submitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={state.submitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mesajınız</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Mesajınızı buraya yazın..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    disabled={state.submitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>Gönderiliyor...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Gönder
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
