import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HealthSahoolat — Digital Healthcare Platform" },
      { name: "description", content: "HealthSahoolat consultation, doctor appointments, lab tests and digital health management." },
      { property: "og:title", content: "HealthSahoolat — Digital Healthcare Platform" },
      { property: "og:description", content: "Consultations, doctor appointments, lab tests and digital health management." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/healthsahoolat.html");
  }, []);
  return null;
}
