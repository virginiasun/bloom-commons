export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-bloom-gray">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌱</span>
          <span className="font-heading font-bold text-bloom-dark">Bloom Commons</span>
          <span className="text-bloom-gray/60">&copy; 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-bloom-dark transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-bloom-dark transition-colors">
            Contact
          </a>
        </div>

        <p className="text-bloom-gray/50 text-xs">
          Built with care in Seattle
        </p>
      </div>
    </footer>
  );
}
