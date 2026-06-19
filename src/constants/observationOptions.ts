export const lightExposureOptions = [
  { value: "full-shade", label: "Full Shade" },
  { value: "part-shade", label: "Part Shade" },
  { value: "part-sun", label: "Part Sun" },
  { value: "full-sun", label: "Full Sun" },
] as const;

export const soilMoistureOptions = [
  { value: "dry", label: "Dry" },
  { value: "average", label: "Average" },
  { value: "moist", label: "Moist" },
  { value: "wet", label: "Wet" },
] as const;

export const habitatOptions = [
  { value: "deep-forest", label: "Deep Forest" },
  { value: "forest-edge", label: "Forest Edge" },
  { value: "meadow", label: "Meadow" },
  { value: "orchard", label: "Orchard" },
  { value: "garden", label: "Garden" },
  { value: "lawn", label: "Lawn" },
  { value: "wetland", label: "Wetland" },
] as const;
