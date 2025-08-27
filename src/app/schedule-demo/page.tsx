
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addMonths, subMonths, format, isToday } from 'date-fns';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Clock, Globe, Video, UserPlus, ArrowLeft, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { scheduleDemo, ScheduleDemoInput } from '@/ai/flows/schedule-demo-flow';
import { cn } from '@/lib/utils';

const allTimeSlots = ["7:30pm", "9:00pm", "10:00pm", "10:30pm", "11:00pm", "11:30pm"];

const parseTime = (timeString: string, date: Date): Date => {
    const meetingDateTime = new Date(date);
    const [time, period] = timeString.match(/(\d{1,2}:\d{2})(am|pm)/i)!.slice(1);
    let [hours, minutes] = time.split(':').map(Number);

    if (period.toLowerCase() === 'pm' && hours < 12) {
        hours += 12;
    }
    if (period.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }
    meetingDateTime.setHours(hours, minutes, 0, 0);
    return meetingDateTime;
};

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  companyWebsite: z.string().url('Invalid URL'),
  aiSolution: z.enum(['yes', 'no', 'exploring']),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ScheduleDemoPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlots, setTimeSlots] = useState<string[]>(allTimeSlots);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'select-time' | 'enter-details' | 'confirmed'>('select-time');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeZone, setTimeZone] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const today = new Date();
    // find the next available Wednesday
    const nextWednesday = new Date(today);
    nextWednesday.setDate(today.getDate() + (3 - today.getDay() + 7) % 7);
    setDate(nextWednesday);
    setCurrentMonth(nextWednesday);

    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  useEffect(() => {
    if (date && isToday(date)) {
        const now = new Date();
        const availableSlots = allTimeSlots.filter(slot => {
            const slotTime = parseTime(slot, date);
            return slotTime > now;
        });
        setTimeSlots(availableSlots);
    } else {
        setTimeSlots(allTimeSlots);
    }
    setSelectedTime(null);
  }, [date])


  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      companyWebsite: '',
      notes: '',
      aiSolution: 'exploring',
    },
  });
  
  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };


  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('enter-details');
  }

  const onSubmit = async (values: FormValues) => {
    if (!date || !selectedTime) return;
    setIsSubmitting(true);
    
    const meetingDateTime = parseTime(selectedTime, date);

    const input: ScheduleDemoInput = {
      ...values,
      dateTime: meetingDateTime.toISOString(),
    };

    try {
      await scheduleDemo(input);
      setStep('confirmed');
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const formattedDate = date && selectedTime ? 
    new Intl.DateTimeFormat('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }).format(date) + ` at ${selectedTime}` : "Select a date and time";
    
  const formattedDay = date ? format(date, 'EEE dd') : '';

  if (step === 'confirmed') {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 font-body">
            <div className='absolute top-4 left-4'>
                <Button variant="ghost" asChild>
                    <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
                </Button>
            </div>
            <div className="w-full max-w-2xl mx-auto bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl p-8 md:p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-white mb-3">Booking Confirmed!</h1>
                <p className="text-neutral-300 mb-4">You are scheduled for a Discovery call with Arun Karunagaran.</p>
                <div className="text-lg text-white mb-8">{formattedDate}</div>
                <p className="text-sm text-neutral-400 mb-6">A calendar invitation with all the details has been sent to your email address.</p>
            </div>
        </div>
    )
  }

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

             {(step === 'enter-details' || step === 'confirmed') && date && selectedTime && (
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
              <span>{timeZone}</span>
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
                                <h2 className="text-lg font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="hover:bg-neutral-800" onClick={handlePreviousMonth}><ChevronLeft className="w-5 h-5" /></Button>
                                    <Button variant="ghost" size="icon" className="hover:bg-neutral-800" onClick={handleNextMonth}><ChevronRight className="w-5 h-5" /></Button>
                                </div>
                            </div>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                month={currentMonth}
                                onMonthChange={setCurrentMonth}
                                disabled={{ before: new Date() }}
                                className="p-0"
                                classNames={{
                                    root: "w-full",
                                    months: "w-full",
                                    month: "w-full",
                                    caption_label: "hidden",
                                    nav_button: "hidden",
                                    nav: "hidden",
                                    table: "w-full",
                                    head_row: "flex justify-between text-neutral-400 text-xs uppercase",
                                    head_cell: "w-auto",
                                    row: "flex justify-between mt-4",
                                    cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                                    day: "h-9 w-9 p-0 font-normal rounded-full hover:bg-neutral-800 aria-selected:opacity-100",
                                    day_selected: "bg-white text-black hover:bg-white hover:text-black focus:bg-white focus:text-black",
                                    day_today: "bg-neutral-800 text-white rounded-full",
                                    day_outside: "text-neutral-600 opacity-50",
                                    day_disabled: "text-neutral-700 opacity-50 line-through",
                                }}
                            />
                            <div className="text-center mt-8">
                                <a href="#" className="text-neutral-400 text-sm">Cal.com</a>
                            </div>
                        </div>

                        {/* Time Slots */}
                        <div className="w-full md:w-56">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-white">{formattedDay}</h3>
                                <ToggleGroup type="single" defaultValue="12h" className="border border-neutral-700 rounded-md p-0.5">
                                    <ToggleGroupItem value="12h" className="px-2 py-0.5 text-xs data-[state=on]:bg-neutral-700 h-auto">12h</ToggleGroupItem>
                                    <ToggleGroupItem value="24h" className="px-2 py-0.5 text-xs data-[state=on]:bg-neutral-700 h-auto">24h</ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                            <div className="space-y-2 h-96 overflow-y-auto pr-2">
                                {timeSlots.length > 0 ? (
                                    timeSlots.map(time => (
                                        <Button 
                                            key={time} 
                                            variant="outline"
                                            className="w-full justify-center py-3 h-auto border-neutral-700 bg-black hover:bg-neutral-900 hover:text-white"
                                            onClick={() => handleTimeSelect(time)}
                                        >
                                            {time}
                                        </Button>
                                    ))
                                ) : (
                                    <p className="text-sm text-neutral-400 text-center">No available slots for this day.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your name *</FormLabel>
                                        <FormControl>
                                            <Input className="bg-neutral-800 border-neutral-700 mt-1" {...field} />
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
                                        <FormLabel>Email address *</FormLabel>
                                        <FormControl>
                                            <Input type="email" className="bg-neutral-800 border-neutral-700 mt-1" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="companyWebsite"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your company's website *</FormLabel>
                                        <FormControl>
                                            <Input type="url" className="bg-neutral-800 border-neutral-700 mt-1" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="aiSolution"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Have you already implemented any AI solutions in your product or workflows?</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full bg-neutral-800 border-neutral-700 mt-1">
                                                    <SelectValue placeholder="Select an option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="yes">Yes</SelectItem>
                                                <SelectItem value="no">No</SelectItem>
                                                <SelectItem value="exploring">Currently exploring</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="notes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional notes</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Please share anything that will help prepare for our meeting." className="bg-neutral-800 border-neutral-700 mt-1 min-h-[100px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div>
                                <Button variant="ghost" type="button" className="p-0 hover:bg-transparent text-white hover:text-white">
                                    <UserPlus className="mr-2 h-4 w-4" /> Add guests
                                </Button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-xs text-neutral-400 mb-4">By proceeding, you agree to our Terms and Privacy Policy.</p>
                            <div className="flex justify-end gap-4">
                                <Button type="button" variant="outline" className="border-neutral-700 bg-black hover:bg-neutral-900 hover:text-white" onClick={() => setStep('select-time')}>
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                </Button>
                                <Button type="submit" className="bg-white text-black hover:bg-neutral-200" disabled={isSubmitting}>
                                    {isSubmitting ? 'Confirming...' : 'Confirm'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            )}
        </div>
      </div>
    </div>
  );
}

    