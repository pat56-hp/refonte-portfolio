export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-primary bg-secondary-foreground text-xs">
      <p>
        © {new Date().getFullYear()} Patrick Aimé Kouassi. Tous droits réservés.
      </p>
    </footer>
  );
}
