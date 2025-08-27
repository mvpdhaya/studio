
"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Clock, Globe, Video, UserPlus, ArrowLeft } from "lucide-react";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const timeSlots = ["7:30pm", "9:00pm", "10:00pm", "10:30pm", "11:00pm", "11:30pm"];

export default function ScheduleDemoPage() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 7, 27));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'select-time' | 'enter-details'>('select-time');

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('enter-details');
  }

  const formattedDate = date && selectedTime ? 
    new Intl.DateTimeFormat('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }).format(date) + ` ${selectedTime}` : "Select a date and time";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 font-body">
        <div className='absolute top-4 left-4'>
            <Button variant="ghost" asChild>
                <Link href="/"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
            </Button>
        </div>
      <div className="w-full max-w-6xl mx-auto bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="w-full md:w-1/3 p-8 border-r border-neutral-800 flex flex-col">
          <div className="flex-grow">
            <Avatar>
              <AvatarFallback className="bg-purple-600 text-white">A</AvatarFallback>
            </Avatar>
            <p className="text-neutral-400 mt-4 mb-1">Arun Karunagaran</p>
            <h1 className="text-3xl font-bold text-white mb-4">Discovery call</h1>

             {step === 'enter-details' && date && selectedTime && (
                <div className="space-y-3 text-neutral-300 mb-6">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5" />
                        <span>{formattedDate}</span>
                    </div>
                </div>
            )}

            <div className="space-y-4 text-neutral-300">
                <p className='font-semibold'>What to expect:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Get a quick walkthrough of our SLM-powered agent stack and how it delivers high accuracy at low cost.</li>
                    <li>See exactly where an agent fits into your workflows and where it doesn't.</li>
                </ul>
            </div>
          </div>
          <div className="space-y-3 text-neutral-300 mt-8">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>30m</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-blue-500" />
              <span>Zoom Video</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5" />
              <span>Asia/Colombo</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-2/3 p-8">
            {step === 'select-time' ? (
                <>
                    <div className="flex justify-end items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <Switch id="overlay-calendar" className="data-[state=checked]:bg-white" />
                            <label htmlFor="overlay-calendar" className="text-sm">Overlay my calendar</label>
                        </div>
                        <div className="flex items-center border border-neutral-700 rounded-md">
                            <Button variant="ghost" size="icon" className="hover:bg-neutral-700"><CalendarDays className="w-5 h-5" /></Button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Calendar */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">August 2025</h2>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="hover:bg-neutral-800"><ChevronLeft className="w-5 h-5" /></Button>
                                    <Button variant="ghost" size="icon" className="hover:bg-neutral-800"><ChevronRight className="w-5 h-5" /></Button>
                                </div>
                            </div>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="p-0"
                                classNames={{
                                    root: "w-full",
                                    months: "w-full",
                                    month: "w-full",
                                    table: "w-full",
                                    head_row: "flex justify-between text-neutral-400 text-xs uppercase",
                                    head_cell: "w-auto",
                                    row: "flex justify-between mt-4",
                                    cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                                    day: "h-9 w-9 p-0 font-normal rounded-full hover:bg-neutral-800 aria-selected:opacity-100",
                                    day_selected: "bg-white text-black hover:bg-white focus:bg-white",
                                    day_today: "bg-neutral-800 text-white rounded-full",
                                    day_outside: "text-neutral-600 opacity-50",
                                    day_disabled: "text-neutral-700 opacity-50",
                                }}
                            />
                            <div className="text-center mt-8">
                                <a href="#" className="text-neutral-400 text-sm">Cal.com</a>
                            </div>
                        </div>

                        {/* Time Slots */}
                        <div className="w-full md:w-56">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-white">Wed 27</h3>
                                <ToggleGroup type="single" defaultValue="12h" className="border border-neutral-700 rounded-md p-0.5">
                                    <ToggleGroupItem value="12h" className="px-2 py-0.5 text-xs data-[state=on]:bg-neutral-700 h-auto">12h</ToggleGroupItem>
                                    <ToggleGroupItem value="24h" className="px-2 py-0.5 text-xs data-[state=on]:bg-neutral-700 h-auto">24h</ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                            <div className="space-y-2 h-96 overflow-y-auto pr-2">
                                {timeSlots.map(time => (
                                    <Button 
                                        key={time} 
                                        variant="outline"
                                        className="w-full justify-center py-3 h-auto border-neutral-700 bg-black hover:bg-neutral-900 hover:text-white"
                                        onClick={() => handleTimeSelect(time)}
                                    >
                                        {time}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col h-full">
                    <div className="flex-grow space-y-6">
                        <div>
                            <Label htmlFor="name">Your name *</Label>
                            <Input id="name" type="text" className="bg-neutral-800 border-neutral-700 mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="email">Email address *</Label>
                            <Input id="email" type="email" className="bg-neutral-800 border-neutral-700 mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="website">Your company's website *</Label>
                            <Input id="website" type="url" className="bg-neutral-800 border-neutral-700 mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="ai-solutions">Have you already implemented any AI solutions in your product or workflows?</Label>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-800 border-neutral-700 mt-2">
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                    <SelectItem value="exploring">Currently exploring</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="notes">Additional notes</Label>
                            <Textarea id="notes" placeholder="Please share anything that will help prepare for our meeting." className="bg-neutral-800 border-neutral-700 mt-2 min-h-[100px]" />
                        </div>
                        <div>
                            <Button variant="ghost" className="p-0 hover:bg-transparent text-white hover:text-white">
                                <UserPlus className="mr-2 h-4 w-4" /> Add guests
                            </Button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-xs text-neutral-400 mb-4">By proceeding, you agree to our Terms and Privacy Policy.</p>
                        <div className="flex justify-end gap-4">
                            <Button variant="outline" className="border-neutral-700 bg-black hover:bg-neutral-900 hover:text-white" onClick={() => setStep('select-time')}>
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back
                            </Button>
                            <Button className="bg-white text-black hover:bg-neutral-200">Confirm</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
