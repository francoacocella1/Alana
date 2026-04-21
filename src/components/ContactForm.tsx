"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { contactSchema, type ContactInput } from "@/lib/validation/contact";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      setSubmitState("submitting");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  });

  return (
    <section id="contacto" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          Hablemos de tu proyecto
        </h2>
        <p className="mt-2 text-zinc-700">
          Deja tus datos y te contactamos para avanzar.
        </p>
      </div>
      <form
        className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
        onSubmit={onSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-800">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            {...form.register("name")}
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none ring-emerald-400 transition focus:ring-2"
            placeholder="Tu nombre"
          />
          <p className="text-sm text-red-600">{form.formState.errors.name?.message}</p>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-800">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...form.register("email")}
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none ring-emerald-400 transition focus:ring-2"
            placeholder="tu@email.com"
          />
          <p className="text-sm text-red-600">{form.formState.errors.email?.message}</p>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-800">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            {...form.register("message")}
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 outline-none ring-emerald-400 transition focus:ring-2"
            placeholder="Contanos brevemente que necesitas"
          />
          <p className="text-sm text-red-600">
            {form.formState.errors.message?.message}
          </p>
        </div>
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
        >
          {submitState === "submitting" ? "Enviando..." : "Enviar contacto"}
        </button>
        {submitState === "success" ? (
          <p className="text-sm text-emerald-700">
            Gracias. Recibimos tu consulta correctamente.
          </p>
        ) : null}
        {submitState === "error" ? (
          <p className="text-sm text-red-700">
            Ocurrio un problema enviando tu consulta. Intenta nuevamente.
          </p>
        ) : null}
      </form>
    </section>
  );
}
