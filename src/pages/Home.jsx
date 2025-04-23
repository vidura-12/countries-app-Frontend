import React, { useState, useEffect, useContext } from "react";
import LoginBox from "../components/LoginBox";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import SortFilter from "../components/SortFilter"; // New import
import CountryList from "../components/CountryList";
import CountryModal from "../components/CountryModal";
import AuthModal from "../components/AuthModal";
import { UserContext } from "../context/UserContext";
import { fetchAllCountries, fetchCountriesByRegion, searchCountryByName } from "../services/countriesAPI"
import Pagination from '../components/Pagination';
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState(null);
  const { addSearchTerm, recentCountries, setRecentCountries } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12); // Number of countries per page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Calculate pagination
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  // Fetch countries based on region or search term
  useEffect(() => {
    setCurrentPage(1);
    const fetchCountries = async () => {
      let data = [];
      
      if (region) {
        data = await fetchCountriesByRegion(region);
      } else if (searchTerm) {
        data = await searchCountryByName(searchTerm);
      } else {
        data = await fetchAllCountries();
      }
      
      if (Array.isArray(data)) {
        setCountries(data);
        setFilteredCountries(data);
      } else {
        setCountries([]);
        setFilteredCountries([]);
      }
    };

    fetchCountries();
  }, [searchTerm, region, sortOption]);

  // Apply sorting when sortOption or countries change
  useEffect(() => {
    const sortedCountries = [...filteredCountries];
    
    switch (sortOption) {
      case "name-asc":
        sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        break;
      case "name-desc":
        sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
        break;
      case "population-asc":
        sortedCountries.sort((a, b) => a.population - b.population);
        break;
      case "population-desc":
        sortedCountries.sort((a, b) => b.population - a.population);
        break;
      case "area-asc":
        sortedCountries.sort((a, b) => (a.area || 0) - (b.area || 0));
        break;
      case "area-desc":
        sortedCountries.sort((a, b) => (b.area || 0) - (a.area || 0));
        break;
      default:
        break;
    }
    
    setFilteredCountries(sortedCountries);
  }, [sortOption, countries]);

  const handleCountryClick = (cca3) => {
    const country = countries.find((c) => c.cca3 === cca3);
    if (country) {
      setSelectedCountry(country);
      addSearchTerm(cca3);
      setRecentCountries((prev) => {
        const updated = [cca3, ...prev.filter((c) => c !== cca3)];
        return updated.slice(0, 10);
      });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Blur overlays */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isAuthModalOpen ? 'backdrop-blur-sm bg-black/20' : 'backdrop-blur-none bg-transparent pointer-events-none'}`}></div>
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${selectedCountry ? 'backdrop-blur-sm bg-black/20' : 'backdrop-blur-none bg-transparent pointer-events-none'}`}></div>
      
      {/* Main content */}
      <div className={`transition-all duration-300 p-4 ${isAuthModalOpen || selectedCountry ? 'filter blur-sm' : 'filter-none'}`}>
        <LoginBox 
          onStateChange={(isOpen, type) => {
            setIsAuthModalOpen(isOpen);
            setAuthModalType(type);
          }} 
        />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <SearchBar onSearch={setSearchTerm} />
            
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
              
              <RegionFilter onFilter={setRegion} />
             
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              
              
              <SortFilter onSortChange={setSortOption} />
            </div>
            {recentCountries.length > 0 && (
  <div className="my-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
    <h2 className="font-semibold text-lg mb-3 text-gray-700">Recently Viewed</h2>
    <div className="flex gap-2 flex-wrap">
      {recentCountries.map((code) => {
        const country = countries.find((c) => c.cca3 === code);
        return (
          <button
            key={code}
            onClick={() => handleCountryClick(code)}
            className="bg-white text-sm px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200 shadow-xs transition-colors duration-200 flex items-center gap-1"
          >
            {country?.cca2 && (
              <img 
                src={`https://flagcdn.com/24x18/${country.cca2.toLowerCase()}.png`}
                alt={country.name.common}
                className="w-6 h-4 mr-1 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            {country?.flag && (
              <span 
                className="text-base emoji-font" 
                role="img" 
                aria-label={country.name.common}
              >
                {country.flag}
              </span>
            )}
            <span>{country?.name?.common || code}</span>
          </button>
        );
      })}
    </div>
  </div>
)}

<CountryList 
        countries={currentCountries} 
        onCountryClick={handleCountryClick} 
      />
        </div>
      </div>

      {/* Modals */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <AuthModal
            type={authModalType}
            onClose={() => setIsAuthModalOpen(false)}
            onAuth={(username) => {
              setIsAuthModalOpen(false);
            }}
          />
        </div>
      )}

      {selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <CountryModal
            country={selectedCountry}
            onClose={() => setSelectedCountry(null)}
          />
        </div>
      )}
     {/* Add Pagination component */}
     {filteredCountries.length > countriesPerPage && (
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    paginate={paginate}
  />
)}
    </div>
  );
};

export default Home;