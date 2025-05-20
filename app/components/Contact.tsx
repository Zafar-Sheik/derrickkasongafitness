// components/contact.tsx
export function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-amber-500">Get in Touch</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="group">
            <p className="text-2xl font-medium text-gray-300 group-hover:text-amber-500 transition-colors">
              📞 +27 76 076 7856
            </p>
          </div>

          <div className="group">
            <p className="text-xl text-gray-400 group-hover:text-amber-500 transition-colors">
              39 Bellamont Rd, Umdloti, Durban, 4319
            </p>
          </div>

          <div className="pt-8">
            <iframe
              className="w-full h-64 rounded-lg border-2 border-amber-500/30 hover:border-amber-500 transition-all"
              src="https://maps.google.com/maps?q=39%20Bellamont%20Rd,%20Umdloti&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
