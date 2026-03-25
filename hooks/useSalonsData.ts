import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

export interface Salon {
  id: string;
  name: string;
  description?: string;
  address?: string;
  rating?: number | string;
  image_url?: string;
  tags?: string[];
  city?: string;
  price?: number;
  SalonStyle?: any[];
}

export interface TattooStyle {
  id: string;
  name: string;
}

export function useSalonsData() {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [styles, setStyles] = useState<TattooStyle[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSalons() {
      const { data, error } = await supabase
        .from('Salon')
        .select(`*, SalonStyle(style_id, TattooStyle(name))`);
      if (error) setErrorMsg(error.message);
      else if (data) {
        const salonsWithTags = data.map((salon: Salon) => {
          const tags = (salon.SalonStyle || [])
            .map((ss: any) => ss.TattooStyle?.name)
            .filter(Boolean);
          return { ...salon, tags };
        });
        setSalons(salonsWithTags);
      }
    }
    async function fetchStyles() {
      const { data, error } = await supabase.from('TattooStyle').select('*');
      if (!error && data) setStyles(data);
    }
    fetchSalons();
    fetchStyles();
  }, []);

  return { salons, styles, errorMsg };
}
