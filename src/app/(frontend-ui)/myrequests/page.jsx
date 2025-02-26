export async function generateMetadata() {
  // Build dynamic metadata
  const metadata = {
    title: "Submitted requests",
    description: "At Give For Good Global Foundation, we firmly believe that collective action is the catalyst for change. Join us in our endeavor to uplift communities, empower individuals, and build a more compassionate world.",
  };

  return metadata;
}

// Import the client-side component
import MyRequest from "./MyRequest";

export default function Page() {
  return <MyRequest />;
}
