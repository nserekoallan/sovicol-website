'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  company: z.string().optional(),
  customerType: z.enum(['individual', 'business']),
  productType: z.string().min(1, 'Please select a product type'),
  quantity: z.string().min(1, 'Please specify quantity'),
  colorCodes: z.string().optional(),
  message: z.string().optional(),
  preferredContact: z.enum(['email', 'phone', 'whatsapp']),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

/**
 * Quote request form
 */
export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      customerType: 'individual',
      preferredContact: 'email',
    },
  });

  const customerType = watch('customerType');

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Quote form submitted:', data);

      toast.success('Quote request submitted!', {
        description: 'Our team will contact you within 24 hours.',
      });

      reset();
    } catch (error) {
      toast.error('Failed to submit request', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Customer Type */}
      <div className="space-y-2">
        <Label>I am a...</Label>
        <div className="flex gap-4">
          {['individual', 'business'].map((type) => (
            <label
              key={type}
              className={`flex-1 p-4 rounded-lg border cursor-pointer transition-all ${
                customerType === type
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                value={type}
                {...register('customerType')}
                className="sr-only"
              />
              <span className="capitalize font-medium">{type}</span>
              <span className="block text-sm text-muted-foreground mt-1">
                {type === 'individual'
                  ? 'Personal vehicle project'
                  : 'Auto shop or dealer'}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Company (if business) */}
        {customerType === 'business' && (
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              placeholder="Your company"
              {...register('company')}
            />
          </div>
        )}

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+256 700 000 000"
            {...register('phone')}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Product Type */}
        <div className="space-y-2">
          <Label htmlFor="productType">
            Product Type <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue('productType', value)}>
            <SelectTrigger aria-invalid={!!errors.productType}>
              <SelectValue placeholder="Select product type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basecoat">Basecoat</SelectItem>
              <SelectItem value="clearcoat">Clearcoat</SelectItem>
              <SelectItem value="primer">Primer</SelectItem>
              <SelectItem value="complete-system">Complete Paint System</SelectItem>
              <SelectItem value="specialty">Specialty Paint</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="multiple">Multiple Products</SelectItem>
            </SelectContent>
          </Select>
          {errors.productType && (
            <p className="text-sm text-destructive">{errors.productType.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div className="space-y-2">
          <Label htmlFor="quantity">
            Estimated Quantity <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue('quantity', value)}>
            <SelectTrigger aria-invalid={!!errors.quantity}>
              <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 Litres</SelectItem>
              <SelectItem value="6-20">6-20 Litres</SelectItem>
              <SelectItem value="21-50">21-50 Litres</SelectItem>
              <SelectItem value="51-100">51-100 Litres</SelectItem>
              <SelectItem value="100+">100+ Litres</SelectItem>
            </SelectContent>
          </Select>
          {errors.quantity && (
            <p className="text-sm text-destructive">{errors.quantity.message}</p>
          )}
        </div>
      </div>

      {/* Color Codes */}
      <div className="space-y-2">
        <Label htmlFor="colorCodes">Color Codes (Optional)</Label>
        <Input
          id="colorCodes"
          placeholder="e.g., SC-B003, SC-R001 (from our color catalog)"
          {...register('colorCodes')}
        />
        <p className="text-xs text-muted-foreground">
          Enter Sovicol color codes separated by commas, or describe the colors you need
        </p>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Additional Details</Label>
        <Textarea
          id="message"
          placeholder="Tell us more about your project..."
          rows={4}
          {...register('message')}
        />
      </div>

      {/* Preferred Contact */}
      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <div className="flex flex-wrap gap-4">
          {[
            { value: 'email', label: 'Email' },
            { value: 'phone', label: 'Phone Call' },
            { value: 'whatsapp', label: 'WhatsApp' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                {...register('preferredContact')}
                className="text-primary"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Quote Request
          </>
        )}
      </Button>
    </form>
  );
}
