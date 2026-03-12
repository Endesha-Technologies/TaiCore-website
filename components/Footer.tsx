export default function Footer() {
  return (
    <footer className="py-8 px-4" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto text-center text-white">
        <p className="mb-2">© 2024 Endesha. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Terms of Service</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
        </div>
      </div>
    </footer>
  );
}
