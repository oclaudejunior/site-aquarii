"use client"

import type React from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "meeting" | "ghost"
}

/**
 * Botão padrão do site (PC12). Mantém a API antiga (ShinyButton) mas renderiza
 * o pill champagne minimalista do design system AQUARII.
 */
export function ShinyButton({ children, onClick, className = "", variant = "default" }: ShinyButtonProps) {
  if (variant === "ghost") {
    return (
      <button className={cn("pc-cta-ghost", className)} onClick={onClick}>
        {children}
        <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
      </button>
    )
  }

  if (variant === "meeting") {
    return (
      <button className={cn("shiny-cta-meeting", className)} onClick={onClick}>
        <span className="shiny-cta-meeting-label">{children}</span>
        <span className="shiny-cta-meeting-arrow">
          <ArrowUpRight strokeWidth={1.75} />
        </span>
      </button>
    )
  }

  return (
    <button className={cn("shiny-cta", className)} onClick={onClick}>
      {children}
      <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
    </button>
  )
}
