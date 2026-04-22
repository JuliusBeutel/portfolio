export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 text-center text-[var(--color-text-muted)] text-sm">
      © {new Date().getFullYear()} Julius Beutel
    </footer>
  );
}
