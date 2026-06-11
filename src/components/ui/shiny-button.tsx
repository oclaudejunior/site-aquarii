"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "meeting" | "ghost"
}

export function ShinyButton({ children, onClick, className = "", variant = "default" }: ShinyButtonProps) {
  if (variant === "ghost") {
    return (
      <button className={cn("pc-cta-ghost", className)} onClick={onClick}>
        {children}
        <span className="btn-arrow"><ArrowRight className="w-4 h-4" strokeWidth={1.5} /></span>
      </button>
    )
  }

  if (variant === "meeting") {
    return (
      <button className={cn("shiny-cta-meeting", className)} onClick={onClick}>
        <span className="shiny-cta-meeting-label">{children}</span>
        <span className="btn-arrow">
          <ArrowRight strokeWidth={1.75} className="w-4 h-4" />
        </span>
      </button>
    )
  }

  return (
    <button className={cn("shiny-cta", className)} onClick={onClick}>
      {children}
      <span className="btn-arrow"><ArrowRight className="w-4 h-4" strokeWidth={1.75} /></span>
    </button>
  )
}
