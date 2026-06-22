# Four-Acre Flora Data Model

## Purpose

Four-Acre Flora is a botany and GIS project used to document plant life across a four-acre property.

The initial data model is intentionally simple and focused on:

- Plant identification
- Observation tracking
- Property zones
- GIS mapping
- Photo documentation

Future goals may include:

- Species distribution maps
- GIS visualization
- Ecological analysis
- R-based data analysis
- Long-term plant monitoring

## Core Data Model

The application currently consists of four primary entities:

```txt
zones
species
observations
photos
```

Relationships:

```txt
Zone
  └── Many Observations

Species
  └── Many Observations

Observation
  └── Many Photos
```

## Zones

Zones represent logical areas of the property.

Examples:

```txt
North Woods
South Woods
Meadow
Orchard
Pond Edge
Front Garden
```

Schema:

```txt
zones
- id
- name
- description
- created_at
- updated_at
```

Notes:

- Zones are human-friendly organizational areas.
- A zone may contain many observations.
- Zones do not store plant data directly.

## Species

Species represent the botanical identity of a plant.

Schema:

```txt
species
- id
- common_name
- scientific_name
- family
- native_status
- notes
- created_at
- updated_at
```

Example:

```txt
Common Name: White Oak
Scientific Name: Quercus alba
Family: Fagaceae
```

Notes:

- Species records should be reused whenever possible.
- Observations reference a species using species_id.

## Observations

Observations are the central entity of the application.

Each observation records where and when a plant was observed.

Schema:

```txt
observations
- id

- species_id
- zone_id

- observed_date

- light_exposure
- soil_moisture
- habitat

- latitude
- longitude

- notes

- created_at
- updated_at
```

Notes:

- Observations belong to a single zone.
- Observations reference a single species.
- Multiple observations may exist for the same species.
- Latitude and longitude allow precise GIS mapping.
- Zone and GPS coordinates are intentionally stored together.

Example:

```txt
Zone: North Woods

Observation A
  Species: White Oak
  Lat/Lon: 41.xxxx, -74.xxxx

Observation B
  Species: White Oak
  Lat/Lon: 41.xxxx, -74.xxxx
```

## Photos

Photos provide visual documentation for observations.

Schema:

```txt
photos
- id
- observation_id
- image_url
- caption
- created_at
```

Notes:

- An observation may have multiple photos.
- Photos should always be associated with an observation.
- Photos are considered evidence/documentation of a recorded observation.

## Controlled Values

### Light Exposure

```txt
full-shade
part-shade
part-sun
full-sun
```

### Soil Moisture

```txt
dry
average
moist
wet
```

### Habitat

```txt
deep-forest
forest-edge
meadow
orchard
garden
lawn
wetland
```

## GIS Philosophy

Zones and GPS coordinates serve different purposes.

```txt
Zone
  = Human-friendly grouping

Latitude/Longitude
  = Precise physical location
```

A single zone may contain many observation locations.

Example:

```txt
North Woods
  ├── Fern Patch
  ├── Stream Edge
  ├── Oak Grove
  └── Rocky Outcrop
```

Each observation may have a different coordinate pair while still belonging to the same zone.

This approach supports:

- GIS mapping
- Species distribution maps
- Heat maps
- Spatial analysis
- Future R workflows

without requiring future schema changes.

## Initial Design Principles

1. Keep the model simple.
2. Avoid premature optimization.
3. Store observations, not assumptions.
4. Keep taxonomy separate from observations.
5. Keep zones separate from coordinates.
6. Prefer reusable species records.
7. Build for GIS compatibility from the beginning.
8. Allow the model to evolve as botanical knowledge grows.
