// SeafarerHistoryMap.tsx
import React, { useMemo } from "react";
import type { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export type VisitInput = {
  lat?: number | string;
  lng?: number | string;
  title?: string;
};

export type Visit = {
  lat: number;
  lng: number;
  title?: string;
};

export type SeafarerHistoryMapProps = {
  visits: VisitInput[];
  zoom?: number;
  className?: string;
  heightPx?: number;
};

const NUS: Visit = {
  lat: 1.2976,
  lng: 103.7767,
  title: "National University of Singapore, our Home",
};

function toFiniteNumber(v: number | string | undefined): number | undefined {
  if (v === undefined) return undefined;
  const n = typeof v === "number" ? v : parseFloat(v);
  return Number.isFinite(n) ? n : undefined;
}

function normalizeVisit(v: VisitInput): Visit | null {
  const lat = toFiniteNumber(v.lat);
  const lng = toFiniteNumber(v.lng);
  if (lat === undefined || lng === undefined) return null;
  return { lat, lng, title: v.title };
}

const SeafarerHistoryMap: React.FC<SeafarerHistoryMapProps> = ({
  visits,
  zoom = 5,
  className,
  heightPx = 600,
}) => {
  // Normalize and filter invalid coords. Always include NUS.
  const normalized: Visit[] = useMemo(() => {
    const core = visits.reduce<Visit[]>((acc, v) => {
      const nv = normalizeVisit(v);
      if (nv) acc.push(nv);
      return acc;
    }, []);

    const hasNUS = core.some((v) => v.lat === NUS.lat && v.lng === NUS.lng);
    return hasNUS ? core : [NUS, ...core];
  }, [visits]);

  const center: LatLngTuple = [NUS.lat, NUS.lng];

  return (
    <div className={className ?? "w-[80%] max-w-full"} style={{ height: `${heightPx}px` }}>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {normalized.map((v, i) => {
          const pos: LatLngTuple = [v.lat, v.lng];
          const key = `${v.lat},${v.lng},${v.title ?? ""},${i}`;
          return (
            <Marker key={key} position={pos}>
              <Popup>{v.title ?? `Stop ${i + 1}`}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default SeafarerHistoryMap;