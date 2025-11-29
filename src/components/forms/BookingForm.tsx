"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import RoomSelector from "./RoomSelectorDropdown";
import { rooms } from "@/data/rooms/roomsData";
import { useRoomSelection } from "@/contexts/RoomSelectionContext";

interface ReservationFormField {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

interface BookingFormProps {
  formFields: ReservationFormField[];
  pageContent: {
    title: string;
    sections: {
      booking: string;
      contact: string;
      special: string;
    };
    submitButton: string;
  };
}

interface BookingFormData {
  checkInDate: string;
  checkOutDate: string;
  selectedRooms: string[]; // Array of room IDs
  numberOfGuests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalNote?: string;
}

export default function BookingForm({
  formFields,
  pageContent,
}: BookingFormProps) {
  const { selectedRooms: contextSelectedRooms } = useRoomSelection();
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [numberOfGuests, setNumberOfGuests] = useState<string>("");

  // Initialize selected rooms from context when component mounts
  useEffect(() => {
    setSelectedRooms(contextSelectedRooms);
  }, [contextSelectedRooms]);

  // Update context when local selection changes
  const handleRoomSelection = (roomIds: string[]) => {
    setSelectedRooms(roomIds);
    // Keep context in sync (though this is mainly for accommodation page)
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<BookingFormData>();

  const checkInDate = watch("checkInDate");

  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    try {
      // Validate check-out date is after check-in date (only on client side)
      if (typeof window !== "undefined") {
        const checkIn = new Date(data.checkInDate);
        const checkOut = new Date(data.checkOutDate);

        if (checkOut <= checkIn) {
          alert("Check-out date must be after check-in date");
          return;
        }
      }

      // Validate room selection
      if (selectedRooms.length === 0) {
        alert("Please select at least one room");
        return;
      }

      console.log("Reservation form submitted:", {
        ...data,
        selectedRooms,
        numberOfGuests,
      });

      // Send data to backend API
      const response = await fetch("http://localhost:5001/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          checkInDate: data.checkInDate,
          checkOutDate: data.checkOutDate,
          guests: numberOfGuests,
          rooms: selectedRooms.length.toString(),
          roomType:
            selectedRooms.length > 0
              ? rooms
                  .filter((room) => selectedRooms.includes(room.id))
                  .map((room) => room.name)
                  .join(", ")
              : "No rooms selected",
          additionalNote: data.additionalNote,
        }),
      });

      if (response.ok) {
        reset();
        setSelectedRooms([]);
        setNumberOfGuests("");
        alert(
          "Thank you! Your reservation request has been submitted successfully. You will receive a confirmation email shortly."
        );
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit reservation");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert(
        "There was an error submitting your reservation. Please try again."
      );
    }
  };

  const getTomorrowDate = () => {
    if (typeof window !== "undefined") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    }
    return "";
  };

  const getMinCheckOutDate = () => {
    if (typeof window !== "undefined" && checkInDate) {
      const checkIn = new Date(checkInDate);
      checkIn.setDate(checkIn.getDate() + 1);
      return checkIn.toISOString().split("T")[0];
    }
    return getTomorrowDate();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        {/* Booking Form Section */}
        <div className="mb-8">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "#B8860B" }}
          >
            {pageContent.sections.booking}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <div>
                    <select
                      id={field.id}
                      {...register(field.name as keyof BookingFormData, {
                        required: field.required
                          ? `${field.label} is required`
                          : false,
                      })}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent ${
                        errors[field.name as keyof BookingFormData]
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors[field.name as keyof BookingFormData] && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors[field.name as keyof BookingFormData]?.message}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <input
                      type={field.type}
                      id={field.id}
                      {...register(field.name as keyof BookingFormData, {
                        required: field.required
                          ? `${field.label} is required`
                          : false,
                        ...(field.type === "date" &&
                          field.name === "checkInDate" && {
                            min: getTomorrowDate(),
                            validate: (
                              value: string | string[] | undefined
                            ) => {
                              if (!value || Array.isArray(value)) return true;
                              const selectedDate = new Date(value);
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return (
                                selectedDate >= today ||
                                "Check-in date cannot be in the past"
                              );
                            },
                          }),
                        ...(field.type === "date" &&
                          field.name === "checkOutDate" && {
                            min: getMinCheckOutDate(),
                            validate: (
                              value: string | string[] | undefined
                            ) => {
                              if (!value || Array.isArray(value)) return true;
                              const checkInValue = watch("checkInDate");
                              if (!checkInValue || Array.isArray(checkInValue))
                                return true;
                              const checkInDate = new Date(checkInValue);
                              const checkOutDate = new Date(value);
                              return (
                                checkOutDate > checkInDate ||
                                "Check-out date must be after check-in date"
                              );
                            },
                          }),
                        ...(field.name === "numberOfGuests" &&
                          field.type === "select" && {
                            min: "1",
                          }),
                      })}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent ${
                        errors[field.name as keyof BookingFormData]
                          ? "border-red-500"
                          : "border-gray-300"
                      } ${field.type === "date" ? "cursor-pointer" : ""}`}
                      style={
                        field.type === "date"
                          ? {
                              colorScheme: "light",
                              background: "white",
                            }
                          : {}
                      }
                    />
                    {errors[field.name as keyof BookingFormData] && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors[field.name as keyof BookingFormData]?.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Room Selection Section */}
        <div className="mb-8">
          <RoomSelector
            selectedRooms={selectedRooms}
            onRoomSelection={handleRoomSelection}
            numberOfGuests={numberOfGuests}
            onGuestChange={setNumberOfGuests}
          />
        </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "#B8860B" }}
          >
            {pageContent.sections.contact}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.slice(2, 6).map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  {...register(field.name as keyof BookingFormData, {
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                    ...(field.type === "email" && {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }),
                    ...(field.name === "phone" && {
                      pattern: {
                        value: /^[+]?[1-9][\d\s\-\(\)]{7,14}$/,
                        message: "Invalid phone number",
                      },
                    }),
                    ...((field.name === "firstName" ||
                      field.name === "lastName") && {
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters long",
                      },
                    }),
                  })}
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent ${
                    errors[field.name as keyof BookingFormData]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors[field.name as keyof BookingFormData] && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors[field.name as keyof BookingFormData]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Special Requests Section */}
        <div className="mb-8">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "#B8860B" }}
          >
            {pageContent.sections.special}
          </h2>

          {formFields.slice(6).map((field) => (
            <div key={field.id} className="mb-6">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {field.label}
              </label>
              <textarea
                id={field.id}
                {...register(field.name as keyof BookingFormData, {
                  required: field.required
                    ? `${field.label} is required`
                    : false,
                })}
                placeholder={field.placeholder}
                rows={field.rows}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent resize-none ${
                  errors[field.name as keyof BookingFormData]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[field.name as keyof BookingFormData] && (
                <p className="mt-1 text-sm text-red-600">
                  {errors[field.name as keyof BookingFormData]?.message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-white px-12 py-4 rounded-full font-medium text-lg transition-opacity ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
            style={{ backgroundColor: "#B8860B" }}
          >
            {isSubmitting ? "Submitting..." : pageContent.submitButton}
          </button>
        </div>
      </form>
    </div>
  );
}
