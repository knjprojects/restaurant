"use client";
import { useState } from 'react';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';

const SearchComponent = () => {
  const [address, setAddress] = useState('');
  const [placeId, setPlaceId] = useState('');

  const handleSelect = async (selectedAddress:any, selectedPlaceId:any) => {
    setAddress(selectedAddress);
    setPlaceId(selectedPlaceId);
  };

  return (
    <div>
      <h2>Search for a Business:</h2>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }:any) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter a business name' })} />
            <div>
              {suggestions.map((suggestion:any) => (
                <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {placeId && <p>Selected Place ID: {placeId}</p>}
    </div>
  );
};

export default SearchComponent;
