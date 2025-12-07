"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ContactFormField {
  name: string;
  type: string;
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
}

interface ContactFormProps {
  formFields: ContactFormField[];
  pageContent: {
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
  };
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm({ formFields, pageContent }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

  // Country code state
  const [countryCode, setCountryCode] = React.useState('+94');

  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitStatus('idle');
    // Form-level validation for all required fields
    const missingFields = formFields.filter(field => field.required && !data[field.name as keyof ContactFormData]);
    if (missingFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }
    try {
      // Attach country code to phone
      const payload = { ...data, phone: countryCode + data.phone };
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="space-y-4 sm:space-y-6">
          {formFields.map((field) => (
            <div key={field.name}>
              {/* Add label with asterisk for required fields */}
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                {field.placeholder}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {field.type === 'select' ? (
                <div>
                  <select
                    {...register(field.name as keyof ContactFormData, { 
                      required: field.required ? `${field.name} is required` : false 
                    })}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base ${
                      errors[field.name as keyof ContactFormData] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    defaultValue=""
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value} disabled={option.value === ''}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors[field.name as keyof ContactFormData] && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">
                      {errors[field.name as keyof ContactFormData]?.message}
                    </p>
                  )}
                </div>
              ) : field.name === 'message' ? (
                <div>
                  <textarea
                    {...register('message', { 
                      required: field.required ? 'Message is required' : false,
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters long'
                      }
                    })}
                    placeholder={field.placeholder}
                    rows={4}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none placeholder-gray-500 text-gray-900 text-sm sm:text-base ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              ) : field.name === 'phone' ? (
                // Phone input with country code selector
                <div>
                  <div className="flex gap-2 items-start">
                    <select
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                      className="px-2 sm:px-3 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 text-sm sm:text-base flex-shrink-0"
                      style={{ minWidth: '70px', maxWidth: '85px' }}
                    >
                      <option value="+94">+94</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+49">+49</option>
                      <option value="+61">+61</option>
                      <option value="+33">+33</option>
                      <option value="+91">+91</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="tel"
                      {...register('phone', {
                        required: field.required ? `${field.placeholder} is required` : false,
                        pattern: {
                          value: /^[0-9]{7,14}$/,
                          message: 'Invalid phone number'
                        }
                      })}
                      placeholder={field.placeholder}
                      className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none placeholder-gray-500 text-gray-900 text-sm sm:text-base ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <input
                    type={field.type}
                    {...register(field.name as keyof ContactFormData, {
                      required: field.required ? `${field.placeholder} is required` : false,
                      ...(field.type === 'email' && {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      }),
                      ...(field.name === 'name' && {
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters long'
                        }
                      })
                    })}
                    placeholder={field.placeholder}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none placeholder-gray-500 text-gray-900 text-sm sm:text-base ${
                      errors[field.name as keyof ContactFormData] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors[field.name as keyof ContactFormData] && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">
                      {errors[field.name as keyof ContactFormData]?.message}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2.5 sm:py-3 text-white font-medium rounded-lg transition-opacity text-sm sm:text-base ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:opacity-90'
            }`}
            style={{ backgroundColor: '#B09244' }}
          >
            {isSubmitting ? pageContent.submitting : pageContent.submitButton}
          </button>
        </div>
      </form>
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm sm:text-base max-w-lg mx-auto">
          {pageContent.successMessage}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm sm:text-base max-w-lg mx-auto">
          {pageContent.errorMessage}
        </div>
      )}
    </>
  );
}
