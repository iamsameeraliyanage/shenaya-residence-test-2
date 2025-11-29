"use client";
import { availableRooms } from "@/data/reservation/reservationData";

interface RoomSelectorProps {
  selectedRooms: string[];
  onRoomSelection: (roomIds: string[]) => void;
  numberOfGuests: string;
  onGuestChange: (guests: string) => void;
}

export default function RoomSelector({
  selectedRooms,
  onRoomSelection,
  numberOfGuests,
  onGuestChange,
}: RoomSelectorProps) {
  const handleRoomToggle = (roomId: string) => {
    const newSelection = selectedRooms.includes(roomId)
      ? selectedRooms.filter((id) => id !== roomId)
      : [...selectedRooms, roomId];
    onRoomSelection(newSelection);
  };

  const guestOptions = [
    { value: "", label: "Select number of guests" },
    { value: "1", label: "1 Guest" },
    { value: "2", label: "2 Guests" },
    { value: "3", label: "3 Guests" },
    { value: "4", label: "4 Guests" },
    { value: "5", label: "5+ Guests" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select the room(s)
          </label>
          <div className="text-sm text-gray-500">
            {selectedRooms.length} room{selectedRooms.length !== 1 ? "s" : ""}{" "}
            selected
          </div>
        </div>

        <div className="w-64">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <select
            value={numberOfGuests}
            onChange={(e) => onGuestChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          >
            {guestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableRooms.map((room) => (
          <div
            key={room.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
              selectedRooms.includes(room.id)
                ? "border-yellow-600 bg-yellow-50 shadow-md"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleRoomToggle(room.id)}
          >
            {/* Room Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedRooms.includes(room.id)}
                  onChange={() => handleRoomToggle(room.id)}
                  className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                />
                <div>
                  <h3 className="font-semibold text-lg">{room.name}</h3>
                  <span className="text-sm text-yellow-700 font-medium">
                    {room.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#B8860B" }}
                >
                  ${room.price}
                </div>
                <div className="text-sm text-gray-600">{room.maxOccupancy}</div>
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-1">
              {room.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-blue-600"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
