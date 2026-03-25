import { useMemo } from 'react';
import { SalonFilters } from '../components/home/SalonFilterBar';

export function useSalonFilters(salons: any[], filters: SalonFilters) {
  return useMemo(() => {
    return salons.filter((salon) => {
      if (filters.style && filters.style.length > 0) {
        if (!filters.style.some((styleName) => Array.isArray(salon.tags) && salon.tags.includes(styleName))) return false;
      }
      if (filters.city && (salon.city === undefined || salon.city === null || typeof salon.city !== 'string' || !salon.city.toLowerCase().includes(filters.city.toLowerCase()))) return false;
      if (filters.rating && (salon.rating === undefined || salon.rating === null || (typeof salon.rating === 'string' ? parseFloat(salon.rating) : salon.rating) < filters.rating)) return false;
      if (filters.priceMin && typeof salon.price === 'number' && salon.price < filters.priceMin) return false;
      if (filters.priceMax && typeof salon.price === 'number' && salon.price > filters.priceMax) return false;
      if (filters.name && !salon.name?.toLowerCase().includes(filters.name.toLowerCase())) return false;
      return true;
    });
  }, [salons, filters]);
}
