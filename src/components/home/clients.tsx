import fs from "fs";
import path from "path";
import ClientsMarquee from "./clients-marquee";

// Image extensions to include
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".svg", ".webp"];

// Files to exclude from the marquee (add filenames here if needed)
const EXCLUDE_FILES: string[] = [];

export default function Clients() {
  const companyDir = path.join(process.cwd(), "public", "company");

  let clients: { name: string; logo: string }[] = [];

  try {
    const files = fs.readdirSync(companyDir);
    clients = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXTENSIONS.includes(ext) && !EXCLUDE_FILES.includes(file);
      })
      .map((file) => ({
        // Use the filename without extension as the display name
        name: path.basename(file, path.extname(file)),
        logo: `/company/${file}`,
      }));
  } catch (e) {
    console.error("Could not read company logos directory:", e);
  }

  return <ClientsMarquee clients={clients} />;
}
