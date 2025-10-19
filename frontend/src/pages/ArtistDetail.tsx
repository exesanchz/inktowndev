import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Artist } from "../types/artist";

export default function ArtistDetail() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/artists/${id}`)
      .then((res) => setArtist(res.data));
  }, [id]);

  if (!artist) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <img
        src={artist.image}
        alt={artist.name}
        style={{ width: 200, borderRadius: 8 }}
      />
      <h1>{artist.name}</h1>
      <p>{artist.style}</p>
      <p>{artist.description}</p>
    </div>
  );
}
