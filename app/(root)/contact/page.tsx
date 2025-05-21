/* eslint-disable react/no-unescaped-entities */
'use client'

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Textarea } from '@/components/ui/textarea'
import { toast } from "sonner"
import { budgets, services3 } from '@/constants'

function Page() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("")
  const [openService, setOpenService] = useState(false)
  const [openBudget, setOpenBudget] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !message || !selectedService || !selectedBudget) {
      toast.error("Please fill in all required fields.")
      return
    }

    toast.success("Your message has been sent!")
    // You can reset the form if needed
    setName("")
    setEmail("")
    setMessage("")
    setSelectedService("")
    setSelectedBudget("")
  }

  return (
    <div className='container mx-auto max-w-6xl py-24 mt-15 gap-15 justify-center w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
      <div className="">
        <h1 className="text-7xl">Let’s Talk</h1>
        <p className="text-muted-foreground mt-2">
          Have some big idea or brand to develop and need help? Then reach out we&apos;d love to hear about your project and provide help
        </p>

        <h1 className="text-4xl mt-10">Email</h1>
        <p className="text-muted-foreground mt-1">beebs@gmail.com</p>

        <h1 className="text-4xl mt-10">Socials</h1>
        <div className="flex flex-col space-y-2 mt-1">
          <a href="https://www.instagram.com" target="_blank" className="text-muted-foreground underline">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" className="text-muted-foreground underline">Twitter</a>
          <a href="https://www.facebook.com" target="_blank" className="text-muted-foreground underline">Facebook</a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block text-sm font-medium mt-2 mb-2">
          Name
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className="block text-sm font-medium mt-6 mb-2">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Service Combobox */}
        <div className="flex flex-col space-y-2 mt-6">
          <label className="text-sm font-medium">What service are you interested in?</label>
          <Popover open={openService} onOpenChange={setOpenService}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" className="w-full justify-between text-muted-foreground">
                {selectedService ? services3.find((s) => s.value === selectedService)?.label : "Select a service"}
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search service..." />
                <CommandEmpty>No service found.</CommandEmpty>
                <CommandGroup>
                  {services3.map((service) => (
                    <CommandItem
                      key={service.value}
                      onSelect={() => {
                        setSelectedService(service.value)
                        setOpenService(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", selectedService === service.value ? "opacity-100" : "opacity-0")} />
                      {service.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Budget Combobox */}
        <div className="flex flex-col space-y-2 mt-6">
          <label className="text-sm font-medium">What's your budget?</label>
          <Popover open={openBudget} onOpenChange={setOpenBudget}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" className="w-full justify-between text-muted-foreground">
                {selectedBudget ? budgets.find((b) => b.value === selectedBudget)?.label : "Select a budget"}
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search budget..." />
                <CommandEmpty>No budget range found.</CommandEmpty>
                <CommandGroup>
                  {budgets.map((budget) => (
                    <CommandItem
                      key={budget.value}
                      onSelect={() => {
                        setSelectedBudget(budget.value)
                        setOpenBudget(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", selectedBudget === budget.value ? "opacity-100" : "opacity-0")} />
                      {budget.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col space-y-2 mt-6">
          <label className="text-sm font-medium">Message</label>
          <Textarea
            placeholder="Tell us about your project or message..."
            className="resize-none min-h-[170px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <Button type="submit" className="w-full h-12 text-1xl">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Page
