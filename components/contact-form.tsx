'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '../lib/action';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    // prevent Default
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        toast({
          title: 'Message sent!',
          description: "Thank you for your message. I'll get back to you soon.",
        });
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();
        setIsSubmitting(false);
      } else {
        toast({
          title: 'Error',
          description:
            result.error || 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      }
      setIsSubmitting(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    }
  }

  console.log(isSubmitting);

  return (
    <form id='contact-form' className='space-y-6'>
      <div className='grid md:grid-cols-2 gap-6'>
        <div>
          <Input
            name='name'
            type='text'
            placeholder='Your Name'
            required
            className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500 text-white placeholder:text-gray-400'
          />
        </div>
        <div>
          <Input
            name='email'
            type='email'
            placeholder='Your Email'
            required
            className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500 text-white placeholder:text-gray-400'
          />
        </div>
      </div>

      <div>
        <Input
          name='subject'
          type='text'
          placeholder='Subject'
          required
          className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500 text-white placeholder:text-gray-400'
        />
      </div>

      <div>
        <Textarea
          name='message'
          placeholder='Your Message'
          rows={6}
          required
          className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-red-500 text-white placeholder:text-gray-400 resize-none'
        />
      </div>

      <Button
        type='button'
        onClick={() =>
          handleSubmit(
            new FormData(
              document.getElementById('contact-form') as HTMLFormElement
            )
          )
        }
        disabled={isSubmitting}
        className='bg-red-500 hover:bg-red-600 text-white border-none px-8 py-3 disabled:opacity-50'>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
