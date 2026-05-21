import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface MeetingFormDialogProps {
  trigger?: React.ReactNode;
}

const MeetingFormDialog = ({ trigger }: MeetingFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", cooperativa: "", cargo: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.cooperativa || !form.cargo || !form.telefone) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const lines = [
      `Olá! Gostaria de solicitar uma reunião.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*Cooperativa:* ${form.cooperativa}`,
      `*Cargo:* ${form.cargo}`,
      `*Telefone:* ${form.telefone}`,
      form.mensagem ? `*Mensagem:* ${form.mensagem}` : "",
    ].filter(Boolean).join("%0a");

    const whatsappUrl = `https://wa.me/5547988164061?text=${lines}`;
    window.open(whatsappUrl, "_blank");

    setForm({ nome: "", cooperativa: "", cargo: "", telefone: "", mensagem: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <ShinyButton variant="meeting">Solicitar Reunião</ShinyButton>}
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl text-foreground">Solicitar Reunião</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Nome *" value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
          <Input placeholder="Cooperativa *" value={form.cooperativa} onChange={e => setForm(f => ({ ...f, cooperativa: e.target.value }))} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
          <Input placeholder="Cargo *" value={form.cargo} onChange={e => setForm(f => ({ ...f, cargo: e.target.value }))} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
          <Input placeholder="Telefone *" value={form.telefone} onChange={e => setForm(f => ({ ...f, telefone: e.target.value }))} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
          <Textarea placeholder="Mensagem (opcional)" value={form.mensagem} onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
          <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold hover:opacity-90">Enviar Solicitação</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingFormDialog;
