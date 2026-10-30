import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-6 text-center text-[15px] text-background">
      © 2026 {profile.name}
    </footer>
  );
}
