"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RoomSelectionContextType {
  selectedRooms: string[];
  addRoom: (roomId: string) => void;
  removeRoom: (roomId: string) => void;
  clearSelection: () => void;
  isRoomSelected: (roomId: string) => boolean;
}

const RoomSelectionContext = createContext<RoomSelectionContextType | undefined>(undefined);

export const useRoomSelection = () => {
  const context = useContext(RoomSelectionContext);
  if (!context) {
    throw new Error('useRoomSelection must be used within a RoomSelectionProvider');
  }
  return context;
};

interface RoomSelectionProviderProps {
  children: ReactNode;
}

export const RoomSelectionProvider: React.FC<RoomSelectionProviderProps> = ({ children }) => {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

  const addRoom = (roomId: string) => {
    setSelectedRooms(prev => 
      prev.includes(roomId) ? prev : [...prev, roomId]
    );
  };

  const removeRoom = (roomId: string) => {
    setSelectedRooms(prev => prev.filter(id => id !== roomId));
  };

  const clearSelection = () => {
    setSelectedRooms([]);
  };

  const isRoomSelected = (roomId: string) => {
    return selectedRooms.includes(roomId);
  };

  return (
    <RoomSelectionContext.Provider value={{
      selectedRooms,
      addRoom,
      removeRoom,
      clearSelection,
      isRoomSelected
    }}>
      {children}
    </RoomSelectionContext.Provider>
  );
};
