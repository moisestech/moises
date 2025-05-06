'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const WORKSHOP_DATA = [
  {
    id: 1,
    title: "Digital Literacy Workshop",
    location: "Miami, FL",
    date: "2024-06-15",
    participants: 25,
    duration: "3 hours",
    description: "Hands-on workshop focusing on essential digital skills for artists and creators.",
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: 2,
    title: "Community Tech Training",
    location: "Tampa, FL",
    date: "2024-07-01",
    participants: 30,
    duration: "4 hours",
    description: "Comprehensive training on community engagement through technology.",
    coordinates: { lat: 27.9506, lng: -82.4572 }
  },
  {
    id: 3,
    title: "AI for Artists",
    location: "Orlando, FL",
    date: "2024-07-15",
    participants: 20,
    duration: "3 hours",
    description: "Introduction to AI tools and their creative applications in art.",
    coordinates: { lat: 28.5383, lng: -81.3792 }
  },
  {
    id: 4,
    title: "Tech Nonprofit Summit",
    location: "Jacksonville, FL",
    date: "2024-08-01",
    participants: 40,
    duration: "6 hours",
    description: "A comprehensive summit on technology integration in nonprofit organizations.",
    coordinates: { lat: 30.3322, lng: -81.6557 }
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function WorkshopsMap() {
  const { theme } = useTheme();
  const [selectedWorkshop, setSelectedWorkshop] = useState<number | null>(null);
  const [view, setView] = useState<'map' | 'list'>('map');
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || !mapboxgl.accessToken) return;

    // Initialize map
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: theme === 'dark' 
        ? 'mapbox://styles/mapbox/dark-v11'
        : 'mapbox://styles/mapbox/light-v11',
      center: [-81.5158, 27.6648], // Center of Florida
      zoom: 6
    });

    map.current = newMap;

    // Add navigation controls
    newMap.addControl(new mapboxgl.NavigationControl());

    // Add markers for each workshop
    WORKSHOP_DATA.forEach((workshop) => {
      const markerElement = document.createElement('div');
      markerElement.className = 'workshop-marker';
      markerElement.innerHTML = `<div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
      </div>`;

      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([workshop.coordinates.lng, workshop.coordinates.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-bold text-sm">${workshop.title}</h3>
                <p class="text-xs text-gray-600">${workshop.date}</p>
              </div>
            `)
        )
        .addTo(newMap);

      markers.current.push(marker);

      markerElement.addEventListener('click', () => {
        setSelectedWorkshop(workshop.id);
      });
    });

    return () => {
      markers.current.forEach(marker => marker.remove());
      if (map.current) map.current.remove();
    };
  }, [theme]);

  // Update marker and map styles when theme changes
  useEffect(() => {
    if (!map.current) return;
    map.current.setStyle(
      theme === 'dark'
        ? 'mapbox://styles/mapbox/dark-v11'
        : 'mapbox://styles/mapbox/light-v11'
    );
  }, [theme]);

  // Fly to selected workshop
  useEffect(() => {
    if (!map.current || selectedWorkshop === null) return;
    
    const workshop = WORKSHOP_DATA.find(w => w.id === selectedWorkshop);
    if (!workshop) return;

    map.current.flyTo({
      center: [workshop.coordinates.lng, workshop.coordinates.lat],
      zoom: 12,
      duration: 2000
    });
  }, [selectedWorkshop]);

  const MapView = () => (
    <div 
      ref={mapContainer} 
      className={`relative h-[400px] rounded-xl border ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      }`}
    />
  );

  const ListView = () => (
    <div className="space-y-4">
      {WORKSHOP_DATA.map((workshop) => (
        <motion.div
          key={workshop.id}
          className={`p-4 rounded-xl border ${
            theme === 'dark' 
              ? 'border-gray-700 bg-gray-800/50' 
              : 'border-gray-200 bg-white'
          } ${selectedWorkshop === workshop.id ? 'ring-2 ring-blue-500' : ''}`}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedWorkshop(workshop.id)}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{workshop.title}</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {workshop.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {new Date(workshop.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {workshop.participants} participants
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {workshop.duration}
                  </span>
                </div>
              </div>
              <p className={`mt-3 text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>{workshop.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setView('map')}
          className={`px-4 py-2 rounded-lg ${
            view === 'map'
              ? theme === 'dark'
                ? 'bg-blue-500 text-white'
                : 'bg-blue-600 text-white'
              : theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Map View
        </button>
        <button
          onClick={() => setView('list')}
          className={`px-4 py-2 rounded-lg ${
            view === 'list'
              ? theme === 'dark'
                ? 'bg-blue-500 text-white'
                : 'bg-blue-600 text-white'
              : theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          List View
        </button>
      </div>

      {view === 'map' ? <MapView /> : <ListView />}
      
      <div className="mt-8">
        <h3 className={`text-xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>Workshop Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Workshops', value: WORKSHOP_DATA.length },
            { label: 'Total Participants', value: WORKSHOP_DATA.reduce((acc, curr) => acc + curr.participants, 0) },
            { label: 'Locations', value: new Set(WORKSHOP_DATA.map(w => w.location)).size },
            { label: 'Total Hours', value: WORKSHOP_DATA.reduce((acc, curr) => acc + parseInt(curr.duration), 0) }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>{stat.label}</p>
              <p className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 