"use client"

import * as React from "react"
import MenuIcon from '@/assets/menu.svg'

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "Home",
    label: "Home",
    href: "/"
  },
  {
    value: "About",
    label: "About",
    href: "/about"
  },
  {
    value: "Packages",
    label: "Packages",
    href: "/packages"
  },
  {
    value: "Gallery",
    label: "Gallery",
    href: "/gallery"
  },
  {
    value: "Contact",
    label: "Contact",
    href: "/contact"
  },
]

export function HamburgerMenu() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="p-3"
        >     
            <MenuIcon className="h-5 w-5 md:hidden" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Menu..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework, index) => (
                <a href={framework.href} key={index}>
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                </CommandItem>
                </a>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
