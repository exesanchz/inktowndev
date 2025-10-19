import { useEffect, useState } from "react";
import axios from "axios";
import type { Artist } from "../types/artist";
import { Link } from "react-router-dom";

export default function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [styleFilter, setStyleFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/artists")
      .then((res) => setArtists(res.data));
  }, []);

  const filtered = styleFilter
    ? artists.filter((a) =>
        a.style.toLowerCase().includes(styleFilter.toLowerCase())
      )
    : artists;

  return (
    <div style={{ padding: 20 }}>
      <h1>Inktown Artists</h1>
      <input
        placeholder="Filter by style..."
        value={styleFilter}
        onChange={(e) => setStyleFilter(e.target.value)}
      />
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 20 }}
      >
        {filtered.map((artist) => (
          <Link
            key={artist.id}
            to={`/artist/${artist.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: 10,
                borderRadius: 8,
                width: 200,
              }}
            >
              <img
                src={artist.image}
                alt={artist.name}
                style={{ width: "100%", borderRadius: 8 }}
              />
              <h3>{artist.name}</h3>
              <p>{artist.style}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
