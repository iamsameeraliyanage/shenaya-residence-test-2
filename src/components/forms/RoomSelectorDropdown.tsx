"use client";
import { useState } from 'react';
import { Room, RoomLabels } from '@/data/rooms/roomsData';

interface RoomSelectorProps {
  selectedRooms: string[];
  onRoomSelection: (roomIds: string[]) => void;
  numberOfGuests: string;
  onGuestChange: (guests: string) => void;
  labels: RoomLabels;
  rooms: Room[];
}

export default function RoomSelector({ 
  selectedRooms, 
  onRoomSelection, 
  numberOfGuests, 
  onGuestChange,
  labels,
  rooms
}: RoomSelectorProps) {
  const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);

  const handleRoomToggle = (roomId: string) => {
    const newSelection = selectedRooms.includes(roomId)
      ? selectedRooms.filter(id => id !== roomId)
      : [...selectedRooms, roomId];
    onRoomSelection(newSelection);
  };

  const getRoomSelectionText = () => {
    if (selectedRooms.length === 0) return labels.selectRoomsPlaceholder;
    if (selectedRooms.length === 1) return `1 ${labels.roomSelected}`;
    return `${selectedRooms.length} ${labels.roomsSelected}`;
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setIsRoomDropdownOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: '#B8860B' }}>
        {labels.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Room Selection Dropdown */}
        <div className="relative">
          <label htmlFor="roomSelection" className="block text-sm font-medium text-gray-700 mb-2">
            {labels.selectRoomsLabel}
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsRoomDropdownOpen(!isRoomDropdownOpen)}
              className="w-full px-4 py-3 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent bg-white flex justify-between items-center"
              style={{ height: '48px' }}
            >
              <span className={selectedRooms.length === 0 ? "text-gray-600" : "text-gray-900"}>
                {getRoomSelectionText()}
              </span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isRoomDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isRoomDropdownOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={handleClickOutside}
                ></div>
                
                {/* Dropdown */}
                <div className="absolute z-50 left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden" style={{ width: '800px' }}>
                  <div className="p-3 max-h-80 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-3">
                      {rooms.map((room) => (
                        <div
                          key={room.id}
                          className="relative cursor-pointer rounded-xl p-4 transition-all duration-200 hover:shadow-md border border-gray-200"
                          style={{
                            background: '#B092441A',
                            minHeight: '150px'
                          }}
                          onClick={() => handleRoomToggle(room.id.toString())}
                        >
                          {/* Checkbox - always visible */}
                          <div className="absolute top-4 left-4 w-6 h-6 border-2 border-gray-400 rounded-sm flex items-center justify-center bg-white">
                            {selectedRooms.includes(room.id.toString()) && (
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>

                          {/* Room Content */}
                          <div className="h-full flex flex-col">
                            {/* Header with checkbox and room info */}
                            <div className="flex items-start mb-4" style={{ paddingLeft: '40px' }}>
                              <div className="flex-1">
                                <h3 className="text-2xl font-normal text-black mb-1" style={{ fontFamily: 'serif' }}>{room.type}</h3>
                                <p className="text-base font-medium mb-1" style={{ color: '#B8860B' }}>
                                  {room.name}
                                </p>
                                <p className="text-sm text-black">{room.capacity}</p>
                                <p className="text-sm text-gray-600">{room.view}</p>
                              </div>
                              <div className="text-right ml-auto">
                                {/* Price positioned in top-right */}
                                <p className="text-4xl font-normal" style={{ color: '#B8860B' }}>
                                  ${room.price}
                                </p>
                              </div>
                            </div>
                            
                            {/* Simple Amenities List */}
                            <div className="space-y-1 mb-4" style={{ paddingLeft: '40px' }}>
                              {/* Create a simple amenities array based on room data */}
                              {(() => {
                                const amenities = [];
                                
                                // Add specifications
                                if (room.specifications.privateBath) amenities.push(labels.bathroom);
                                if (room.specifications.doubleBed) amenities.push('Double Bed');
                                if (room.specifications.queenSizeBed) amenities.push('Queen Size Bed');
                                if (room.specifications.sofaBed) amenities.push('Sofa Bed');
                                
                                // Add amenities
                                if (room.amenities.wifi) amenities.push(labels.wifiAvailable);
                                if (room.amenities.ac) amenities.push(labels.acAvailable);
                                if (room.amenities.balcony) amenities.push('Balcony');
                                if (room.amenities.tv) amenities.push(labels.television);
                                
                                return amenities.slice(0, 4).map((amenity, index) => (
                                  <div key={index} className="flex items-center">
                                    <span className="mr-2 text-blue-600">•</span>
                                    <span className="text-base text-blue-600">{amenity}</span>
                                  </div>
                                ));
                              })()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Guest Selection Dropdown */}
        <div>
          <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-2">
            {labels.numberOfGuestsLabel}
          </label>
          <select
            id="numberOfGuests"
            value={numberOfGuests}
            onChange={(e) => onGuestChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent bg-white text-gray-900"
            style={{ height: '48px' }}
          >
            <option value="" className="text-gray-600">{labels.numberOfGuestsPlaceholder}</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num.toString()} className="text-gray-900">
                {num} {num === 1 ? labels.guest : labels.guests}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Rooms Summary */}
      {selectedRooms.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">{labels.selectedRoomsTitle}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedRooms.map((roomId) => {
              const room = rooms.find(r => r.id === roomId);
              return room ? (
                <div key={roomId} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{room.name}</span>
                  <span className="font-semibold" style={{ color: '#B8860B' }}>
                    ${room.price}{labels.perNight}
                  </span>
                </div>
              ) : null;
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-900">
              {labels.totalPerNight}
            </span>
            <span className="text-lg font-bold" style={{ color: '#B8860B' }}>
              ${selectedRooms.reduce((total, roomId) => {
                const room = rooms.find(r => r.id === roomId);
                return total + (room ? room.price : 0);
              }, 0)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
