import React, { forwardRef } from "react"

const Card = forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className="rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-neon-purple/10"
        {...props}
    />
))
Card.displayName = "Card"

const CardHeader = forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className="flex flex-col space-y-1.5 p-6"
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className="text-2xl font-semibold leading-none tracking-tight"
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className="text-sm text-muted-foreground"
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className="p-6 pt-4 " {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className="flex items-center p-6 pt-0"
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
}
